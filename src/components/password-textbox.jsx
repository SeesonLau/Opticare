import React, { useState } from 'react';
import '../styles/settings.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';    

const PasswordTextboxes = () => {
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [newPass, setNewPass] = useState('');
  const [showNewPass, setShowNewPass] = useState(false);

  const [confirmNewPass, setConfirmNewPass] = useState('');
  const [showConfirmNewPass, setShowConfirmNewPass] = useState(false);

  const togglePasswordVisibility = (setter, current) => {
    setter(!current);
  };

  return (
    <div>
      {/* Current Password */}
      <div className="profile-textbox">
        <label className="profile-textboxLabel">Current Password</label>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <input
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="profile-textboxContent"
          />
          <button
            onClick={() => togglePasswordVisibility(setShowPass, showPass)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#559DDC',
              fontSize: '12px',
              marginTop: '20px',
            }}
          >
            {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="profile-textbox">
        <label className="profile-textboxLabel">New Password</label>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <input
            type={showNewPass ? 'text' : 'password'}
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="profile-textboxContent"
          />
          <button
            onClick={() => togglePasswordVisibility(setShowNewPass, showNewPass)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#559DDC',
              fontSize: '12px',
              marginTop: '20px'
            }}
          >
            {showNewPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
      </div>

      {/* Confirm New Password */}
      <div className="profile-textbox">
        <label className="profile-textboxLabel">Confirm New Password</label>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <input
            type={showConfirmNewPass ? 'text' : 'password'}
            value={confirmNewPass}
            onChange={(e) => setConfirmNewPass(e.target.value)}
            className="profile-textboxContent"
          />
          <button
            onClick={() => togglePasswordVisibility(setShowConfirmNewPass, showConfirmNewPass)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#559DDC',
              fontSize: '12px',
              
            }}
          >
            {showConfirmNewPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordTextboxes;
