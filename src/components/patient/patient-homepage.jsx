import React from 'react';
import { useNavigate } from 'react-router-dom';  
import PatientNavBar from '../patient-navbar.jsx';
import '../../styles/patient-homepage.css';

const PatientHomePage = () => {
  const navigate = useNavigate();  

  const handleBackClick = () => {
    navigate(-1);  // Placeholder for back navigation
  };
  
  //PLACEHOLDER PHOTO
   // Fallback for profile image in case it's not provided
   const profileImageUrl = /* fetched URL or null for fallback */ null;

  return (
    <div className="main-container">
      <PatientNavBar />
      
      <div className="content">
        <h1 className="welcome">Welcome!</h1>

        {/* Profile Card */}
        <div className="profile-card">
          {/* Profile Photo */}
          <div className="profile-photo">
           {/* Placeholder photo */}
          <img 
              src={profileImageUrl || "https://via.placeholder.com/100"} 
              alt="Profile" 
            />
          </div>

         {/* Profile Name */}
         <div className="profile-name">
          {/* Placeholder name */}
            <h2>Name</h2> 
            <p className="patient-label">Patient</p>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="notifications">

          {/* Notification Section */}
          <div className="notification-section">
            <h3>Notifications</h3>
            <div className="notification-card">
            </div>
          </div>

          {/* Clinics Section */}
          <div className="clinics-section">
            <h3>Clinics Near You</h3>
            <div className="clinics-card">
            </div>
          </div>
        </div>
      </div>
       <button className="back-button" onClick={handleBackClick}>Back</button>
    </div>
    
  );
};

export default PatientHomePage;
