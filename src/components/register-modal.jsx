import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../styles/modal.css';
import OpticareLogo from '../image/OptiCareLogo.png';
import GoogleIcon from '../image/google.png';

const RegisterModal = ({ isOpen, onClose, title }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('Patient');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClear = (setter) => setter('');
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleToggleUserType = (type) => setUserType(type);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <CloseIcon />
        </button>
        <h2>{title}</h2>

        <div className="logo-and-user-type">
          <img className="opticare-logo" src={OpticareLogo} alt="Opticare Logo" />
          <div className="login-message">
            <span className="blue-text">Register to&nbsp;</span>
            <span className="green-text">Optimize&nbsp;</span>
            <span className="blue-dark-text">Your Eye Care Journey</span>
          </div>

          <div className="user-type-picker">
            <button
              onClick={() => handleToggleUserType('Patient')}
              className={`user-type-button ${userType === 'Patient' ? 'active' : ''}`}
            >
              Patient
            </button>
            <button
              onClick={() => handleToggleUserType('Clinic')}
              className={`user-type-button ${userType === 'Clinic' ? 'active' : ''}`}
            >
              Clinic
            </button>
          </div>
        </div>

        {/* First Name Input */}
        <div className="first-name-input-section">
          <div className="input-wrapper">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="input-field"
            />
            {firstName && (
              <button
                onClick={() => handleClear(setFirstName)}
                className="clear-button"
                aria-label="Clear First Name"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Last Name Input */}
        <div className="last-name-input-section">
          <div className="input-wrapper">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="input-field"
            />
            {lastName && (
              <button
                onClick={() => handleClear(setLastName)}
                className="clear-button"
                aria-label="Clear Last Name"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="email-input-section">
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input-field"
            />
            {email && (
              <button
                onClick={() => handleClear(setEmail)}
                className="clear-button"
                aria-label="Clear Email"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="password-input-section">
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input-field"
            />
            <button
              onClick={togglePasswordVisibility}
              className="toggle-password-button"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
            {password && (
              <button
                onClick={() => handleClear(setPassword)}
                className="clear-button"
                aria-label="Clear Password"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        <div className="login-button-section">
          <div className="login-button-background" />
          <span className="login-button-text">Register</span>
        </div>

        <div className="separator-section">
          <div className="line"></div>
          <span className="or-text">OR</span>
          <div className="line"></div>
        </div>

        <div className="google-signin-section">
          <img className="google-icon" src={GoogleIcon} alt="Google" />
          <span className="google-signin-text">Sign up with Google</span>
        </div>

        <div className="register-section">
          <span className="register-info">Already have an account?&nbsp;</span>
          <span className="register-link">Log in</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
