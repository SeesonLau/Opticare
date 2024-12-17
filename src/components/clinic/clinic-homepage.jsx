import React, { useState } from "react";
import ClinicNavbar from "./clinic-navbar";
import PatientTable from "./clinic-table";
import "../../styles/clinic/chome.css";
import EHR from "../patient/patient-records";
import Settings from "../patient/patient-settings";

const ClinicHomePage = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  // Function to update the active component
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  // Render the dashboard
  const renderDashboard = () => (
    <div className="clinic-homepage-container">
      {/* Left Side - Navbar */}
      <div className="clinic-navbar">
        <ClinicNavbar onComponentChange={handleComponentChange} />
      </div>

      {/* Right Side - Content */}
      <div className="clinic-content">
        <h1 className="welcome-title">Welcome!</h1>
        <div className="patient-table-wrapper">
          <PatientTable />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Pass down the component change handler to ClinicNavbar */}
      <ClinicNavbar onComponentChange={handleComponentChange} />

      {/* Render the active component dynamically */}
      <div className="main-content">
        {activeComponent === "dashboard" && renderDashboard()}
        {activeComponent === "patient-records" && <EHR />}
        {activeComponent === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default ClinicHomePage;
