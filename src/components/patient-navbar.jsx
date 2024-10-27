import React from 'react';
import '../styles/navigationbar.css';
import { Link } from 'react-router-dom'

const PatientNavBar = () => {
  
const handleHomeClick = () => {
        
};
  // Define functions for each button
  const handleProfileClick = () => {
   
  };

  const handleAppointmentsClick = () => {
   
  };

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
      <img className="OpticareLogo21" src="../image/OptiCare LOGO.png" alt="OptiCare Logo" />

      <Link to="/" className="home" aria-label="Home">
        Home
      </Link>
      <Link to="/profile" className="profile" aria-label="Profile">
        Profile
      </Link>
      <Link to="/appointments" className="appointments" aria-label="Appointments">
        Appointments
      </Link>
      <button className="search" onClick={handleSearchClick} aria-label="Search" />
      <button className="settings" onClick={handleSettingsClick} aria-label="Settings" />
      <button className="logOut" onClick={handleLogOutClick} aria-label="Log Out" />
    </div>
  );
};

export default PatientNavBar;
