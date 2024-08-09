import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import CreateSchoolAccount from "./components/CreateSchoolAccount.jsx";
import SeeMySchoolInfo from "./components/SeeMySchoolInfo.jsx";
import Navbar from "./Navbar.jsx";
import Layout from "./Layout.jsx";
import SeeTeachersStudents from "./components/SeeTeachersStudents.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/create-school-account"
            element={<CreateSchoolAccount />}
          />
          <Route path="/my-school-information" element={<SeeMySchoolInfo />} />
          <Route path="/teacher/:teacherId/students" element={<SeeTeachersStudents />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
