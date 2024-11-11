import React from 'react';
import { useNavigate } from 'react-router-dom';  
import PatientNavBar from '../patient-navbar.jsx';
import '../styles/patient-homepage.css';

const PatientHomePage = () => {
  const navigate = useNavigate();  

  const handleBackClick = () => {
    navigate(-1);  // Placeholder for back navigation
  };

  return (
    <div className="main-container">
      {/* Add the navigation bar at the left */}
      <PatientNavBar />
      
      <div className="content">
        <button className="back-button" onClick={handleBackClick}>Back</button>
        <h1 className="welcome">Welcome</h1>
      </div>
    </div>
  );
};

export default PatientHomePage;
