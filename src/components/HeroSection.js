import React from 'react';
import '../components/styles/HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section-background">
      <div className="hero-section-container">
        <div className="section-left">
          <h1>Healthcare for the Entire Family</h1>
          <p>
            We've got you covered with superior healthcare solutions that are cost effective, convenient, and tailored to suit the needs of every
            member of the family anywhere in the world.
          </p>
          <Link to="/plans">
            <button className="btn">Health Plans</button>
          </Link>
        </div>
        <div className="section-right"></div>
      </div>
    </div>
  );
};

export default HeroSection;
