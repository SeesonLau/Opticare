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
        <div className="modal-overlay">
            <div className="modal-content">
                <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close Modal"
                >
                    <CloseIcon /> {/* Close icon */}
                </button>
                <h2>{title}</h2>

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
                                    position: 'absolute',
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
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
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
                            position: 'absolute',
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
                            position: 'absolute',
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
