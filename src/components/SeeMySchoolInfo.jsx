import React, { useState } from 'react';

const SeeMySchoolInfo = () => {
  const [userId, setUserId] = useState('');
  const [schoolInfo, setSchoolInfo] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("See My School Info");
    try {
      const response = await fetch(`http://localhost:8080/class_monitor/school/${userId}`);
      const data = await response.json();
      setSchoolInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    console.log("See My School Info"),
    console.log(userId),
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
          <p>Teachers: {schoolInfo.teachers}</p>
        </div>
      )}
    </div>
  );
};

export default SeeMySchoolInfo;