import React, { useState } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Modal from './components/modal.jsx';
import opticareLogo from './image/OptiCare LOGO2.png';
import PatientHomePage from './components/patient/patient-homepage'; 
import ClinicHomePage from './components/clinic/clinic-homepage'; 
import reportWebVitals from './reportWebVitals';
import Testimonials from './components/homepage/testimonials.jsx';
import AboutUs from './components/homepage/aboutus.jsx';
import OurTeam from './components/homepage/ourteam.jsx';

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

  // scrolling effect
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); 
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home-page-container">

      <header className="home-page-header">
        <div className="logo-section">
          <img src={opticareLogo} alt="OptiCare Logo" className="logo" />
          <h1 className="logo-title">Opticare</h1>
        </div>

        <nav className="nav-links">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
            Home
          </a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>
            Testimonials
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
            About
          </a>
          <a href="#team" onClick={(e) => scrollToSection(e, 'team')}>
            Our Team
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            Contact
          </a>
        </nav>

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
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div> {/* Blue overlay */}
        <div className="hero-content">
          <h1>Your Path to a Clearer Vision, Starts Here.</h1>
          <button className="hero-button">Log In</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Our Team Section */}
      <section id="team">
        <OurTeam />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Left Side: Logo and Phrase */}
          <div className="contact-left">
            <img src={opticareLogo} alt="OptiCare Logo" className="contact-logo" />
            <h3 className="contact-phrase">Your Path to a Clearer Vision, Starts Here.</h3>
          </div>

          {/* Right Side: Contact Information */}
          <div className="contact-right">
            <h2>Contact Us</h2>
            <p>We’re here to help! Reach out through any of these channels:</p>
            <ul>
              <li><strong>Email:</strong> seeson@gmail.com</li>
              <li><strong>Phone:</strong> +63 998 468 6969</li>
              <li><strong>Address:</strong> Cebu City, Philippines</li>
            </ul>
          </div>
        </div>
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
      <Route path="/patient-homepage/*" element={<PatientHomePage />} />
      <Route path="/clinic-homepage/*" element={<ClinicHomePage />} />
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
