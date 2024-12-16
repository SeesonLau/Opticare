import React, { useState } from 'react';
import '../../styles/settings.css';
import { MdAccountCircle } from "react-icons/md"; 
import OptiCareLogoAbout from '../../image/OptiCareLogoAbout.png';
import PasswordTextboxes from '../password-textbox.jsx';

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState('profile'); 

  const profileImageUrl = null; // Fetched URL or null for fallback

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
    alert(`Profile saved successfully!\nFirstname: ${firstname}\nLastname: ${lastname}\nSex: ${sex}\nBirthdate: ${birthdate}\nAddress: ${address}\nAge: ${age}`);
  };

  const handleEmailSave = () => {
    alert(`Email saved successfully!\nEmail: ${email}`);
  };

  const handlePhonenumberSave = () => {
    alert(`Phone number saved successfully!\nPhone Number: ${phonenumber}`);
  };

  const handlePasswordSave = () => {
    alert('Password changed successfully!');
  };

  const handleConfirmInquiry = () => {
    alert('Inquiry sent successfully!');
  };

  const handleChange1 = (e) => setFirstname(e.target.value);
  const handleChange2 = (e) => setLastname(e.target.value);
  const handleChange3 = (e) => setSex(e.target.value);
  const handleChange4 = (e) => setBirthdate(e.target.value);
  const handleChange5 = (e) => setAddress(e.target.value);
  const handleChange6 = (e) => setAge(e.target.value);
  const handleChange7 = (e) => setEmail(e.target.value);
  const handleChange8 = (e) => {
    const value = e.target.value;
    if (/^\d{0,11}$/.test(value)) {
      setPhonenumber(value);
    }
  };

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

  const ProfileTextbox = ({ label, value, onChange }) => (
    <div className="profile-textbox">
      <label className="profile-textboxLabel">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="profile-textboxContent" 
      />
    </div>
  );

  const InquiryTextbox = ({ value, onChange }) => (
    <div className="helpheading-textbox">
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Type here..."
        className="helpheading-textboxContent"
      ></textarea>
    </div>
  );

  const Profile = () => (
    <div className="profile-container">
      <div className="settingsprofile-photo">
        {profileImageUrl ? (
          <img src={profileImageUrl} alt="Profile" />
        ) : (
          <MdAccountCircle className="settingsprofileicon" />
        )}
      </div>
      <div className="textbox-container">
        <div className="textbox-row">
          <ProfileTextbox label="Firstname" value={firstname} onChange={handleChange1} />
          <ProfileTextbox label="Lastname" value={lastname} onChange={handleChange2} />
        </div>
        <div className="textbox-row">
          <ProfileTextbox label="Sex" value={sex} onChange={handleChange3} />
          <ProfileTextbox label="Birth-date" value={birthdate} onChange={handleChange4} />
        </div>
        <div className="textbox-row">
          <ProfileTextbox label="Address" value={address} onChange={handleChange5} />
          <ProfileTextbox label="Age" value={age} onChange={handleChange6} />
        </div>
        <button onClick={handleProfileSave} className="save-button">Save Profile</button>
      </div>
    </div>
  );

  const AccountSecurity = () => (
    <div className="account-container">
      <h2 className="account-title">Change Email and Phone No.</h2>
      <div className="textbox-container">
        <div className="textbox-row">
          <ProfileTextbox label="Email" value={email} onChange={handleChange7} />
          <ProfileTextbox label="Phone Number" value={phonenumber} onChange={handleChange8} />
        </div>
        <div className="button-row">
          <button onClick={handleEmailSave} className="save-button">Save Email</button>
          <button onClick={handlePhonenumberSave} className="save-button">Save Phone Number</button>
        </div>
      </div>
      <h2 className="account-title">Change Password</h2>
      <div className="textbox-container">
        <PasswordTextboxes />
        <button onClick={handlePasswordSave} className="save-button">Save Password</button>
      </div>
    </div>
  );

  const Privacy = () => (
    <div className="privacy-container">
      <h1 className="container-header">Privacy Policy</h1>
      <h2 className="body-text">Last Update: 12/10/2024</h2>
      <div className="privacyheading-container"> 
        <h2 className="body-text">OptiCare is committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use it, and your rights regarding this data. By using the OptiCare app, you agree to the practices described in this policy.
        </h2>
      </div>
      <div className="privacybody-container"> 
      <h2 className="body-title">Information We Collect </h2>
      <h2 className="body-text">We collect the following information: </h2>
      <h2 className="body-text">1. Personal Information: Name, birthdate, gender, contact details, and address. </h2>
      <h2 className="body-text">2. Medical Information: Eye condition history, prescriptions, diagnoses, treatments, and surgery records. </h2>
      <h2 className="body-text">3. Account Information: Login credentials and usage data. </h2>
      <h2 className="body-text">4. Device Information: IP address, browser type, and operating system. </h2>
      <h2 className="body-title">How We Use Your Information </h2>
      <h2 className="body-text">1. To Provide Services: Schedule appointments, manage health records, and update patient profiles.</h2>
      <h2 className="body-text">2. To Improve the App: Analyze usage trends and enhance functionality. </h2>
      <h2 className="body-text">3. To Communicate: Send appointment reminders, system updates, and notifications. </h2>
      <h2 className="body-text">4. To Ensure Security: Protect your account from unauthorized access and fraud. </h2>
        </div>
    </div>
  );

  const About = () => (
    <div className="about-container">
      
      <h1 className="about-heading">About Us</h1>
      
      <div className="about-subcontainer">
        
        <h2 className="about-text">By digitizing and integrating key processes such as patient record management, diagnosis, and appointment scheduling, OptiCare streamlines the workflow for optometrists, allowing for seamless management of patient information, prescription tracking, and treatment planning. This system automates routine administrative tasks, reduces operational burdens, and ensures that optometrists can focus more on delivering high-quality care. Ultimately, OptiCare improves the practice's operational efficiency and the overall patient experience.</h2>
        <img src={OptiCareLogoAbout} alt="OptiCareLogoAbout" className="about-image" />
      </div>
    </div>
  );

  const Help = () => (
    <div className="help-container">
      <h1 className="container-header">Help Center</h1>
      <div className="helpbody-container">
        <h2 className="body-title">General Questions</h2>
        <h2 className="body-text">1. What is the OptiCare App?</h2>
        <p className="body-text">
          OptiCare is a web-based application designed for optometric patient management. It allows
          patients, clinics, and optometrists to manage appointments, health records, prescriptions,
          and more, all in one centralized platform.
        </p>
        <h2 className="body-text">2. Who can use the OptiCare App?</h2>
        <p className="body-text">
          The app is designed for three user groups: <br />
          <strong>Patients:</strong> To manage appointments, view health records, and track
          prescriptions. <br />
          <strong>Clinics:</strong> To manage patient records, appointments, and billing. <br />
          <strong>Optometrists:</strong> To handle diagnoses, treatment plans, and patient
          management.
        </p>
        <h2 className="body-text">3. Is OptiCare free to use?</h2>
        <p className="body-text">
          Patients can use basic features for free. Clinics and optometrists may require a
          subscription for advanced features like comprehensive health record management and
          appointment analytics.
        </p>
        <h2 className="body-text">4. Can I update my profile information?</h2>
        <p className="body-text">
          Yes. Navigate to the "Profile" section in the app to update your personal or professional
          details.
        </p>
        <h2 className="body-text">5. How does OptiCare protect my data?</h2>
        <p className="body-text">
          OptiCare uses HTTPS encryption, SSL certificates, and secure authentication protocols to
          safeguard your personal and medical information.
        </p>
        <h2 className="body-text">6. Does OptiCare share my data with third parties?</h2>
        <p className="body-text">
          Your data is only shared with clinics or optometrists involved in your care. We do not sell
          your information to third parties.
        </p>
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
