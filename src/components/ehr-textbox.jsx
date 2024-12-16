import React from "react";
import '../styles/patient/navbar/patient-records.css'; // Import the CSS file

export const EHRTextbox = ({ label, value, onChange }) => {
  return (
    <div className="ehr-textbox">
      <label className="ehr-textboxLabel">{label}</label> {/* Label above the textbox */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="ehr-textboxContent" 
      />
    </div>
  );
};

export const EHR2Textbox = ({ label, value, onChange }) => {
  return (
    <div className="ehr-textbox2">
      <label className="ehr-textboxLabel2">{label}</label> {/* Label above the textbox */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="ehr-textboxContent" 
      />
    </div>
  );
};

export const EHR3Textbox = ({ label, value, onChange }) => {
    return (
      <div className="ehr-textbox3">
        <label className="ehr-textboxLabel3">{label}</label> {/* Label above the textbox */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="ehr-textboxContent" 
        />
      </div>
    );
  };

  export const EHR4Textbox = ({ label, value, onChange }) => {
    return (
      <div className="ehr-textbox4">
        <label className="ehr-textboxLabel4">{label}</label> {/* Label above the textbox */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="ehr-textboxContent" 
        />
      </div>
    );
  };

  export const EHR5Textbox = ({ label, value, onChange }) => {
    return (
      <div className="ehr-textbox5">
        <label className="ehr-textboxLabel5">{label}</label>
        <textarea
          className="ehr-textarea5"
          value={value}
          onChange={onChange}
          rows="4" // Sets the default number of visible lines
          cols="50" // Optional: Controls width based on characters
        />
      </div>
    );
  };