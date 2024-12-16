import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../../styles/homepage/testimonials.css';

const testimonials = [
    {
      id: 1,
      text: `"OptiCare has made managing my eye health so much easier. I can book appointments, check my prescriptions, and access my health records all in one place. It's truly a game-changer for busy individuals like me!"`,
      name: 'John Augustine L. Lapinig.',
      role: 'Patient',
      image: require('../../image/lapinig.jpg') // Replace with your actual image path
    },
    {
      id: 2,
      text: `"As a practice manager, I can confidently say that Opticare has streamlined our workflow and improved overall efficiency. The real-time tracking and reporting features give us valuable insights into our operations, allowing us to make data-driven decisions. I highly recommend Opticare to any healthcare provider looking to enhance their practice management."`,
      name: 'HuTao.',
      role: 'Practice Manager',
      image: require('../../image/hutao.jpg') // Replace with your actual image path
    },
    {
        id: 3,
        text: `"Opticare has completely transformed how we manage our patient data and appointments. The intuitive interface and seamless integration with our existing systems have saved us hours each week. Our team can now focus more on patient care and less on administrative tasks. It's a game-changer for any healthcare practice!"`,
        name: 'Yanfei.',
        role: 'Clinic Director',
        image: require('../../image/yanfei.jpg') // Replace with your actual image path
    },
    {
        id: 4,
        text: `"The OptiCare platform streamlined my clinic's operations. It's easier than ever to manage appointments and communicate with patients. Highly recommend it for healthcare professionals!"`,
        name: 'Laureano Gabrillo.',
        role: 'Clinic Manager',
        image: require('../../image/sison1.jpg') // Replace with your actual image path
    },
  ];
  
  const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    const handleNext = () => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const handlePrev = () => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    };
  
    const { text, name, role, image } = testimonials[currentTestimonial];
  
    return (
        <section id="testimonials" className="testimonials">
        <div className="testimonials-overlay"></div>
          <div className="testimonials-header">
            <h2 className="testimonials-title">Testimonials</h2>
            <p className="testimonials-subtitle">
              Here’s what our users are saying about their experience with OptiCare!
            </p>
          </div>
          
          <div className="testimonial-container">
            {/* Left Arrow Button */}
            <FaChevronLeft
              size={30}
              color="white"
              onClick={handlePrev}
              className="nav-arrow left-arrow"
            />
            
            {/* Testimonial Card */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-image">
                  <img src={image} alt="Testimonial User" />
                </div>
                <div className="testimonial-text">
                  <p className="testimonial-quote">{text}</p>
                  <h4 className="testimonial-author">{name}, {role}</h4>
                </div>
              </div>
            </div>
            
            {/* Right Arrow Button */}
            <FaChevronRight
              size={30}
              color="white"
              onClick={handleNext}
              className="nav-arrow right-arrow"
            />
          </div>
        </section>
      );
    };
  
  export default Testimonials;
  