// Import necessary modules
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define the Navigation component
const Navigation = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Welcome to the School Management System</h1>
      <button onClick={() => handleNavigation('/create-school-account')}>Create New School Account</button>
      <button onClick={() => handleNavigation('/my-school-information')}>Get School Information</button>
    </div>
  );
};

export default Navigation;