import React from 'react';
import '../components/styles/AboutPage.css';
import Mission from '../components/assets/Mission.png';
import Vision from '../components/assets/Vision.png';

const MissionSection = () => {
  return (
    <div className="mission-section-background">
      <div className="mission-section-container">
        <div className="mission-section-left">
          <img className="mission-img" src={Mission} alt="Our Mission" />
          <h2> Our Mission</h2>
          <p>
            To offer affordable healthcare services, excellent service experience and to fulfill the healthcare needs of all our enrollees at all
            levels, beyond their expectations.
          </p>
        </div>
        <div className="mission-section-right">
          <img className="mission-img" src={Vision} alt="Our Vision" />
          <h2> Our Vision</h2>
          <p>
            To be the fastest growing HMO and preferred provider of managed care/health insurance to enrollees, hospitals and the communities we
            serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
