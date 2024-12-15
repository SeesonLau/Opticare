import React, { useState } from 'react';
import '../../styles/patient/navbar/patient-appointments.css'; 
import '../../styles/appointments.css';


const PatientAppointments = () => {
  
const [activeComponent, setActiveComponent] = useState('chats'); 


  const handleComponentChange = (component) => {
    setActiveComponent(component); // Updates the active component
  };

// Tab bar component
const SettingsTabBar = ({ onComponentChange }) => {
  const tabs = [
  
    { label: 'Chats', value: 'chats' },
    { label: 'Book', value: 'book' },
    { label: 'My Bookings', value: 'mybookings' },
  ];

  
  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`tab-button ${activeComponent === tab.value ? 'active' : ''}`}
          onClick={() => onComponentChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

 
  
  const Chats = () => (
    <div>
      Chats
    </div>
  );
  
  const Book= () => (
    <div>
      Book
    </div>
  );
  
  const MyBookings = () => (
    <div>
      My Bookings
    </div>
  );
  
  return (
    <div className="appointments-container">
         <div className="content-wrapper">
         <div className="content">
      <h2 className="appointments-title">Appointments</h2>

      <SettingsTabBar onComponentChange={handleComponentChange} />
      
      <div className="main-container">
       
        {activeComponent === 'chats' && <Chats />}
        {activeComponent === 'book' && <Book />}
        {activeComponent === 'mybookings' && <MyBookings />}
      </div>

      </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
