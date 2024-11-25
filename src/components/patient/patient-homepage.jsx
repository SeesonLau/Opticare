import React from 'react';
import PatientNavBar from '../patient-navbar.jsx';
import '../../styles/patient-home.css';
import PatientHome from './patient-home.jsx';
import PatientProfile from './patient-profile.jsx';
import PatientAppointments from './patient-appointments.jsx';
import { Routes, Route } from 'react-router-dom';

const PatientHomePage = () => {
 
  return (
  <div>
      <PatientNavBar />
  
      <div className="main-content">
        <Routes>
          <Route path="/" element={<PatientHome />} />
          <Route path="/profile" element={<PatientProfile />} />
          <Route path="/appointments" element={<PatientAppointments />} />
        </Routes>
      </div>
    </div>
  );
};
export default PatientHomePage;