// StudentList.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  CircularProgress,
} from "@mui/material";
import StudentSummary from "./StudentSummary";

const StudentList = () => {
  const { teacherId } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/class_monitor/teacher/${teacherId}/students`
        );
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [teacherId]);

  const getTeacherFullName = async (teacherId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/class_monitor/teacher/${teacherId}`
      );
      const data = await response.json();
      return data.teacherLastName + " " + data.teacherFirstName;
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
      </Container>
    </Box>
  );
};

export default StudentList;
