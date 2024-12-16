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
    const [userType, setUserType] = useState('Patient');

    const navigate = useNavigate();

    const handleClearEmail = () => setEmail('');
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleButtonClick = () => {
        if (userType === 'Patient') {
            navigate('/patient-homepage');
        } else if (userType === 'Clinic') {
            navigate('/clinic-homepage');
        } else {
            alert('Please select a user type first!');
        }
    };

    const handleToggleUserType = (type) => setUserType(type);

    if (!isOpen) return null;

    return (
        <div className="modal1-overlay">
            <div className="modal1-content">
                {/* Close Button */}
                <button className="close-button" onClick={onClose} aria-label="Close Modal">
                    <CloseIcon />
                </button>

                {/* Logo and User Type */}
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

                {/* Email Input */}
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
                            <button className="clear-button" onClick={handleClearEmail} aria-label="Clear Email">
                                &times;
                            </button>
                        )}
                    </div>
                </div>

                {/* Password Input */}
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
                            className="toggle-password-button"
                            onClick={togglePasswordVisibility}
                            aria-label="Toggle Password Visibility"
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </button>
                    </div>
                </div>

                {/* Login Button */}
                <div className="login-button-section">
                    <button className="login-button" onClick={handleButtonClick}>
                        Login
                    </button>
                </div>

                {/* Google Sign-in */}
                <div className="google-signin-section" onClick={() => alert('Google Sign-In Clicked')}>
                    <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
                    <span className="google-signin-text">Continue with Google</span>
                </div>

                {/* Register Section */}
                <div className="register-section">
                    <span className="register-info">if you don’t have an account, </span>
                    <span className="register-link" onClick={() => alert('Redirect to Register')}>
                        Register Here!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
