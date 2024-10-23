import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../styles/modal.css';
import OpticareLogo from '../image/OptiCare LOGO.png';

const Modal = ({ isOpen, onClose, title }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('Patient'); // Default to Patient


    const handleClearEmail = () => {
        setEmail('');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleButtonClick = () => {
        // Placeholder for button click function
        console.log('Sign In button clicked!');
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

                 {/* User Type Picker Section */}
                 <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginLeft: '300px'}}>
                    <div style={{ display: 'flex', gap: '0px' }}>
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

                {/* Flex container for logo and welcome text */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '120px' }}>
                    {/* Add the logo image */}
                    <img style={{ width: '30%', height: 'auto' }} src={OpticareLogo} alt="Opticare Logo" />
                    
                    {/* Welcome Message next to the logo */}
                    <div style={{
                        color: '#0D54AC',
                        fontSize: '35px',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        lineHeight: '1.2',
                        marginLeft: '150px',
                        marginTop: '-70px'
                    }}>
                        Welcome!
                    </div>
                </div>

                {/* Add the styled text below the logo and welcome message */}
                <div style={{ width: '100%', textAlign: 'left', paddingLeft: '50px' }}>
                    <span style={{ color: '#3871C1', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                        Sign In to&nbsp;
                    </span>
                    <span style={{ color: '#6FB118', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                        Optimize
                    </span>
                    <span style={{ color: '#3871C1', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                        <br />
                    </span>
                    <span style={{ color: '#219DE9', fontSize: '30px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                        Your Eye Care Journey
                    </span>
                </div>

                {/* Email Input Section */}
                <div style={{ paddingLeft: '420px', marginTop: '-170px' }}> {/* Reduced marginTop for higher positioning */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'right' }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            style={{
                                width: '250px',
                                height: '40px',
                                borderRadius: '9.88px',
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
                                    right: '120px',
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
                <div style={{ paddingLeft: '420px', marginTop: '20px' }}>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            style={{
                                width: '250px',
                                height: '40px',
                                borderRadius: '9.88px',
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
                                right: '116px',
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
                    {/* Forget Password Text */}
                    <div style={{ color: '#719DD4', fontSize: '12px', fontFamily: 'Montserrat', fontWeight: 700, lineHeight: '76.04px', letterSpacing: '1.20px', wordWrap: 'break-word', textAlign: 'right', marginTop: '-10px', paddingRight: '115px'}}>
                        Forget Password?
                    </div>
                </div>
                
                {/* New Styled Sign In Button Section */}
                <div style={{ paddingLeft: '430px', marginTop: '20px', position: 'relative' }}>
                    <div style={{
                        width: '250px',
                        height: '40px',
                        position: 'absolute',
                        background: '#4461F2',
                        boxShadow: '0px 11.851164817810059px 20.73953628540039px 3.950388193130493px rgba(68, 97, 242, 0.15)',
                        borderRadius: '9.88px',
                        cursor: 'pointer'
                    }} onClick={handleButtonClick}>
                    </div>
                    <div style={{
                        position: 'absolute',
                        left: '525px',
                        top: '-15px',
                        color: 'white',
                        fontSize: '17px',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        lineHeight: '76.04px',
                        letterSpacing: '1.53px',
                        wordWrap: 'break-word',
                        height: '100%'
                    }}>
                        Sign In
                    </div>
                </div>

                {/* New Text Section Below */}
                <div style={{ width: '100%', height: '100%', paddingLeft: '50px', paddingTop: '20px' }}>
                    <span style={{ color: '#219DE9', fontSize: '18px', fontFamily: 'Carlito', fontWeight: 700, wordWrap: 'break-word' }}>
                        if you don’t have an account<br />you can
                    </span>
                    <span style={{ color: 'black', fontSize: '18px', fontFamily: 'Carlito', fontWeight: 700, wordWrap: 'break-word' }}> </span>
                    <span style={{ color: '#6FB118', fontSize: '18px', fontFamily: 'Carlito', fontWeight: 700, textDecoration: 'underline', wordWrap: 'break-word' }}>
                        Register Here
                    </span>
                    <span style={{ color: '#6FB118', fontSize: '18px', fontFamily: 'Carlito', fontWeight: 700, wordWrap: 'break-word' }}>
                        !
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Modal;