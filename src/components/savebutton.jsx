import React from 'react';
import '../styles/patient-home.css'

const SaveButton = ({ onClick }) => {
  return (
    <button className="saveButton" onClick={onClick}>
      Save
    </button>
  );
};

export default SaveButton;
