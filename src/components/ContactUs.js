import React from 'react';
import './styles/ContactUs.css';
import Form from './Form';

function ContactUs() {
  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>We got you covered.</h2>
          <p>
            Leave a message for us in the fields provided and our team will respond to you as soon as possible. Or you can also contact us directly
            using the information we have provided below.
          </p>
        </div>
        <div className="form">
          <h1>Contact Us</h1>
          <p>Please fill in and submit form to leave us a message.</p>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
