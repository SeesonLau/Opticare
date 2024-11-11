import React from 'react';
import { useNavigate } from 'react-router-dom';  

const PatientHomePage = () => {
  const navigate = useNavigate();  

  const handleBackClick = () => {
    navigate(-1);  //placeholder rani na code for back
  };

  return (
    <div>
      <button className="back-button" onClick={handleBackClick}>Back</button>
      <h1>Clinic Homepage</h1>
      <p>Ari butang code nimo lord kent.</p>
    </div>
  );
};

export default PatientHomePage;