import React, { useState } from 'react';
import '../styles/settingsmodal.css';
import '../styles/settings.css';

// ProfileSaveButton component
export const ProfileSaveButton = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className="save-button" onClick={toggleModal}>
        Save
      </button>

      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1 className="modal-title">Profile Saved</h1>
            <button className="modal-button" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// HelpConfirmButton component
export const EmailSaveButton = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className="save-button" onClick={toggleModal}>
       Save
      </button>

      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1 className="modal-title">Email saved!</h1>
            <button className="modal-button" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const PhonenumberSaveButton = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className="save-button" onClick={toggleModal}>
        Save
      </button>

      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1 className="modal-title">Phone Number saved!</h1>
            <button className="modal-button" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export const PasswordSaveButton = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className="save-button" onClick={toggleModal}>
        Save
      </button>

      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1 className="modal-title">Password saved!</h1>
            <button className="modal-button" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const HelpConfirmButton = ({ onConfirm }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className="confirm-button" onClick={toggleModal}>
        Confirm
      </button>

      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1 className="modal-title">Inquiries or feedback/s sent!</h1>
            <button className="modal-button" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

