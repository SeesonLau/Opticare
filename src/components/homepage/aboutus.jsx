import React from 'react';
import '../../styles/homepage/aboutus.css';
import aboutUsImage from '../../image/OptiCare LOGO.png';

const AboutUs = () => {
  return (
    <section id="about" className="aboutus-section">
      <div className="aboutus-overlay"></div>
      <div className="aboutus-content-container">
        {/* About Us Text */}
        <div className="aboutus-content">
          <h2>About Us</h2>
          <p>
            By digitizing and integrating key processes such as patient record
            management, diagnosis, and appointment scheduling, OptiCare streamlines
            the workflow for optometrists, allowing for seamless management of
            patient information, prescription tracking, and treatment planning.
            This system automates routine administrative tasks, reduces operational
            burdens, and ensures that optometrists can focus more on delivering
            high-quality care. Ultimately, OptiCare improves the practice's
            operational efficiency and the overall patient experience.
          </p>
        </div>

        {/* About Us Image */}
        <div className="about-us-image">
          <img src={aboutUsImage} alt="OptiCare Logo" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
