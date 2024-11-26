import React from 'react';
import PatientNavBar from '../patient-navbar.jsx';
import '../../styles/patient-home.css';
import ClinicHome from './clinic-home.jsx';
import ClinicProfile from './clinic-profile.jsx';
import { Routes, Route } from 'react-router-dom';

const ClinicHomePage = () => {
 
  return (
  <div>
      <PatientNavBar />
  
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ClinicHome />} />
          <Route path="/profile" element={<ClinicProfile />} />
        </Routes>
      </div>
    </div>
  );
};
export default ClinicHomePage;

