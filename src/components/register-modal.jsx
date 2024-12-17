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
                            className={`user-type-button ${
                                userType === 'Patient' ? 'active' : ''
                            }`}
                        >
                            Patient
                        </button>
                        <button
                            onClick={() => handleToggleUserType('Clinic')}
                            className={`user-type-button ${
                                userType === 'Clinic' ? 'active' : ''
                            }`}
                        >
                            Clinic
                        </button>
                    </div>
                </div>

                {/* First Name Input */}
                <div className="input-section">
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
                <div className="input-section">
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

                {/* Email Input */}
                <div className="input-section">
                    <div className="input-wrapper">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
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

                {/* Password Input */}
                <div className="input-section">
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="input-field"
                        />
                        <button
                            onClick={togglePasswordVisibility}
                            className="toggle-password-button"
                            aria-label="Toggle Password Visibility"
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </button>
                    </div>
                </div>

                {/* Register Button */}
                <div className="login-button-section">
                    <div className="login-button-background"></div>
                    <div className="login-button-text">Register</div>
                </div>

                {/* Separator */}
                <div className="separator-section">
                    <div className="line"></div>
                    <div className="or-text">or</div>
                    <div className="line"></div>
                </div>

                {/* Google Sign-In */}
                <div className="google-signin-section">
                    <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
                    <div className="google-signin-text">Continue with Google</div>
                </div>

                <div className="register-section">
                    <span className="register-info">Already have an account?&nbsp;</span>
                    <span className="register-link">Login Here!</span>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
