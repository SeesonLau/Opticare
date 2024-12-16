import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/patient/patient-home.css";
import Textbox from "../patientprofile-textbox.jsx";
import { MdAccountCircle } from "react-icons/md";
import NewsCard from "../newscard.jsx";
import PatientNavBar from "./patient-navbar.jsx";
import PatientAppointments from "./patient-appointments.jsx";
import Settings from "./patient-settings.jsx";
import PatientSearch from "./patient-search.jsx";
import PatientRecords from "./patient-records.jsx";
import { db } from "../../database/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const PatientHomePage = () => {
    const [activeComponent, setActiveComponent] = useState("dashboard");
    const [date, setDate] = useState(new Date());
    const [profileData, setProfileData] = useState({
        firstname: "",
        lastname: "",
        sex: "",
        birthdate: "",
        address: "",
        age: "",
        email: "",
        phonenumber: "",
    });
    const profileImageUrl = null; // Placeholder photo (fallback)

    const handleComponentChange = (component) => {
        setActiveComponent(component);
    };

    // Fetch profile data from Firebase
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const docRef = doc(db, "patients", "patientId"); // Replace "patientId" with actual patient document ID
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

        fetchProfileData();
    }, []);

    const renderDashboard = () => (
        <div className="home-container">
            <div className="content-wrapper">
                <div className="content">
                    <h1 className="home-title">Welcome!</h1>

                    {/* Profile Card */}
                    <div className="main-card">
                        <div className="profile-photo">
                            {profileImageUrl ? (
                                <img src={profileImageUrl} alt="Profile" />
                            ) : (
                                <MdAccountCircle className="profileicon" />
                            )}
                        </div>
                        <div className="profile-name">
                            <h2>{`${profileData.firstname || ""} ${profileData.lastname || ""}`}</h2>
                            <p className="patient-label">Patient</p>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="profile">
                        <h1 className="profile-text">Profile</h1>
                        <div className="textbox-container">
                            <div className="textbox-row">
                                <Textbox label="Firstname" value={profileData.firstname} isDisplayOnly />
                                <Textbox label="Lastname" value={profileData.lastname} isDisplayOnly />
                            </div>
                            <div className="textbox-row">
                                <Textbox label="Sex" value={profileData.sex} isDisplayOnly />
                                <Textbox label="Birthdate" value={profileData.birthdate} isDisplayOnly />
                            </div>
                            <div className="textbox-row">
                                <Textbox label="Address" value={profileData.address} isDisplayOnly />
                                <Textbox label="Age" value={profileData.age} isDisplayOnly />
                            </div>
                            <div className="textbox-row">
                                <Textbox label="Email" value={profileData.email} isDisplayOnly />
                                <Textbox label="Phone Number" value={profileData.phonenumber} isDisplayOnly />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Calendar and News */}
                <div className="content-right">
                    <div className="calendar-card">
                        <h1 className="calendar-text">Calendar</h1>
                        <div className="card-content">
                            <Calendar onChange={setDate} value={date} className="react-calendar" />
                        </div>
                    </div>
                    <div className="article-card">
                        <div className="card-content">
                            <NewsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <PatientNavBar onComponentChange={handleComponentChange} />
            <div className="main-content">
                {activeComponent === "dashboard" && renderDashboard()}
                {activeComponent === "patient-records" && <PatientRecords />}
                {activeComponent === "patient-appointments" && <PatientAppointments />}
                {activeComponent === "patient-search" && <PatientSearch />}
                {activeComponent === "settings" && <Settings />}
            </div>
        </div>
    );
};

export default PatientHomePage;
