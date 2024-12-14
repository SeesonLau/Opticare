import React, { useState } from 'react';
import PatientNavBar from './patient-navbar.jsx';
import PatientHome from './patient-home.jsx';
import PatientAppointments from './patient-appointments.jsx';
import Settings from './patient-settings.jsx';
import PatientSearch from './patient-search.jsx';
import PatientRecords from './patient-records.jsx';


const PatientHomePage = () => {
    const [activeComponent, setActiveComponent] = useState('dashboard'); // This controls which component is displayed

    const handleComponentChange = (component) => {
      setActiveComponent(component); // Update the active component when a button is clicked
    };

    return (
      <div>
        <PatientNavBar onComponentChange={handleComponentChange} />
        <div className="main-content">
          {activeComponent === 'dashboard' && <PatientHome />}
          {activeComponent === 'patient-records' && <PatientRecords />}
          {activeComponent === 'patient-appointments' && <PatientAppointments />}
          {activeComponent === 'patient-search' && <PatientSearch />}
          {activeComponent === 'settings' && <Settings />}
        </div>
      </div>
    );
};

export default PatientHomePage;
