import React from 'react';
import { FaHome, FaCalendarAlt, FaSearch, FaHospitalUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import React Icons
import '../styles/navigationbar.css';

const PatientNavBar = () => {
  // Define functions for each button (optional for now)
  const handleHomeClick = () => {};
  const handleAppointmentsClick = () => {};
  const handleSearchClick = () => {
    console.log("Search button clicked");
    // Add functionality for Search button
  };
  const handleSettingsClick = () => {
    console.log("Settings button clicked");
    // Add functionality for Settings button
  };
  const handleLogOutClick = () => {
    console.log("Log Out button clicked");
    // Add functionality for Log Out button
  };

  return (
    <div className="navbar">

      <button className="dashboard" onClick={handleHomeClick}>
        <FaHome className="icon" />
        <span className="button-text">Dashboard</span>
      </button>
      <button className="health-records" onClick={handleSearchClick} aria-label="Health Records">
        <FaHospitalUser className="icon" />
        <span className="button-text">Records</span>
      </button>
      <button className="appointments" onClick={handleAppointmentsClick}>
        <FaCalendarAlt className="icon" />
        <span className="button-text">Appointments</span>
      </button>
      <button className="search" onClick={handleSearchClick} aria-label="Search">
        <FaSearch className="icon" />
        <span className="button-text">Search</span>
      </button>
      <button className="settings" onClick={handleSettingsClick} aria-label="Settings">
        <FaCog className="icon" />
        <span className="button-text">Settings</span>
      </button>
      <button className="logOut" onClick={handleLogOutClick} aria-label="Log Out">
        <FaSignOutAlt className="icon" />
        <span className="button-text">Logout</span>
      </button>
    </div>
  );
};

export default PatientNavBar;
