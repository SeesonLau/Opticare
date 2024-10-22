import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
import '../styles/modal.css';
import OpticareLogo from '../image/OptiCare LOGO.png'; // Import your logo image

const Modal = ({ isOpen, onClose, title }) => {
    const [email, setEmail] = useState('');

    const handleClearEmail = () => {
        setEmail('');
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

                {/* New Text Section Below */}
                <div style={{ width: '100%', height: '100%', paddingLeft: '50px', paddingTop: '150px' }}>
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
