import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/patient-home.css';
import '../../styles/patient-profile.css';
import { MdAccountCircle } from "react-icons/md"; 

const PatientHomePage = () => {
  const [date, setDate] = useState(new Date());
  // Placeholder photo (fallback)
  const profileImageUrl = null;  // Fetched URL or null for fallback

  return (
    <div className="main-container">
      
      
      <div className="content-wrapper">
        {/* Left Section - Content */}
        <div className="content">
          <h1 className="main-text">Welcome!</h1>

        {/* Profile Card */}
        <div className="main-card">
            {/* Profile Photo */}
            <div className="profile-photo">
              {/* Conditionally render either the profile image or the MdAccountCircle icon */}
              {profileImageUrl ? (
                <img src={profileImageUrl} alt="Profile" />
              ) : (
                <MdAccountCircle className="profileicon" /> // Display the MdAccountCircle icon when no image is available
              )}
            </div>

            {/* Profile Name */}
            <div className="profile-name">
              <h2>Name</h2>
              <p className="patient-label">Patient</p>
            </div>
          </div>

          {/* Profile  */}
          <div className="profile">
          <h1 className="profile-text">Profile</h1>
          </div>
        </div>

        {/* Right Section - Separate Content */}
        <div className="content-right">
          <div className="user-container">
            <div className="user-box"></div>
            <div className="user-photo"></div>
            <div className="user-text">User</div>
            </div>

              {/* Calendar  */}
            <div className="calendar-card">
            <h1 className="profile-text">Calendar</h1>
        <div className="card-content">
          <Calendar
            onChange={setDate}
            value={date}
            className="react-calendar"  // Apply custom class to the calendar
          />
        </div>
      </div>

        {/* Article  */}
          <div className="article-card">
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