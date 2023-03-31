import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import HealthPlans from '../components/HealthPlans';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import ClientsSection from '../components/ClientsSection';
import FAQSection from '../components/FAQSection';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <HealthPlans />
      <AboutSection />
      <ContactBanner />
      <ClientsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
