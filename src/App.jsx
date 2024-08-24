import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import CreateSchoolAccount from "./components/CreateSchoolAccount.jsx";
import SeeMySchoolInfo from "./components/SeeMySchoolInfo.jsx";
import Navbar from "./Navbar.jsx";
import Layout from "./Layout.jsx";
import SeeTeachersStudents from "./components/SeeTeachersStudents.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [userId, setUserId] = useState(""); // User ID is the schoolId for the back end. It is used to fetch the school information.

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-school-account"
            element={<CreateSchoolAccount />}
          />
          <Route path="/my-school-information" element={<SeeMySchoolInfo userId={userId} setUserId={setUserId} />} />
          <Route path="/teacher/:teacherId/students" element={<SeeTeachersStudents schoolId={userId} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
