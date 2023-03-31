import React from 'react';
import '../components/styles/AboutPage.css';
import AboutImage from '../components/assets/group.jpg';
import AboutImage2 from '../components/assets/group1.jpg';

const AboutPage = () => {
  return (
    <div className="about-section-background">
      <div className="about-section-container">
        <div className="about-section-left">
          <h4>About Us</h4>
          <p>
            Ravens and Macaw(HMO) is a limited liability company, incorporated in April 2009 and duly registered with the regulatory body National
            Health Insurance Scheme (NHIS). We offer qualitative and affordable healthcare services tailored for individuals, families, companies and
            parastatals. We provide our customers with superior healthcare solutions that are cost effective, convenient to implement; and tailored to
            their identified needs.
          </p>
        </div>
        <div className="about-section-right">
          <div className="image-box">
            <img src={AboutImage} alt="Ravens and Macaw HMO" />
          </div>
        </div>
      </div>
      <div className="about-section-container">
        <div className="about-subsection-left">
          <div className="image-box">
            <img src={AboutImage2} alt="Ravens and Macaw HMO" />
          </div>
        </div>
        <div className="about-section-right">
          <h4>Why Choose Us</h4>
          <p>
            We have provided years of remarkable service to both our individual and corporate clients. With a wide range of products and highly
            knowledgeable team, our commitment to surpassing expectations is unmatched.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
