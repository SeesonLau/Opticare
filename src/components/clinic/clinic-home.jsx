import React, { useState } from 'react';
import '../../styles/patient/patient-home.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for react-calendar
import '../../styles/clinic/calendar-style.css';
import '../../styles/clinic/visit-style.css';
import '../../styles/clinic/clinic-homepage-style.css';
import '../../styles/clinic/patientlist-style.css';
import '../../styles/clinic/profile-style.css';
import { MdAccountCircle } from "react-icons/md"; // Import MdAccountCircle icon

const ClinicHomePage = () => {
  const [date, setDate] = useState(new Date()); // State to manage the selected date

  // Placeholder photo (fallback)
  const profileImageUrl = null; // Fetched URL or null for fallback

  return (
    <div className="main-container">
      <div className="content-wrapper">
        {/* Left Section - Content */}
        <div className="content">
        <h1 className="clinic-homepage-title">Welcome</h1>

        {/* Profile Card */}
        <div className="profile-card">
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
            <h2 className="profile-title">Dr. Name</h2>
              <p className="clinic-label">Optometrist</p>
            </div>
          </div>

          {/* Patient List and Consultation Section */}
          <div className="notifications">
            <div className="notification-section">
            <h3 className="patientlist-title">Patient List</h3>
              <div className="notification-card">
                {/* Notifications content */}
              </div>
            </div>

            <div className="clinics-section">
            <h3 className="patientlist-title">Consulation</h3>
              <div className="clinics-card">
                {/* Clinics content */}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Calendar */}
        <div className="content-right">
          <div className="calendar-container">
            <h3 className="calendar-title">Clinic Calendar</h3>
            <div className="calendar-card-content">
              <Calendar
                className="custom-calendar"
                onChange={setDate}
                value={date}
              />
            </div>
            <h3 className="calendar-title">Upcoming</h3>
            <div className="calendar-container">
            <h1 className="calendar-appointment ">Appointment</h1>

             {/* Appointment Photo */}
             <div className="profile-photo">
              {/* Conditionally render either the profile image or the MdAccountCircle icon */}
              {profileImageUrl ? (
                <img src={profileImageUrl} alt="Profile" />
              ) : (
                <MdAccountCircle className="profileicon" /> // Display the MdAccountCircle icon when no image is available
              )}
            </div>


          </div>
          </div>


         {/* Right Section - Visits for today */}
         <div className="content-right">
         <h1 className="visit-title">Visits for Today</h1>
         <h1 className="visit-title">200</h1>
         <div class="container">
  <div class="visit-newpatientContainer">
  <h3 className="Patient-title">New Patient</h3>
  <h1 className="visit-title">200</h1>

  </div>
  <div class="visit-oldpatientContainer">
  <h3 className="Patient-title">Old Patient</h3>
  <h1 className="visit-title">100</h1>

            <div className="visit-card-content">
             
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ClinicHomePage;
