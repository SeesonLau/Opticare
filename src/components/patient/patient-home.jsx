import React from 'react';
import '../../styles/patient/patient-home.css';

const PatientHomePage = () => {
  
  // Placeholder photo (fallback)
  const profileImageUrl = null;  // Fetched URL or null for fallback

  return (
    <div className="main-container">
      
      
      <div className="content-wrapper">
        {/* Left Section - Content */}
        <div className="content">
          <h1 className="welcome">Welcome!</h1>

          {/* Profile Card */}
          <div className="profile-card">
            {/* Profile Photo */}
            <div className="profile-photo">
              <img 
                src={profileImageUrl || "https://via.placeholder.com/100"} 
                alt="Profile" 
              />
            </div>

            {/* Profile Name */}
            <div className="profile-name">
              <h2>Name</h2>
              <p className="patient-label">Patient</p>
            </div>
          </div>

          {/* Notifications and Clinics Section */}
          <div className="notifications">
            <div className="notification-section">
              <h3>Notifications</h3>
              <div className="notification-card">
                {/* Notifications content */}
              </div>
            </div>

            <div className="clinics-section">
              <h3>Clinics Near You</h3>
              <div className="clinics-card">
                {/* Clinics content */}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Separate Content */}
        <div className="content-right">
          <div className="calendar">
            <h3>Calendar</h3>
            <div className="card-content">
              {/* Content for card 1 */}
            </div>
          </div>

          <div className="facts">
            <h3>Fun facts</h3>
            <div className="card-content">
              {/* Content for card 2 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHomePage;