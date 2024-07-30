import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import CreateSchoolAccount from './components/CreateSchoolAccount.jsx';
import SeeMySchoolInfo from './components/SeeMySchoolInfo.jsx';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation/>} />
        <Route path="/create-school-account" element={<CreateSchoolAccount/>} />
        <Route path="/my-school-information" element={<SeeMySchoolInfo/>}/>
      </Routes>
    </Router>
  );
};

export default App;