//StudentSummary.jsx
import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const StudentSummary = ({ student }) => {
  // const deleteStudent = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8080/class_monitor/student/${id}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     console.log("Student deleted:", response);
  //   } catch ((error) || (!response.ok)) {
  //     throw new Error("Error deleting student:", error);
  //   }
  // };

  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 2,
        backgroundBlendMode: true,
        backgroundColor: "lightseagreen",
      }}
    >
      <CardContent>
        <Typography variant="h7">
          {student.studentFirstName} {student.studentLastName}
        </Typography>
        <Typography variant="body2">
          Grade Level: {student.studentGrade}
        </Typography>
        <Typography variant="body2">Demerits: {student.demerits}</Typography>
        <Typography variant="body2">Merits: {student.merits}</Typography>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          //onClick={() => deleteStudent(student.id)}
          sx={{ marginTop: 1 }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
export default StudentSummary;
