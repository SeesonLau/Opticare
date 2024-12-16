import React, { useState } from 'react';
import { FaHome, FaFileMedical, FaCog, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'; // Import React icons
import '../../styles/patient/patient-dashboard.css';


const PatientDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard'); // State to manage active tab
  
    const renderTabContent = () => {
      switch (activeTab) {
        case 'dashboard':
          return (
            <section className="tab-content">
              <h2>Welcome to the Dashboard!</h2>
              <p>This is your main overview.</p>
            </section>
          );
        case 'ehr':
          return (
            <section className="tab-content">
              <h2>Electronic Health Records</h2>
              <p>View and manage patient records here.</p>
            </section>
          );
        case 'settings':
          return (
            <section className="tab-content">
              <h2>Settings</h2>
              <p>Customize your preferences.</p>
            </section>
          );
        case 'logout':
          return (
            <section className="tab-content">
              <h2>Logout</h2>
              <p>You have been logged out.</p>
            </section>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo">
            <FaUserCircle size={50} color="#fff" />
            <h2>OPTICARE</h2>
          </div>
          <ul className="nav-links">
            <li onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
              <FaHome /> Dashboard
            </li>
            <li onClick={() => setActiveTab('ehr')} className={activeTab === 'ehr' ? 'active' : ''}>
              <FaFileMedical /> EHR
            </li>
            <li onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>
              <FaCog /> Settings
            </li>
            <li onClick={() => setActiveTab('logout')} className={activeTab === 'logout' ? 'active' : ''}>
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </aside>
  
        {/* Main Content */}
        <main className="main-content">
          <header className="header">
            <h1>Welcome!</h1>
          </header>
  
          {/* Dynamic Tab Content */}
          <div className="tab-container">
            {renderTabContent()}
          </div>
        </main>
      </div>
    );
  };
  
  export default PatientDashboard;