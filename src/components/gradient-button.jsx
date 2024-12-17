import React from "react";
import '../styles/patient/navbar/patient-records.css';

const SaveButton = ({ label }) => {
  return (
    <button className="custom-button">
        {label}
    </button>
  );
};

export default SaveButton;
