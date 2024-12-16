import React from 'react';
import { FaHome, FaCalendarAlt, FaSearch, FaHospitalUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import React Icons
import '../../styles/patient/navigationbar.css';
import OptiCareLogo from '../../image/OptiCareLogo.png'

const PatientNavBar = ({ onComponentChange }) => {
  return (
    <div className="navbar">
      <img 
      src={OptiCareLogo} 
      alt="OptiCare Logo" 
      className="navbar-logo" />
      <button className="dashboard" onClick={() => onComponentChange('dashboard')}>
        <FaHome className="icon" />
        <span className="button-text">Dashboard</span>
      </button>
      <button className="health-records" onClick={() => onComponentChange('patient-records')} aria-label="Health Records">
        <FaHospitalUser className="icon" />
        <span className="button-text">EHR</span>
      </button>
      <button className="settings" onClick={() => onComponentChange('settings')} aria-label="Se ttings">
        <FaCog className="icon" />
        <span className="button-text">Settings</span>
      </button>
      <button className="logOut" onClick={() => onComponentChange('logout')} aria-label="Log Out">
        <FaSignOutAlt className="icon" />
        <span className="button-text">Logout</span>
      </button>
    </div>
  );
};

export default PatientNavBar;
