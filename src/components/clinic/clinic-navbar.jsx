import React from 'react';
import '../styles/patient/navigationbar.css';

const ClinicNavBar = () => {
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
        <img src="image/home.png" alt="Home" className="icon" />
      </button>
     
      <button className="appointments" onClick={handleAppointmentsClick}>
        <img src="../image/calendar.png" alt="Appointments" className="icon" />
      </button>
      <button className="search" onClick={handleSearchClick} aria-label="Search">
        <img src="../image/search.png" alt="Search" className="icon" />
      </button>
      <button className="health-records" onClick={handleSearchClick} aria-label="Health Records">
        <img src="../image/health-records.png" alt="Health Records" className="icon" />
      </button>
      <button className="settings" onClick={handleSettingsClick} aria-label="Settings">
        <img src="../image/settings.png" alt="Settings" className="icon" />
      </button>
      <button className="logOut" onClick={handleLogOutClick} aria-label="Log Out">
        <img src="../image/logout.png" alt="Log Out" className="icon" />
      </button>
    </div>
  );
};

export default ClinicNavBar;
