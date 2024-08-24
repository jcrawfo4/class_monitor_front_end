// SeeTeachersStudents.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  Box,
  CircularProgress,
} from "@mui/material";
import StudentSummary from "./StudentSummary";

const SeeTeachersStudents = ({ schoolId }) => {
  const { teacherId } = useParams();
  const [students, setStudents] = useState([]);
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [loading, setLoading] = useState(true);
  const [studentGrade, setStudentGrade] = useState("");
  const [merits, setMerits] = useState(0);
  const [demerits, setDemerits] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/class_monitor/teacher/${teacherId}/students`
        );
        const data = await response.json();
        console.log("data: ", data);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, [teacherId, schoolId]);

  const getTeacherFullName = async (teacherId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/class_monitor/teacher/${teacherId}`
      );
      const data = await response.json();
      console.log("getTeacherFullName data: ", data);
      return data.teacherFirstName + " " + data.teacherLastName;
    } catch (error) {
      console.error("Error fetching teacher full name:", error);
      return "";
    }
  };

  useEffect(() => {
    const fetchTeacherFullName = async () => {
      const fullName = await getTeacherFullName(teacherId);
      setTeacherFullName(fullName);
    };
    fetchTeacherFullName();
  }, [teacherId]);

  const [teacherFullName, setTeacherFullName] = useState("");

  const handleAddStudent = async (e) => {
    console.log("Adding a student...");
    e.preventDefault();
  
    // Validation: Check if any input fields are empty
    if (
      !studentFirstName ||
      !studentLastName ||
      !studentGrade ||
      !schoolId ||
      !teacherId
    ) {
      alert("All fields are required.");
      return;
    }
  
    const newStudent = {
      studentFirstName,
      studentLastName,
      teacherId,
      studentGrade,
      merits,
      demerits,
      schoolId,
    };
  
    try {
      console.log("newStudent:  ", newStudent);
      const response = await fetch(
        `http://localhost:8080/class_monitor/student`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        }
      );
      const data = await response.json();
      const newStudentId = data.studentId;
      console.log("New student added:", data);
      setStudents((prevStudents) => [...prevStudents, data]);
      setStudentFirstName("");
      setStudentLastName("");
      setStudentGrade("");
      setDemerits(0);
      setMerits(0);
  
      // Fetch the updated list of student IDs for the teacher
      const updatedStudentsResponse = await fetch(
        `http://localhost:8080/class_monitor/teacher/${teacherId}/students`
      );
      const updatedStudents = await updatedStudentsResponse.json();
      const updatedStudentIds = updatedStudents.map(student => student.studentId);

      //add the new student id to the list of student ids
      updatedStudentIds.push(newStudentId);
  
      // Update teacher's studentIds
      const updateTeacherResponse = await fetch(
        `http://localhost:8080/class_monitor/teacher/${teacherId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacherId,
            teacherFirstName: teacherFullName.split(" ")[0],
            teacherLastName: teacherFullName.split(" ")[1],
            studentIds: updatedStudentIds,
            schoolId,
          }),
        }
      );
      console.log("Teacher updated:", updateTeacherResponse);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };


  

  return (
    <Box sx={{ backgroundColor: "pink", minHeight: "100vh", padding: 2 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          {teacherFullName}'s Class
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {students.length > 0 ? (
              <List>
                {students.map((student) => (
                  <ListItem key={student.studentId}>
                    <StudentSummary student={student}/>
                </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body1">No students found.</Typography>
            )}
          </>
        )}
        <Typography variant="h6">Add a Student</Typography>
        <h3>Add a Student</h3>
        <form onSubmit={handleAddStudent}>
          <label htmlFor="studentFirstName">First Name:</label>
          <input
            type="text"
            id="studentFirstName"
            value={studentFirstName}
            onChange={(e) => setStudentFirstName(e.target.value)}
          />
          <label htmlFor="studentLastName">Last Name:</label>
          <input
            type="text"
            id="studentLastName"
            value={studentLastName}
            onChange={(e) => setStudentLastName(e.target.value)}
          />
          <br />
          <label htmlFor="studentGrade">Grade Level:</label>
          <input
            type="text"
            id="studentGrade"
            value={studentGrade}
            onChange={(e) => setStudentGrade(e.target.value)}
          />
          <br />
          <label htmlFor="merits">Merits:</label>
          <input
            type="number"
            id="merits"
            value={merits}
            onChange={(e) => setMerits(e.target.value)}
          />
          <br />
          <label htmlFor="demerits">Demerits:</label>
          <input
            type="number"
            id="demerits"
            value={demerits}
            onChange={(e) => setDemerits(e.target.value)}
          />
          <button type="submit">Add Student</button>
        </form>
      </Container>
    </Box>
  );
};

export default SeeTeachersStudents;
