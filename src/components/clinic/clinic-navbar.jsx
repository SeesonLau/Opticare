import React from "react";
import '../../styles/clinic/navigationbar.css';
import { FaHome, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import React Icons
import { GiHealthNormal } from "react-icons/gi";
import OptiCareLogo from '../../image/OptiCareLogo.png'


const ClinicNavBar = ({ onComponentChange }) => {
  return (
    <div className="navbar">
      <img 
        src={OptiCareLogo} 
        alt="OptiCare Logo" 
        className="navbar-logo" 
      />

      <button className="dashboard" onClick={() => onComponentChange('dashboard')}>
        <FaHome className="icon" />
        <span className="button-text">Dashboard</span>
      </button>

      <button className="appointments" onClick={() => onComponentChange('appointments')}>
        <FaCalendarAlt className="icon" />
        <span className="button-text">Appointments</span>
      </button>

      <button className="patient" aria-label="Patient" onClick={() => onComponentChange('patient')}>
        <GiHealthNormal className="icon" />
        <span className="button-text">Patient</span>
      </button>

      <button className="settings" aria-label="Settings" onClick={() => onComponentChange('settings')}>
        <FaCog className="icon" />
        <span className="button-text">Settings</span>
      </button>

      <button className="logOut" aria-label="Log Out" onClick={() => onComponentChange('logout')}>
        <FaSignOutAlt className="icon" />
        <span className="button-text">Logout</span>
      </button>
    </div>
  );
};

export default ClinicNavBar;
