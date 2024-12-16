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
          callback: handleSignIn, // Callback function to handle the response
        });
      
        /* Render the Google Sign-In button */
        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          { theme: "outline", size: "large", text: "continue_with" }
        );
    }, []);
    
      const handleGoogleResponse = (response) => {
        // The 'response' object contains the credential/token
        console.log("Google Response:", response);
        alert(`Token Received: ${response.credential}`);
      };
      const handleSignIn = (response) => {
        const { credential } = response;
    
        // Decode the JWT to get user details
        const googleUserData = jwtDecode(credential); // This will decode the JWT token
    
        const userEmail = googleUserData.email; // Extract email from decoded data
        
        // Store the email in localStorage
        localStorage.setItem("googleAuthToken", credential);
        localStorage.setItem("userEmail", userEmail);  // Save email in localStorage
    
        setIsSignedIn(true); // Update the sign-in status
        navigate('/patient-homepage'); // Redirect to homepage
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

                {/* Google Sign-in Section */}
                <div className="google-signin-section">
                    <div id="google-signin-button"></div>
                    {/* Optional custom design */}
                    <div
                    className="custom-google-signin"
                    onClick={() => window.google.accounts.id.prompt()}
                    >
                    </div>
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
