import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ styles, title, link }) => {
  return (
    <Link to={`/${link}`}>
      <button
        type="button"
        className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
