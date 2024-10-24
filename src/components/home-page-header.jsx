import '../styles/home-page.css';
import React, { useState } from 'react';
import Modal from './modal.jsx'; 
import opticare from '../image/OptiCare LOGO2.png'

const HomePageHeader = () => {
    const [activeModal, setActiveModal] = useState(null); // Track which modal is active
    const [activeLink, setActiveLink] = useState('home'); // Track the active link
  
    const handleHomeClick = () => {
      setActiveModal(null); // Close both modals
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
            <img src= {opticare} alt="OptiCare Logo" className="logo" />
            <h1 className="logo-title">OPTICARE</h1>
          </div>
          <nav className="navigation" aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <a href="#home" onClick={handleHomeClick} className={activeLink === 'home' ? 'active-link' : ''}>
                  Home
                </a>
              </li>
              <li>
                <a href="#login" onClick={handleLoginClick} className={activeLink === 'login' ? 'active-link' : ''}>
                  Login
                </a>
              </li>
              <li>
                <a href="#register" onClick={handleRegisterClick} className={activeLink === 'register' ? 'active-link' : ''}>
                  Register
                </a>
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