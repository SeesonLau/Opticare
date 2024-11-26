import React from 'react';
import { FaHome, FaUser, FaCalendarAlt, FaSearch, FaHospitalUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import React Icons
import '../styles/navigationbar.css';

const PatientNavBar = () => {
  // Define functions for each button (optional for now)
  const handleHomeClick = () => {};
  const handleProfileClick = () => {};
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
      <img className="OpticareLogo21" src="/image/OptiCare LOGO2.png" alt="OptiCare Logo" />
  
      <button className="home" onClick={handleHomeClick}>
        <FaHome className="icon" />
      </button>
      <button className="profile" onClick={handleProfileClick}>
        <FaUser className="icon" />
      </button>
      <button className="appointments" onClick={handleAppointmentsClick}>
        <FaCalendarAlt className="icon" />
      </button>
      <button className="search" onClick={handleSearchClick} aria-label="Search">
        <FaSearch className="icon" />
      </button>
      <button className="health-records" onClick={handleSearchClick} aria-label="Health Records">
        <FaHospitalUser className="icon" />
      </button>
      <button className="settings" onClick={handleSettingsClick} aria-label="Settings">
        <FaCog className="icon" />
      </button>
      <button className="logOut" onClick={handleLogOutClick} aria-label="Log Out">
        <FaSignOutAlt className="icon" />
      </button>
    </div>
  );
};

export default PatientNavBar;
