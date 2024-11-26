import React, { useState } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import Modal from './components/modal.jsx'; // Ensure modal component is properly imported
import opticareLogo from './image/OptiCare LOGO2.png';

import PatientHomePage from './components/patient/patient-homepage'; // route to patient-homepage.jsx
import ClinicHomePage from './components/clinic/clinic-homepage'; // route to clinic-homepage.jsx
import reportWebVitals from './reportWebVitals';

const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleRegisterClick = () => {
    setActiveModal('register');
  };

  const handleLoginClick = () => {
    setActiveModal('login');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="home-page-container">
      {/* Header Section */}
      <header className="home-page-header">
        <div className="logo-section">
          <img src={opticareLogo} alt="OptiCare Logo" className="logo" />
          <h1 className="logo-title">Opticare</h1>
        </div>

        {/* Buttons for larger screens */}
        <div className="auth-buttons">
          <button className="glass-button" onClick={handleLoginClick}>
            Login
          </button>
          <button className="glass-button" onClick={handleRegisterClick}>
            Register
          </button>
        </div>

        {/* Icons for smaller screens */}
        <div className="auth-icons">
          <FaSignInAlt
            size={24}
            color="white"
            onClick={handleLoginClick} // Login icon
            style={{ cursor: 'pointer' }}
          />
          <FaUserPlus
            size={24}
            color="white"
            onClick={handleRegisterClick} // Register icon
            style={{ cursor: 'pointer' }}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Your Journey to Better Eye Care Starts Here</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Opticare connects patients and clinics with personalized eye care solutions.
          From scheduling appointments to consulting with specialists, we aim to make eye care
          seamless and accessible.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>We’re here to help! Reach out through any of these channels:</p>
        <ul>
          <li>Email: seesonjohnlau@gmail.com</li>
          <li>Phone: +63 998 168 6308</li>
          <li>Address: Cebu City, Philippines</li>
        </ul>
      </section>

      {/* Modals */}
      {activeModal === 'register' && (
        <Modal isOpen={true} title="Register" onClose={handleCloseModal}>
          <div>
            <p>Create an account to unlock all features.</p>
            {/* Add register form here */}
          </div>
        </Modal>
      )}
      {activeModal === 'login' && (
        <Modal isOpen={true} title="Login" onClose={handleCloseModal}>
          <div>
            <p>Log in to manage your appointments and consult with clinics.</p>
            {/* Add login form here */}
          </div>
        </Modal>
      )}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient-homepage" element={<PatientHomePage />} />
      <Route path="/clinic-homepage" element={<ClinicHomePage />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
