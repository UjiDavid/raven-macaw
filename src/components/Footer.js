import React from 'react';
import '../components/styles/Footer.css';
import Logo from '../components/assets/ravenlogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            We offer qualitative and affordable healthcare services tailored for individuals, families, companies and parastatals. We provide our
            customers with superior healthcare solutions that are cost effective, convenient to implement; and tailored to their identified needs.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>QUICK LINKS</h5>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/plans">Our Plans</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contac Us</Link>
                </li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>Abuja – 21 Abeokuta Street, Area 8, Garki, FCT, Nigeria</li>
                <li>Tel: +234 809 666 1116</li>
                <li>Email: hello@ravenandmacaw.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Raven & Macaw. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
