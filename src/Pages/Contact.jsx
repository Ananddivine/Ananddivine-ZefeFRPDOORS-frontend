import React from 'react';
import './css/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" placeholder="Your Mobile Number" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
      
      <div className="contact-details">
        <h3>Contact Information</h3>
        <p>Phone:<a href="tel:+918086097100"> 91 8086097100</a></p>
        <p>Phone:<a href="tel:+91 8086 097 101"> 91  8086097101</a></p>
        <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
        <p>Corporate Office: 12/661, Green Square, Puthanur Post,
        Mundur, Palakkad - 678 592, Kerala</p>
      </div>
    </div>
  );
};

export default Contact;
