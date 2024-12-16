import React from "react";
import '../styles/patient/patient-profile.css';

const Textbox = ({ label, value, onChange, isDisplayOnly }) => {
  return (
    <div className="textbox">
      <label className="textboxLabel">{label}</label> {/* Label above the textbox */}
      {isDisplayOnly ? (
        <div className="textboxContent display-only">{value || "N/A"}</div> // Display text only
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="textboxContent" 
        />
      )}
    </div>
  );
};

export default Textbox;
