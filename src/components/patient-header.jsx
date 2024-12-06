import React from 'react';
import '../styles/patient/patient-header.css';

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="headertext">{title}</h1>
    </div>
  );
};

const ProfilePage = () => <Header title="Profile" />;
const AppointmentsPage = () => <Header title="Appointments" />;
const SearchPage = () => <Header title="Search" />;
const HealthRecordsPage = () => <Header title="Health Records" />;
const SettingsPage = () => <Header title="Settings" />;

export { ProfilePage, AppointmentsPage, SearchPage, HealthRecordsPage, SettingsPage };
