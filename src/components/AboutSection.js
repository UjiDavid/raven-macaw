import React from 'react';
import '../components/styles/AboutSection.css';
import { Link } from 'react-router-dom';
import AboutImage from '../components/assets/AboutImage.jpg';

const AboutSection = () => {
  return (
    <div className="about-section-background">
      <div className="about-section-container">
        <div className="about-section-left">
          <h2>About Raven and Macaw HMO</h2>
          <h1>Quality Healthcare Plans for Everyone</h1>
          <p>
            Our task at Raven and Macaw HMO is simple. We want to ensure that Nigerians from all walks of life have access to adequate and effective
            health care services when they need it, without financial constraints becoming a life-threatening hindrance or obstacle.
          </p>
          <Link to="/plans">
            <button className="btn">GET STARTED</button>
          </Link>
        </div>
        <div className="about-section-right">
          <div className="image-box">
            <img src={AboutImage} alt="Ravens and Macaw HMO" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
