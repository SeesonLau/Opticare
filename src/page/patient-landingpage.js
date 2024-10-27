import React from 'react';
import PatientNavBar from '../components/patient-navbar';
import { Routes, Route } from 'react-router-dom';
import PatientHome from './users/patient/patient-home'; // Ensure this path is correct
import PatientProfile from './users/patient/patient-profile'; // Ensure this path is correct
import PatientAppointments from './users/patient/patient-appointments'; // Ensure this path is correct

function PatientLandingPage() {
    return (
        <>
            <PatientNavBar />
            <Routes>
                <Route path="/" element={<PatientHome />} />
                <Route path="/profile" element={<PatientProfile />} />
                <Route path="/appointments" element={<PatientAppointments />} />
            </Routes>
        </>
    );
}

export default PatientLandingPage;
