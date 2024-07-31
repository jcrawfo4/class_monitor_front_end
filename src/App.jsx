import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import CreateSchoolAccount from "./components/CreateSchoolAccount.jsx";
import SeeMySchoolInfo from "./components/SeeMySchoolInfo.jsx";
import Navbar from "./Navbar.jsx";
import Layout from "./Layout.jsx";

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
