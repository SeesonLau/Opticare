import '../styles/home-page.css';
import React, { useState } from 'react';
import Modal from './modal.jsx'; 
import opticare from '../image/OptiCare LOGO2.png';
import { Link } from 'react-router-dom';

const HomePageHeader = () => {
    const [activeModal, setActiveModal] = useState(null); // Track which modal is active
    const [activeLink, setActiveLink] = useState('home'); // Track the active link
  
    const handleHomeClick = () => {
      setActiveModal(null); // Close any modals
      setActiveLink('home'); // Set active link to home
    };
  
    const handleRegisterClick = () => {
      setActiveModal('register'); // Open register modal
      setActiveLink('register'); // Set active link to register
    };
  
    const handleLoginClick = () => {
      setActiveModal('login'); // Open login modal
      setActiveLink('login'); // Set active link to login
    };
  
    return (
      <>
        <header className="home-page-header">
          <div className="logo-section">
            <img src={opticare} alt="OptiCare Logo" className="logo" />
            <h1 className="logo-title">OPTICARE</h1>
          </div>
          <nav className="navigation" aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={handleHomeClick} className={activeLink === 'home' ? 'active-link' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#register" onClick={handleRegisterClick} className={activeLink === 'register' ? 'active-link' : ''}>
                  Register
                </a>
              </li>
              <li>
                <Link to="/patient" onClick={() => setActiveLink('patient')} className={activeLink === 'patient' ? 'active-link' : ''}>
                  Patient
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Modals */}
        <Modal isOpen={activeModal === 'register'} title="Register" />
        <Modal isOpen={activeModal === 'login'} title="Login" />
      </>
    );
};

export default HomePageHeader;
