//StudentSummary.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const StudentSummary = ({ student }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h7">
          {student.studentFirstName} {student.studentLastName}
        </Typography>
        <Typography variant="body2">
          Grade Level: {student.student_grade}
        </Typography>
        <Typography variant="body2">Demerits: {student.demerits}</Typography>
        <Typography variant="body2">Merits: {student.merits}</Typography>
      </CardContent>
    </Card>
  );
};
export default StudentSummary;
