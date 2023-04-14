import React from 'react';
import { Hero, HealthPlans, DownloadApp, AboutSection, Testimonials, Clients, CTA } from '../components';

import styles from '../style';

const Home = () => {
  return (
    <>
      <div className={`${styles.flexStart} hero`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HealthPlans />
          <DownloadApp />
          <AboutSection />
          <Testimonials />
          <CTA />
          <Clients />
        </div>
      </div>
    </>
  );
};

export default Home;
