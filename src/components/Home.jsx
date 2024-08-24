// Home.jsx
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "lightblue", minHeight: "100vh", padding: 2 }}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Welcome to the Class Monitor System!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Manage your school efficiently and effectively.
        </Typography>
        <Typography variant="body1" paragraph>
          The Class Monitor System helps administrators keep track of their classrooms' performance, attendance, and behavior. Easily add, view, and manage student information and teachers all in one place.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
          <Button variant="contained" color="primary" component={Link} to="/my-school-information">
            View Classrooms
          </Button>
          <Button variant="contained" color="secondary" component={Link} to="/add-student">
            Add Student
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;