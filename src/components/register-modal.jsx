import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../styles/register-modal.css';
import OpticareLogo from '../image/OptiCareLogo.png';
import GoogleIcon from '../image/google.png';
import { jwtDecode } from "jwt-decode";

const RegisterModal = ({ isOpen, onClose, title }) => {
    const navigate = useNavigate();
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClearEmail = () => setEmail('');
    const handleClearFirstName = () => setFirstName('');
    const handleClearLastName = () => setLastName('');

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleRegister = () => {
        // Handle registration logic (e.g., API call)
        alert('Registration successful!');
        navigate('/welcome');
    };

    if (!isOpen) return null;

    return (
        <div className="register-modal-overlay">
            <div className="register-modal-content">
                <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    <CloseIcon />
                </button>
                <h2>{title}</h2>

                <div className="logo-and-form">
                    <img className="opticare-logo" src={OpticareLogo} alt="Opticare Logo" />
                    
                    <div className="input-section">
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="input-field"
                        />
                        {firstName && (
                            <button
                                onClick={handleClearFirstName}
                                className="clear-button"
                                aria-label="Clear First Name"
                            >
                                &times;
                            </button>
                        )}
                    </div>

                    <div className="input-section">
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="input-field"
                        />
                        {lastName && (
                            <button
                                onClick={handleClearLastName}
                                className="clear-button"
                                aria-label="Clear Last Name"
                            >
                                &times;
                            </button>
                        )}
                    </div>

                    <div className="input-section">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="input-field"
                        />
                        {email && (
                            <button
                                onClick={handleClearEmail}
                                className="clear-button"
                                aria-label="Clear Email"
                            >
                                &times;
                            </button>
                        )}
                    </div>

                    <div className="input-section">
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

                    <div className="register-button-section" onClick={handleRegister}>
                        <div className="register-button-background"></div>
                        <div className="register-button-text">Register</div>
                    </div>

                    <div className="separator-section">
                        <div className="line"></div>
                        <div className="or-text">or</div>
                        <div className="line"></div>
                    </div>

                    <div className="google-signin-section" onClick={() => alert('Google Sign-In Clicked')}>
                        <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
                        <div className="google-signin-text">Continue with Google</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
