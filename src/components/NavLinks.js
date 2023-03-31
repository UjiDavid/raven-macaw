import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <motion.ul className="menu-items" initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }}>
      <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/" className="active-links">
          Home
        </NavLink>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.1 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/about" className="active-links">
          About
        </NavLink>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.15 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/plans" className="active-links">
          Our Plans
        </NavLink>
      </motion.li>
      <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.2 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/contact-us" className="active-links">
          Contact Us
        </NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavLinks;
