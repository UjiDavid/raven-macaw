import React from 'react';
import '../components/styles/ContactBanner.css';
import { Link } from 'react-router-dom';

const ContactBanner = () => {
  return (
    <div className="contact-banner-background">
      <div className="contact-banner-container">
        <div className="contact-section-left">
          <h2>We got you covered</h2>
          <h1>Partner With Us Today, Reach Out to Us</h1>
        </div>
        <div className="contact-section-right">
          <Link to="/contact-us">
            <button className="btn">CONTACT US</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
