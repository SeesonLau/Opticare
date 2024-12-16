import React from 'react';
import { FaHome, FaHospitalUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import '../../styles/clinic/cnav.css';
import OptiCareLogo from '../../image/OptiCareLogo.png'
import { auth } from '../../database/firebase.js'; // Import Firebase auth
import { signOut } from 'firebase/auth';

const ClinicNavBar = ({ onComponentChange }) => {
    const handleLogout = async () => {
      try {
        await signOut(auth); // Sign out the user
        alert('You have successfully logged out.'); // Show alert
        window.location.href = '/'; // Redirect to landing page
      } catch (error) {
        console.error('Logout failed:', error);
        alert('An error occurred while logging out. Please try again.');
      }
    };
    
    return (
      <div className="cnav">
        <img 
        src={OptiCareLogo} 
        alt="OptiCare Logo" 
        className="cnav-logo" />
        <button className="dashboard" onClick={() => onComponentChange('dashboard')}>
          <FaHome className="icon" />
          <span className="cnavbutton-text">Dashboard</span>
        </button>
        <button className="health-records" onClick={() => onComponentChange('patient-records')} aria-label="Health Records">
          <FaHospitalUser className="cnavicon" />
          <span className="cnavbutton-text">EHR</span>
        </button>
        <button className="settings" onClick={() => onComponentChange('settings')} aria-label="Se ttings">
          <FaCog className="cnavicon" />
          <span className="cnavbutton-text">Settings</span>
        </button>
        <button className="logOut" onClick={handleLogout} aria-label="Log Out">
          <FaSignOutAlt className="cnavicon" />
          <span className="cnavbutton-text">Logout</span>
        </button>
      </div>
    );
  };
  
  export default ClinicNavBar;
