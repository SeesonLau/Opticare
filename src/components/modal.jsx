import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../styles/modal.css';
import OpticareLogo from '../image/OptiCareLogo.png';
import GoogleIcon from '../image/google.png';

const Modal = ({ isOpen, onClose, title }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('Patient'); // Default to Patient
    
    const navigate = useNavigate();

    const handleClearEmail = () => {
        setEmail('');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleButtonClick = () => {
        if (userType === 'Patient') {
            navigate('/patient-homepage');  // Route to patient homepage
        } else if (userType === 'Clinic') {
            navigate('/clinic-homepage');  // Route to clinic homepage
        } else {
            alert("Please select a user type first!"); 
        }
    };

    const handleToggleUserType = (type) => {
        setUserType(type);
    };

    if (!isOpen) return null;

    return (
        <div className="modal1-overlay">
            <div className="modal1-content">
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
                        <span className="blue-text">Login to&nbsp;</span>
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

                <div className="email-input-section">
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
                                onClick={handleClearEmail}
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

                <div className="login-button-section" onClick={handleButtonClick}>
                    <div className="login-button-background"></div>
                    <div className="login-button-text">Login</div>
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

                <div class="register-section">
                <span class="register-info">if you don’t have an account, </span>
                <span class="register-link"> Register Here!</span>
                </div>

            </div>
        </div>
    );
};

export default Modal;
