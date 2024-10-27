import React from 'react';
import '../styles/landing-page.css';
import HomePageHeader from '../components/home-page-header';
import Example from '../components/example.jsx';

function HomePage() {
  return (
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
}

export default HomePage;