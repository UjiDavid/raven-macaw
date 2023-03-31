import React from 'react';
import '../components/styles/ClientsSection.css';
import logo1 from '../components/assets/logo1.png';
import logo2 from '../components/assets/logo2.png';
import logo3 from '../components/assets/logo3.png';
import logo4 from '../components/assets/logo4.png';
import logo5 from '../components/assets/logo5.png';
import logo6 from '../components/assets/logo6.png';
import logo7 from '../components/assets/logo7.png';
import logo8 from '../components/assets/logo8.png';

const ClientsSection = () => {
  return (
    <div className="clients-section-background">
      <div className="clients-section-container">
        <h1>Our Clients and Partners</h1>
        <div className="clients">
          <img src={logo1} alt="Our clients" />
          <img src={logo2} alt="Our clients" />
          <img src={logo3} alt="Our clients" />
          <img src={logo4} alt="Our clients" />
        </div>
        <div className="clients">
          <img src={logo5} alt="Our clients" />
          <img src={logo6} alt="Our clients" />
          <img src={logo7} alt="Our clients" />
          <img src={logo8} alt="Our clients" />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
