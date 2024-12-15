import React from "react";
import '../styles/patient/patient-profile.css';

const Textbox = ({ label, value, onChange }) => {
  return (
    <div className="textbox">
      <label className="textboxLabel">{label}</label> {/* Label above the textbox */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="textboxContent" 
      />
    </div>
  );
};

export default Textbox;

