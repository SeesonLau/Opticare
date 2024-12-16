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
                    <CloseIcon /> {/* Close icon */}
                </button>

                {/* Logo and user type picker section */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
                    {/* Logo image aligned at the top center */}
                    <img style={{ width: '300px', height: 'auto', marginRight: '50px', marginTop: '-100px' }} src={OpticareLogo} alt="Opticare Logo" />

                    {/* Add the styled text below the logo and welcome message */}
                    <div style={{ width: '100%', textAlign: 'right', marginRight: '300px', marginTop: '-90px', }}>
                        <span style={{ color: '#3871C1', fontSize: '15px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                            Login to&nbsp;
                        </span>
                        <span style={{ color: '#6FB118', fontSize: '15px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                            Optimize&nbsp;
                        </span>
                        <span style={{ color: '#219DE9', fontSize: '15px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                            Your Eye Care Journey
                        </span>
                    </div>
                    
                    {/* User Type Picker Section */}
                    <div style={{ display: 'flex', gap: '0px', marginTop: '30px', marginBottom: '50px' }}>
                        <button 
                            onClick={() => handleToggleUserType('Patient')} 
                            style={{
                                backgroundColor: userType === 'Patient' ? '#90DD2B' : '#FFFFFF',
                                color: userType === 'Patient' ? 'white' : '#A1CBFF',
                                padding: '10px 20px',
                                border: '1px solid #4461F2',
                                borderRadius: '7px',
                                cursor: 'pointer',
                            }}
                        >
                            Patient
                        </button>
                        <button 
                            onClick={() => handleToggleUserType('Clinic')} 
                            style={{
                                backgroundColor: userType === 'Clinic' ? '#90DD2B' : '#FFFFFF',
                                color: userType === 'Clinic' ? 'white' : '#A1CBFF',
                                padding: '10px 20px',
                                border: '1px solid #4461F2',
                                borderRadius: '7px',
                                cursor: 'pointer',
                            }}
                        >
                            Clinic
                        </button>
                    </div>
                </div>

                {/* Email Input Section */}
                <div style={{ paddingLeft: '275px', marginTop: '-70px' }}> {/* Reduced marginTop for higher positioning */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'right' }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            style={{
                                width: '250px',
                                height: '40px',
                                borderRadius: '5px',
                                border: '1px solid #667085',
                                paddingLeft: '10px',
                                fontSize: '15px',
                                fontFamily: 'Montserrat',
                                fontWeight: 700,
                                color: '#4F555A'
                            }}
                        />
                        {email && (
                            <button
                                onClick={handleClearEmail}
                                style={{
                                    position: 'flex',
                                    left: '240px',
                                    top: '10px',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    color: '#4F555A',
                                    fontSize: '15px'
                                }}
                                aria-label="Clear Email"
                            >
                                &times; {/* X icon for clearing text */}
                            </button>
                        )}
                    </div>
                </div>

                {/* Password Input Section */}
                <div style={{ paddingLeft: '275px', marginTop: '20px' }}>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            style={{
                                width: '250px',
                                height: '40px',
                                borderRadius: '5px',
                                border: '1px solid #667085',
                                paddingLeft: '10px',
                                fontSize: '15px',
                                fontFamily: 'Montserrat',
                                fontWeight: 700,
                                color: '#4F555A'
                            }}
                        />
                        <button
                            className="toggle-password-button"
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'flex',
                                left: '238px',
                                top: '10px',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                color: '#4F555A'
                            }}
                            aria-label="Toggle Password Visibility"
                        >
                            {showPassword ? <VisibilityOffIcon style={{ fontSize: '15px' }} /> : <VisibilityIcon style={{ fontSize: '15px' }} />}
                        </button>
                    </div>
                </div>

                {/* Sign In Button Section */}
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '15px', marginTop: '35px', position: 'relative' }}>
                    <div 
                        style={{
                            width: '250px',
                            height: '40px',
                            position: 'flex',
                            background: 'linear-gradient(90deg, #4183CF 0%, #77B032 100%)',
                            boxShadow: '0px 11.851164817810059px 20.73953628540039px 3.950388193130493px rgba(68, 97, 242, 0.15)',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            zIndex: 1 // Ensures the background div is clickable
                        }} 
                        onClick={handleButtonClick}
                    >
                    </div>
                    <div 
                        style={{
                            position: 'flex',
                            left: '360px',
                            top: '-15px',
                            color: 'white',
                            fontSize: '17px',
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            lineHeight: '76.04px',
                            letterSpacing: '1.53px',
                            wordWrap: 'break-word',
                            height: '100%',
                            cursor: 'pointer',  // Makes the text itself clickable
                            zIndex: 2 // Ensures the text is on top of the background
                        }} 
                        onClick={handleButtonClick}  // Adds the same click event to the text
                    >
                        Login
                    </div>
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

                {/* "or" Separator Section */}
                <div style={{ width: '280px', height: '100px', marginLeft: '260px', justifyContent: 'center', alignItems: 'center', gap: '24px', display: 'inline-flex', marginTop: '20px' }}>
                    <div style={{ flex: '1 1 0', height: '1px', background: '#4183CF' }}></div>
                    <div style={{ textAlign: 'center', color: '#4183CF', fontSize: '16px', fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px', wordWrap: 'break-word' }}>
                        or
                    </div>
                    <div style={{ flex: '1 1 0', height: '1px', background: '#4183CF' }}></div>
                </div>

                    {/* "Continue with Google" Section */}
                    <div style={{ width: '250px', height: '100px', gap: '30px', marginLeft: '280px', marginTop: '-20px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center', // Align the icon and text vertically
                        gap: '10px', // Adjust space between the icon and text
                        cursor: 'pointer',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: '1px #4183CF solid', // Border around the section
                        overflow: 'hidden', // Ensures the rounded corners are respected
                        justifyContent: 'center',
                    }} onClick={() => alert('Google Sign-In Clicked')}>
                        <img src={GoogleIcon} alt="Google Icon" style={{ width: '20px', height: '20px' }} />
                        <div style={{
                            color: '#4183CF',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            lineHeight: '21px',
                            wordWrap: 'break-word'
                        }}>
                            Continue with Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;