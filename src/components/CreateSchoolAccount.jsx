import React, { useState } from 'react';

const CreateSchoolAccount = () => {
  const [schoolName, setSchoolName] = useState('');
  const [city, setCity] = useState('');
  const [principalName, setPrincipalName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/class_monitor/school', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schoolName,
          city,
          principalName,
        }),
      });
  
      if (response.status === 201) {
        setSuccessMessage('School account created successfully!');
        setSchoolName('');
        setCity('');
        setPrincipalName('');
      } else {
        console.error('Failed to create school account:', response.statusText);
      }
    } catch (error) {
      console.error('There was an error creating the school account!', error);
    }
  };

  return (
    console.log("Create School Account"),
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>School Name:</label>
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>Principal Name:</label>
          <input
            type="text"
            value={principalName}
            onChange={(e) => setPrincipalName(e.target.value)}
          />
        </div>
        <button type="submit">Create School Account</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default CreateSchoolAccount;