import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../styles/modal.css';
import OpticareLogo from '../image/OptiCareLogo.png';
import GoogleIcon from '../image/google.png';
import { jwtDecode } from "jwt-decode";

const Modal = ({ isOpen, onClose, title }) => {
    const CLIENT_ID = "8792875923-oh2mkr0h90uqs0ir246n9lr6g51gc2g9.apps.googleusercontent.com";
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        /* Load Google Identity Services */
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: handleSignIn, 
        });
        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          { theme: "outline", size: "large", text: "continue_with" }
        );
    }, []);
    
      const handleGoogleResponse = (response) => {
        console.log("Google Response:", response);
        alert(`Token Received: ${response.credential}`);
      };
      const handleSignIn = (response) => {
        const { credential } = response;
        const googleUserData = jwtDecode(credential); 
        const userEmail = googleUserData.email; 

        localStorage.setItem("googleAuthToken", credential);
        localStorage.setItem("userEmail", userEmail);  
        setIsSignedIn(true); 
        navigate('/patient-homepage');
    };
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('Patient');

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

                <div className="register-section">
                <span className="register-info">if you don’t have an account, &nbsp;</span>
                <span className="register-link">Register Here!</span>
                </div>

            </div>
        </div>
    );
};

export default Modal;