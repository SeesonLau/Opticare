import React from 'react';
import { useNavigate } from 'react-router-dom';  
import PatientNavBar from '../patient-navbar.jsx';
import '../../styles/patient-homepage.css';

const PatientHomePage = () => {
  const navigate = useNavigate();  

  const handleBackClick = () => {
    navigate(-1);  // Placeholder for back navigation
  };

  return (
    <div className="main-container">
      <PatientNavBar />
      
      <div className="content">
        <button className="back-button" onClick={handleBackClick}>Back</button>
        <h1 className="welcome">Welcome</h1>
        
        <div className="card"></div>
        
        <div className="notifications"></div>
        
        <div className="right-container">
          <div className="calendar"></div>
          <div className="facts"></div>
        </div>
      </div>
    </div>
  );
};

export default PatientHomePage;
