import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import HomePageHeader from './components/home-page-header';
import Example from './components/example';
import PatientHomePage from './components/patient/patient-homepage'; // route to patient-homepage.jsx
import ClinicHomePage from './components/clinic/clinic-homepage'; // route to clinic-homepage.jsx
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const HomePage = () => (
  <div className="home-page-container">
    {/* Full viewport height section including header */}
    <div className="full-height-section">
      <HomePageHeader />
      <div className="content-section">
        <h2>Welcome to OptiCare</h2>
        <p>Optimize your eye care journey with us. Sign in or register to get started.</p>
      </div>
    </div>
    {/* Scrolls to the second section */}
    <div className="scroll-section">
      <Example />
      <Example />
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/patient-homepage" element={<PatientHomePage />} />
    <Route path="/clinic-homepage" element={<ClinicHomePage />} />
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
