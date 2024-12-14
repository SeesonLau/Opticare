import React, { useState } from 'react';
import '../../styles/settings.css';
import Textbox from '../patientprofile-textbox.jsx';
import { MdAccountCircle } from "react-icons/md"; 

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState('profile'); 

  const profileImageUrl = null;  // Fetched URL or null for fallback

  const handleComponentChange = (component) => {
    setActiveComponent(component); // Updates the active component
  };

  // Tab bar component
  const SettingsTabBar = ({ onComponentChange }) => {
    const tabs = [
      { label: 'Profile', value: 'profile' },
      { label: 'Account Security', value: 'account-security' },
      { label: 'Help', value: 'help' },
      { label: 'Privacy', value: 'privacy' },
      { label: 'About', value: 'about' },
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


  const Profile = () => (
    <div className="sub-container">
      <div className="profile-photo">
        {profileImageUrl ? (
           <img src={profileImageUrl} alt="Profile" />
          ) : (
          <MdAccountCircle className="profileicon" /> // Display the MdAccountCircle icon when no image is available
           )}
           </div>
    </div>
  );
  
  const AccountSecurity = () => (
    <div className="sub-container">
    <div>
      Account Security Settings
    </div>
    </div>
  );
  
  const Help = () => (
    <div>
      Help Section
    </div>
  );
  
  const Privacy = () => (
    <div>
      Privacy Settings
    </div>
  );
  
  const About = () => (
    <div>
      About Information
    </div>
  );

  return (
    <div className="settings-container">
         <div className="content-wrapper">
         <div className="content">
      <h2 className="settings-title">Settings</h2>
      
      <SettingsTabBar onComponentChange={handleComponentChange} />
      
      <div className="main-container">
        {activeComponent === 'profile' && <Profile />}
        {activeComponent === 'account-security' && <AccountSecurity />}
        {activeComponent === 'help' && <Help />}
        {activeComponent === 'privacy' && <Privacy />}
        {activeComponent === 'about' && <About />}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Settings;
