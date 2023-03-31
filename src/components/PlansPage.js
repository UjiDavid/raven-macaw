import React from 'react';
import '../components/styles/PlansPage.css';
import { Link } from 'react-router-dom';
import PlanImage from '../components/assets/PlanImage.jpg';
import PricingPlans from './PricingPlans';

const PlansPage = () => {
  return (
    <>
      <div className="about-section-background">
        <div className="about-section-container">
          <div className="about-section-left">
            <h1>Qualitative and Affordable Healthcare</h1>
            <p>
              The Raven and Macaw Health Plans range from the high end to the lower end of the market thereby ensuring that there is a plan for you no
              matter your status. Our health plans are designed to meet both local and international healthcare needs; offering a one-stop solution to
              all your health care needs. To find out more or to get a quote call us +234 809 666 1116
            </p>
            <Link to="/plans">
              <button className="btn">GET STARTED</button>
            </Link>
          </div>
          <div className="about-section-right">
            <div className="image-box">
              <img src={PlanImage} alt="Ravens and Macaw HMO" />
            </div>
          </div>
        </div>
      </div>
      <div className="plans-section-background">
        <div className="plans-section-container">
          <div className="plans-section-title">
            <h3>Pricing Plans</h3>
            <h1>We are Offering Competitive Prices for Our Clients</h1>
          </div>
          <PricingPlans />
        </div>
      </div>
    </>
  );
};

export default PlansPage;
