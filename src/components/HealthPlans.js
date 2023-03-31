import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Specials.css';
import HealthPlans from './HealthPlansCards';

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h1>Our Health Plans</h1>
        <div className="btn-container">
          <Link to="/plans">
            <button className="btn btn-menu">View Plans</button>
          </Link>
        </div>
      </div>
      <HealthPlans />
    </div>
  );
};

export default Specials;
