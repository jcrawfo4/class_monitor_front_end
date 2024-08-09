import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SeeMySchoolInfo = () => {
  const [userId, setUserId] = useState(""); // User ID is the schoolId for the back end. It is used to fetch the school information.
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("See My School Info");
    try {
      const response = await fetch(
        `http://localhost:8080/class_monitor/school/${userId}`
      );
      const data = await response.json();
      setSchoolInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTeachers = async () => {
    if (schoolInfo && schoolInfo.schoolId) {
      try {
        const response = await fetch(
          `http://localhost:8080/class_monitor/${schoolInfo.schoolId}/teachers`
        );
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {schoolInfo && (
        <div>
          <h2>School Information</h2>
          <p>School ID: {schoolInfo.schoolId}</p>
          <p>School Name: {schoolInfo.schoolName}</p>
          <p>City: {schoolInfo.city}</p>
          <p>Principal Name: {schoolInfo.principalName}</p>
          <button onClick={fetchTeachers}>Show Teachers</button>

          {teachers.length > 0 && (
            <div>
              <h3>Teachers</h3>
              <ul>
                {teachers.map((teacher) => (
                  <li key={teacher.teacherId}>
                    {teacher.teacherFirstName} {teacher.teacherLastName}
                    <Link to={`/teacher/${teacher.teacherId}/students`}>
                      View Students
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <button onClick={() => handleNavigation("/")}>
        Back to navigation page
      </button>
    </div>
  );
};

export default SeeMySchoolInfo;
