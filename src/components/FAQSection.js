import React, { useState } from 'react';
import '../components/styles/FAQSection.css';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaTimesCircle } from 'react-icons/fa';

const FAQSection = () => {
  const [faq1Active, setFaq1Active] = useState(false);
  const [faq2Active, setFaq2Active] = useState(false);
  const [faq3Active, setFaq3Active] = useState(false);
  const [faq4Active, setFaq4Active] = useState(false);
  const [faq5Active, setFaq5Active] = useState(false);
  return (
    <div className="FAQSection-background">
      <div className="FAQSection-container">
        <div className="FAQ-section-left">
          <h4>FAQs</h4>
          <h1>Frequently Asked Questions</h1>
          <p>
            We’ve put together some commonly asked questions to give you more information about Raven & Macaw and the services we offer. If you have a
            question that you can’t find the answer to, please use the contact us page.
          </p>
          <Link to="/contact-us">
            <button className="FAQSection-btn btn">CONTACT US</button>
          </Link>
        </div>
        <div className="FAQ-section-right">
          <div className="faq-container">
            <div className={faq1Active ? 'faq active' : 'faq'}>
              <h3 className="faq-title" onClick={() => setFaq1Active(!faq1Active)}>
                About Us
              </h3>
              <p className="faq-text">
                Visit our <Link href="/about">about us</Link> page to read more about our business! Customer service is available 24/7. Our website is
                available to make purchases 24/7!
              </p>
              <button className="faq-toggle" onClick={() => setFaq1Active(!faq1Active)}>
                <FaChevronDown className="fa-chevron-down" />
                <FaTimesCircle className="fa-times" />
              </button>
            </div>
            <div className={faq2Active ? 'faq active' : 'faq'}>
              <h3 className="faq-title" onClick={() => setFaq2Active(!faq2Active)}>
                What is HMO
              </h3>
              <p className="faq-text">
                HMO is an acronym that stands for health maintenance organisation. An HMO provides or arranges managed care for health insurance,
                self-funded healthcare benefit plans, individuals and other entities, and acts as a liaison with healthcare providers (hospitals,
                doctors, etc.) on a prepaid basis.
              </p>
              <button className="faq-toggle" onClick={() => setFaq2Active(!faq2Active)}>
                <FaChevronDown className="fa-chevron-down" />
                <FaTimesCircle className="fa-times" />
              </button>
            </div>
            <div className={faq3Active ? 'faq active' : 'faq'}>
              <h3 className="faq-title" onClick={() => setFaq3Active(!faq3Active)}>
                How does it work?
              </h3>
              <p className="faq-text">
                When you buy a health plan, you agree to pay a certain amount (known as a premium) to the HMO. In return, your HMO agrees to pay your
                medical bills whenever you access healthcare services, provided they are covered by your health plan.
              </p>
              <button className="faq-toggle" onClick={() => setFaq3Active(!faq3Active)}>
                <FaChevronDown className="fa-chevron-down" />
                <FaTimesCircle className="fa-times" />
              </button>
            </div>
            <div className={faq4Active ? 'faq active' : 'faq'}>
              <h3 className="faq-title" onClick={() => setFaq4Active(!faq4Active)}>
                How many people will the family plan cover?
              </h3>
              <p className="faq-text">The family plan will provide coverage for you, your spouse and up to four children under 18.</p>
              <button className="faq-toggle" onClick={() => setFaq4Active(!faq4Active)}>
                <FaChevronDown className="fa-chevron-down" />
                <FaTimesCircle className="fa-times" />
              </button>
            </div>
            <div className={faq5Active ? 'faq active' : 'faq'}>
              <h3 className="faq-title" onClick={() => setFaq5Active(!faq5Active)}>
                Do you cover children?
              </h3>
              <p className="faq-text">Yes, we do. However, there must be an adult on the plan as well.</p>
              <button className="faq-toggle" onClick={() => setFaq5Active(!faq5Active)}>
                <FaChevronDown className="fa-chevron-down" />
                <FaTimesCircle className="fa-times" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
