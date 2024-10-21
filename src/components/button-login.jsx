import React from 'react';
import PropTypes from 'prop-types';

const ButtonSignin = ({ onClick, label = 'Sign In', style }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: '#4CAF50', // Green
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                ...style,
            }}
        >
            {label}
        </button>
    );
};

ButtonSignin.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    style: PropTypes.object,
};

export default ButtonSignin;