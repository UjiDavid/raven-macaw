import styles from './style';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Hero, HealthPlans, DownloadApp, AboutSection, Testimonials, Clients, CTA, Footer } from './components';
import { Home, About, Contact, Plans } from './routes';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} navbar`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} footer`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
