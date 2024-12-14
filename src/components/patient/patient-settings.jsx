import React from 'react';
import '../../styles/settings.css';
import SettingsTabBar from '../settings-tabbar.jsx'; 

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="content-wrapper">
        {/* Left Section - Content */}
        <div className="content">
          <h2 className="settings-title">Settings</h2>
          
          {/* Tab Bar Section */}
          <SettingsTabBar />

          {/* Main Content Section */}
          <div className="main-container">
            {/* Main content goes here */}
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Settings;
