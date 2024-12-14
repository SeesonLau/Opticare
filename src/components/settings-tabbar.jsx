import React, { useState } from "react";
import '../styles/settings.css'

const SettingsTabBar = () => {
    const [activeTab, setActiveTab] = useState(0); // Track which button is active
  
    const handleTabClick = (index) => {
      setActiveTab(index); // Update active button on click
    };
  
    return (
      <div className="tab-bar">
        {["Profile", "Account & Security", "Privacy Policy", "About Us", "Help"].map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  };
  
  export default SettingsTabBar;