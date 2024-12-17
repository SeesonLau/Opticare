import React, { useRef, useState, useEffect } from 'react';
import '../../styles/settings.css';
import { MdAccountCircle } from "react-icons/md"; 
import OptiCareLogoAbout from '../../image/OptiCareLogoAbout.png';
import PasswordTextboxes from '../password-textbox.jsx';
import { db } from "../../database/firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState('profile'); 

  const handleComponentChange = (component) => {
    setActiveComponent(component); 
  };

  // Fetch profile data from Firebase
      useEffect(() => {
          const fetchProfileData = async () => {
              try {
                  const docRef = doc(db, "patients", "patientId"); 
                  const docSnap = await getDoc(docRef);
  
                  if (docSnap.exists()) {
                      setProfileData(docSnap.data());
                  } else {
                      console.error("No such document!");
                  }
              } catch (error) {
                  console.error("Error fetching patient data:", error);
              }
          };
  
          // Retrieve email from localStorage and update profileData
          const userEmail = localStorage.getItem("userEmail");
          if (userEmail) {
              setProfileData((prevState) => ({
                  ...prevState,
                  email: userEmail, 
              }));
          }
          fetchProfileData(); 
      }, []); 

  const [profileData, setProfileData] = useState({
          firstname: "",
          lastname: "",
          sex: "",
          birthdate: "",
          address: "",
          age: "",
          email: "",
          phoneNumber: "",
      });
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setProfileData((prevData) => ({
        ...prevData,
        [name]: value, 
    }));
  };

  const handleProfileSave = async () => {
    try {
        const userId = "patientId"; 
        const docRef = doc(db, "patients", userId);
        await setDoc(docRef, {
            ...profileData,
            profileImageUrl, 
        });
        alert("Profile saved successfully!");
    } catch (error) {
        console.error("Error saving profile:", error);
        alert("Error saving profile. Please try again.");
    }
  };

  const [phonenumber, setPhonenumber] = useState('');
  
  const handleEmailSave = () => {
    alert(`Email saved successfully!\nEmail: ${profileData.email}`);
  };

  const handlePhonenumberSave = () => {
    alert(`Phone number saved successfully!\nPhone Number: ${phonenumber}`);
  };

  const handlePasswordSave = () => {
    alert('Password changed successfully!');
  };

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

  const ProfileTextbox = ({ label, value, name, onChange }) => (
    <div className="profile-textbox">
      <label className="profile-textboxLabel">{label}</label>
      <input
        type="text"
        value={value}
        name={name} 
        onChange={onChange}
        className="profile-textboxContent" 
      />
    </div>
  );

  //
  const handleUploadClick = () => {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    // Set up an onChange event handler to read the file
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfileImageUrl(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };

    // Trigger the file input
    fileInput.click();
  };


  const Profile = () => (
    <div className="profile-container">
    <div className="profile-photo-container">
      <div className="settingsprofile-photo">
        {profileImageUrl ? (
          <img src={profileImageUrl} alt="Profile" className="circular-image" />
        ) : (
          <MdAccountCircle className="settingsprofileicon" />
        )}
      </div>
      <div className="upload-button" onClick={handleUploadClick}>
        <i className="fas fa-cloud-upload-alt"></i>
      </div>
    </div>

      <div className="textbox-container">
        {/* Render input fields using ProfileTextbox */}
        <div className="textbox-row">
          <ProfileTextbox
            label="Firstname"
            value={profileData.firstname}
            name="firstname"
            onChange={handleChange}
          />
          <ProfileTextbox
            label="Lastname"
            value={profileData.lastname}
            name="lastname"
            onChange={handleChange}
          />
        </div>
        <div className="textbox-row">
          <ProfileTextbox
            label="Sex"
            value={profileData.sex}
            name="sex"
            onChange={handleChange}
          />
          <ProfileTextbox
            label="Birthdate"
            value={profileData.birthdate}
            name="birthdate"
            onChange={handleChange}
          />
        </div>
        <div className="textbox-row">
          <ProfileTextbox
            label="Address"
            value={profileData.address}
            name="address"
            onChange={handleChange}
          />
          <ProfileTextbox
            label="Age"
            value={profileData.age}
            name="age"
            onChange={handleChange}
          />
        </div>
        <div className="textbox-row">
          <ProfileTextbox
            label="Email"
            value={profileData.email}
            name="email"
            onChange={handleChange}
          />
          <ProfileTextbox
            label="Phone Number"
            value={profileData.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        {/* Save Profile Button */}
        <button onClick={handleProfileSave} className="save-button">
          Save Profile
        </button>
      </div>
    </div>
  );

  const AccountSecurity = () => (
    <div className="account-container">
      <h2 className="account-title">Change Email and Phone No.</h2>
      <div className="textbox-container">
        <div className="textbox-row">
          <ProfileTextbox label="Email" value={profileData.email} isDisplayOnly />
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
