import React, { useState } from 'react';
import ClinicNavBar from '../clinic/clinic-navbar.jsx';
import '../../styles/clinic/clinic-home.css';

import ClinicHome from './clinic-home.jsx';
import ClinicAppointments from './clinic-appointments.jsx'; // Import ClinicAppointments
import ClinicPatient from './clinic-patient.jsx'; // Import ClinicPatient
import ClinicSettings from './clinic-settings.jsx'; // Import ClinicAppointments


import { Routes, Route } from 'react-router-dom';


const ClinicHomePage = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard'); // State to track which component to show

  const handleComponentChange = (component) => {
    setActiveComponent(component); // Update active component
  };

  return (
    <div>
      {/* Navigation Bar */}
      <ClinicNavBar onComponentChange={handleComponentChange} />

      {/* Main Content */}
      <div className="main-content">
        {activeComponent === 'dashboard' && <ClinicHome />} {/* Show ClinicHome */}
        {activeComponent === 'appointments' && <ClinicAppointments />} {/* Show ClinicAppointments */}
        {activeComponent === 'patient' && <ClinicPatient />} {/* Show ClinicPatient */}
        {activeComponent === 'settings' && <ClinicSettings />} {/* Show ClinicSettings */}




      </div>
    </div>
  );
};

export default ClinicHomePage;
