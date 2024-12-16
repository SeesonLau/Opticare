import React, { useState } from 'react';
import '../../styles/settings.css';
import { MdAccountCircle } from "react-icons/md"; 
import { ProfileSaveButton } from '../settings-modal.jsx';
import { HelpConfirmButton } from '../settings-modal.jsx';
import { EmailSaveButton } from '../settings-modal.jsx';
import { PhonenumberSaveButton } from '../settings-modal.jsx';
import { PasswordSaveButton } from '../settings-modal.jsx';
import OptiCareLogoAbout from '../../image/OptiCareLogoAbout.png'
import PasswordTextboxes from '../password-textbox.jsx';

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState('profile'); 

  const profileImageUrl = null;  // Fetched URL or null for fallback

  const handleComponentChange = (component) => {
    setActiveComponent(component); // Updates the active component
  };
  
  const [firstname, setFirstname] = useState(''); 
    const [lastname, setLastname] = useState(''); 
  
    const [sex, setSex] = useState('');
    const [birthdate, setBirthdate] = useState('');
  
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');

    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
     
  
    const handleProfileSave = () => {
      // Logic for saving profile
    }

    const handleEmailSave = () => {
      // Logic for saving email
    }

    const handlePhonenumberSave = () => {
      // Logic for saving phone number
    }

    const handlePasswordSave = () => {
      // Logic for saving password
    }

    const handleConfirmInquiry = () => {
      // Logic for inquiry
    }


    const handleChange1 = (e) => {
      setFirstname(e.target.value);
    };
  
    const handleChange2 = (e) => {
      setLastname(e.target.value);
    };
  
    const handleChange3 = (e) => {
      setSex(e.target.value);
    };
  
    const handleChange4 = (e) => {
      setBirthdate(e.target.value);
    };
  
    const handleChange5 = (e) => {
      setAddress(e.target.value);
    };
  
    const handleChange6 = (e) => {
      setAge(e.target.value);
      
    };

    const handleChange7 = (e) => {
      setEmail(e.target.value);
    };
  
    const handleChange8 = (e) => {
      const value = e.target.value;
      // Allow only digits and limit to 11 characters
      if (/^\d{0,11}$/.test(value)) {
        setPhonenumber(value);
      }
    };


  // Tab bar component
  const SettingsTabBar = ({ onComponentChange }) => {
    const tabs = [
      { label: 'Profile', value: 'profile' },
      { label: 'Account & Security', value: 'account-security' },
      { label: 'Privacy Policy', value: 'privacy' },
      { label: 'About', value: 'about' },
      { label: 'Help', value: 'help' },
     
    ];

    return (
      <div className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`tab-button ${activeComponent === tab.value ? 'active' : ''}`}
            onClick={() => onComponentChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };

  const ProfileTextbox = ({ label, value, onChange }) => {
    return (
      <div className="profile-textbox">
        <label className="profile-textboxLabel">{label}</label> {/* Label above the textbox */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="profile-textboxContent" 
        />
      </div>
    );
  };

  const InquiryTextbox = ({ value, onChange }) => {
    return (
      <div className="helpheading-textbox">
        <textarea
          value={value}
          onChange={onChange}
          placeholder="Type here..."
          className="helpheading-textboxContent"
        ></textarea>
      </div>
    );
  };


  const Profile = () => (
    <div className="profile-container">
      <div className="settingsprofile-photo">
        {profileImageUrl ? (
           <img src={profileImageUrl} alt="Profile" />
          ) : (
          <MdAccountCircle className="settingsprofileicon" /> // Display the MdAccountCircle icon when no image is available
           )}
           </div>
           {/*Textbox Section */}
           <div className="textbox-container">

             {/*Firstname and Lastname */}
           <div className="textbox-row">
      <ProfileTextbox 
        label="Firstname" 
        value={firstname} 
        onChange={handleChange1} 
      />
      <ProfileTextbox 
        label="Lastname"  
        value={lastname} 
        onChange={handleChange2} 
      />
    </div>
     {/*Firstname and Lastname */}
     <div className="textbox-row">
      <ProfileTextbox 
        label="Sex" 
        value={sex} 
        onChange={handleChange3} 
      />
      <ProfileTextbox 
        label="Birth-date" 
        value={birthdate} 
        onChange={handleChange4} 
      />
    </div>
     {/*Address and Age */}
     <div className="textbox-row">
      <ProfileTextbox 
        label="Address" 
        value={address} 
        onChange={handleChange5} 
      />
      <ProfileTextbox 
        label="Age" 
        value={age} 
        onChange={handleChange6} 
      />
    </div>
    <ProfileSaveButton onClick={handleProfileSave} />
           </div>
    </div>
  );
  
  const AccountSecurity = () => (
    <div className="account-container">
     <h2 className="account-title">Change Email and Phone No.</h2>
     <div className="textbox-container">
           <div className="textbox-row">
      <ProfileTextbox 
        label="Email" 
        value={email} 
        onChange={handleChange7} 
      />
      
      <ProfileTextbox 
        label="Phone Number"  
        value={phonenumber} 
        onChange={handleChange8} 
      />
    </div>
    <div className="button-row">
  <EmailSaveButton onClick={handleEmailSave} />
  <PhonenumberSaveButton onClick={handlePhonenumberSave} />
</div>
    </div>
    <h2 className="account-title">Change Password</h2>
    <div className="textbox-container">
    <PasswordTextboxes/>
    <PasswordSaveButton onClick={handlePasswordSave} />
    </div>
    </div>
  );

  const Privacy = () => (
    <div className="privacy-container">
      <h1 className="container-header">Privacy Policy</h1>
      <h2 className="body-text">Last Update: 12/10/2024</h2>
      <div className="privacyheading-container"> 
      <h2 className="body-text">OptiCare is committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use it, and your rights regarding this data. By using the OptiCare app, you agree to the practices described in this policy.</h2>
      </div>
      <div className="privacybody-container"> 
      <h2 className="body-title">Information We Collect </h2>
      <h2 className="body-text">We collect the following information: </h2>
      <h2 className="body-text">1. Personal Information: Name, birthdate, gender, contact details, and address. </h2>
        </div>
    </div>
  );

  const About = () => (
    <div className="about-container">
       <h1 className="about-heading">About Us</h1>
       <div className="about-subcontainer">
       <h2 className="about-text">By digitizing and integrating key processes such as patient record management, diagnosis, and appointment scheduling, OptiCare streamlines the workflow for optometrists, allowing for seamless management of patient information, prescription tracking, and treatment planning. This system automates routine administrative tasks, reduces operational burdens, and ensures that optometrists can focus more on delivering high-quality care. Ultimately, OptiCare improves the practice's operational efficiency and the overall patient experience. </h2>
       <img 
      src={OptiCareLogoAbout} 
      alt="OptiCareLogoAbout" 
      className="about-image" />
      </div>
    </div>
  );
  const Help = () => (
    <div className="help-container">
    <h1 className="container-header">Help Center</h1>
    <h2 className="body-text">Send us your inquiries or feedback/s</h2>
    <InquiryTextbox />
    <HelpConfirmButton onClick={handleConfirmInquiry} />
    <div className="helpbody-container"> 
      <h2 className="body-title">General Questions </h2>
      <h2 className="body-text">1. What is the OptiCare App? </h2>
      <h2 className="body-text">OptiCare is a web-based application designed for optometric patient management. It allows patients, clinics, and optometrists to manage appointments, health records, prescriptions, and more, all in one centralized platform.</h2>
    </div>
    </div>
  );
  
  return (
    <div className="settings-container">
         <div className="content-wrapper">
         <div className="content">
      <h2 className="settings-title">Settings</h2>
      
      <SettingsTabBar onComponentChange={handleComponentChange} />
      
      <div className="main-container">
        {activeComponent === 'profile' && <Profile />}
        {activeComponent === 'account-security' && <AccountSecurity />}
        {activeComponent === 'privacy' && <Privacy />}
        {activeComponent === 'about' && <About />}
        {activeComponent === 'help' && <Help />}
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default Settings;

