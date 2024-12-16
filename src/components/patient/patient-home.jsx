import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/patient/patient-home.css';
import Textbox from '../patientprofile-textbox.jsx';
import { MdAccountCircle } from "react-icons/md"; 
import NewsCard from '../newscard.jsx';


const PatientHomePage = () => {
  const [date, setDate] = useState(new Date());
  // Placeholder photo (fallback)
  const profileImageUrl = null;  // Fetched URL or null for fallback

  const [firstname, setFirstname] = useState(''); 
  const [lastname, setLastname] = useState(''); 

  const [sex, setSex] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');

  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
 


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


  return (
    <div className="home-container">
        
      <div className="content-wrapper">
        {/* Left Section - Content */}
        <div className="content">
          <h1 className="home-title">Welcome!</h1>

        {/* Profile Card */}
        <div className="main-card">
            {/* Profile Photo */}
            <div className="profile-photo">
              {/* Conditionally render either the profile image or the MdAccountCircle icon */}
              {profileImageUrl ? (
                <img src={profileImageUrl} alt="Profile" />
              ) : (
                <MdAccountCircle className="profileicon" /> // Display the MdAccountCircle icon when no image is available
              )}
            </div>

            {/* Profile Name */}
            <div className="profile-name">
              <h2>Name</h2>
              <p className="patient-label">Patient</p>
            </div>
          </div>

          {/* Profile  */}
          <div className="profile">
          
          <h1 className="profile-text">Profile</h1>
          <div className="textbox-container">

           {/* First row: Firstname and Lastname */}
    <div className="textbox-row">
      <Textbox 
        label="Firstname" 
        value={firstname} 
        onChange={handleChange1} 
      />
      <Textbox 
        label="Lastname" 
        value={lastname} 
        onChange={handleChange2} 
      />
    </div>
    
    {/* Sex and  Birthdate */}
    <div className="textbox-row">
      <Textbox 
        label="Sex" 
        value={sex} 
        onChange={handleChange3} 
      />
      <Textbox 
        label="Birthdate" 
        value={birthdate} 
        onChange={handleChange4} 
      />
    </div>
    
    
    {/* Address and Age */}
    <div className="textbox-row">
      <Textbox 
        label="Address" 
        value={address} 
        onChange={handleChange5} 
      />
      <Textbox 
        label="Age" 
        value={age} 
        onChange={handleChange6} 
      />
    </div>
    
    {/* Third row: Phonenumber and Email */}
    <div className="textbox-row">
    <Textbox 
        label="Email" 
        value={email} 
        onChange={handleChange7} 
      />

      <Textbox 
        label="Phone Number" 
        value={phonenumber} 
        onChange={handleChange8} 
      />

          </div>
        </div>
        </div>
        </div>

        {/* Right Section - Separate Content */}
        <div className="content-right">
              {/* Calendar  */}
            <div className="calendar-card">
            <h1 className="calendar-text">Calendar</h1>
        <div className="card-content">
          <Calendar
            onChange={setDate}
            value={date}
            className="react-calendar"  // Apply custom class to the calendar
          />
        </div>
      </div>

          {/* Article  */}
          <div className="article-card">
            <div className="card-content">
              <NewsCard />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientHomePage;
