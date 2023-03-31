import React from 'react';
import '../components/styles/SpecialsCard.css';
import Plan1 from '../components/assets/Corporate.jpg';
import Plan2 from '../components/assets/PrivatePlan.jpg';
import Plan3 from '../components/assets/OtherPlans.jpg';
import { Link } from 'react-router-dom';

const SpecialsCard = () => {
  const healthPlans = [
    {
      image: Plan1,
      title: 'Corporate Health Plan',
      price: 'N250,000',
      description:
        'Healthy employees are vital to business success, that’s why we’re here to support businesses with the everyday health of their employees.',
      button: '/addtocart',
    },
    {
      image: Plan2,
      title: 'Private Health Plan',
      price: 'N150,000',
      description:
        'We give you and your family access to treatments and services when you need them. Keeping on top of your health can be easier than you think.',
      button: '/addtocart',
    },
    {
      image: Plan3,
      title: 'Other Health Plans',
      price: 'N100,000',
      description:
        'In keeping with our innovative value, we provide other health care solutions aimed at fulfilling the need of all our enrollees, at all levels beyond their expectation.',
      button: 'addtocart',
    },
  ];

  const healthPlansItems = healthPlans.map((plan) => {
    const image = plan.image;
    const title = plan.title;
    const price = plan.price;
    const description = plan.description;
    const button = plan.button;

    return (
      <div>
        <div className="special-card-container">
          <div className="image-container">
            <img src={image} alt="Special dessert" />
          </div>
          <div className="special-card-text">
            <div className="special-card-title">
              <h3>{title}</h3>
              <h3 className="price-tag">{price}</h3>
            </div>
            <p>{description}</p>
          </div>
          <Link to={button}>
            <button className="special-card-btn btn">Buy Now</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="special-card">{healthPlansItems}</div>
    </div>
  );
};

export default SpecialsCard;
