import React from "react";
import ClinicNavbar from "./clinic-navbar";
import PatientTable from "./clinic-table";
import "../../styles/clinic/chome.css";

const ClinicHomePage = () => {
    return (
        <div className="clinic-homepage-container">
          {/* Left Side - Navbar */}
          <div className="clinic-navbar">
            <ClinicNavbar />
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
  };
  
  export default ClinicHomePage;