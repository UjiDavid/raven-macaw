import React from 'react';
import AboutPage from '../components/AboutPage';
import ContactBanner from '../components/ContactBanner';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import HeaderElement from '../components/HeaderElement';
import MissionSection from '../components/MissionSection';

const About = () => {
  return (
    <div>
      <HeaderElement />
      <AboutPage />
      <MissionSection />
      <ContactBanner />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default About;
