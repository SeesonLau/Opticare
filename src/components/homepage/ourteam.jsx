import React, { useState } from 'react';
import '../../styles/homepage/ourteam.css';
import sison from '../../image/sison.jpg';
import dinampo from '../../image/dinampo.jpg';
import gaid from '../../image/gaid.png';
import hadjirasul from '../../image/hadji.jpg';
import iglesias from '../../image/iglesias.png';
import edejer from '../../image/edejer.jpg';
import lapinig from '../../image/lapinig.jpg';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
    { id: 1, name: "John Laurence G. Sison", role: "Project Manager", image: sison },
    { id: 2, name: "Charles Luis G. Gaid", role: "Database Specialist", image: gaid },
    { id: 3, name: "Jamel P. Hadjirasul", role: "Back-end Developer", image: hadjirasul },
    { id: 4, name: "Lord Kent F. Dinampo", role: "Front-end Developer", image: dinampo },
    { id: 5, name: "Kharylle Anne F. Iglesias", role: "Front-end Developer", image: iglesias },
    { id: 6, name: "Ana Angeli S. Edejer", role: "UI/UX Designer", image: edejer },
    { id: 7, name: "John Augustine L. Lapinig", role: "Front-end Developer", image: lapinig },
  ];

  const OurTeam = () => {
    const [startIndex, setStartIndex] = useState(0);
  
    const visibleCards = 3; // Number of visible cards at a time
  
    const handleNext = () => {
      setStartIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    };
  
    const handlePrev = () => {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
    };
  
    const getVisibleTeam = () => {
      const endIndex = (startIndex + visibleCards) % teamMembers.length;
      if (startIndex < endIndex) {
        return teamMembers.slice(startIndex, endIndex);
      } else {
        return [...teamMembers.slice(startIndex), ...teamMembers.slice(0, endIndex)];
      }
    };
  
    return (
      <section id="team" className="ourteam-section">
        <h2 className="team-heading">Our Team</h2>
        <p className="team-subheading">
          Meet the passionate team behind OptiCare, dedicated to revolutionizing
          eye care through innovation and technology!
        </p>
  
        <div className="team-carousel">
          <button className="arrow left-arrow" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
  
          <div className="team-cards-container">
            {getVisibleTeam().map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <div className="team-role">{member.role}</div>
                  <div className="team-name">{member.name}</div>
                </div>
              </div>
            ))}
          </div>
  
          <button className="arrow right-arrow" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    );
  };
  
  export default OurTeam;
