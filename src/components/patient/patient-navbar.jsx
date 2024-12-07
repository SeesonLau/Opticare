import React from 'react';
import { FaHome, FaCalendarAlt, FaSearch, FaHospitalUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import React Icons
import '../../styles/patient/navigationbar.css';

const PatientNavBar = ({ onComponentChange }) => {
  return (
    <div className="navbar">
      <button className="dashboard" onClick={() => onComponentChange('dashboard')}>
        <FaHome className="icon" />
        <span className="button-text">Dashboard</span>
      </button>
      <button className="health-records" onClick={() => onComponentChange('patient-records')} aria-label="Health Records">
        <FaHospitalUser className="icon" />
        <span className="button-text">Records</span>
      </button>
      <button className="appointments" onClick={() => onComponentChange('patient-appointments')}>
        <FaCalendarAlt className="icon" />
        <span className="button-text">Appointments</span>
      </button>
      <button className="search" onClick={() => onComponentChange('patient-search')} aria-label="Search">
        <FaSearch className="icon" />
        <span className="button-text">Search</span>
      </button>
      <button className="settings" onClick={() => onComponentChange('settings')} aria-label="Settings">
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
