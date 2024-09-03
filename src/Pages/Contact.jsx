import React, { useState, useEffect } from 'react';
import './css/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import checkmark from '../Components/Assets/checkmark.png'

const Contact = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyxuz-VnqJLEmw5i_fCzdcTvrv1PyVnRM1cjJMqcyf_t6MiBsHzRa12NZfGnpi3y1A8/exec';
    const form = document.forms['contactform'];

    const validateForm = () => {
      const name = form.name.value.trim();
      const number = form.number.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobilePattern = /^\d{10}$/;

      if (!name || !number || !email || !message) {
        setValidationError('All fields are required.');
        clearValidationMessage();
        return false;
      }

      if (!mobilePattern.test(number)) {
        setValidationError('Please enter a valid 10-digit mobile number.');
        clearValidationMessage();
        return false;
      }

      if (!emailPattern.test(email)) {
        setValidationError('Please enter a valid email address.');
        clearValidationMessage();
        return false;
      }

      setValidationError('');
      return true;
    };

    const clearValidationMessage = () => {
      setTimeout(() => {
        setValidationError('');
      }, 5000);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (!validateForm()) {
        return;
      }
      
      setLoading(true);
      
      // Set the current date and time in the hidden input field
      const dateTimeField = document.getElementById('datetime');
      const now = new Date();
      dateTimeField.value = now.toLocaleString(); // Format the date and time
    
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(_result => {
          setLoading(false);
          setPopupVisible(true);
          setTimeout(() => {
            setPopupVisible(false);
          }, 4000); 
        })
        .catch(_error => {
          setLoading(false);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000); 
        });
        
      form.reset();
    };
    

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []); 

  return (
    <div className="contact-container">
      <div id="error-message" className={`message ${error ? '' : 'hidden'} error-message`}>
        <FontAwesomeIcon icon={faTimes} /> Please check the internet to submit the details. Thank you!
      </div>
      <div id="validation-error" className={`message ${validationError ? '' : 'hidden'} error-message`} onClick={() => setValidationError('')}>
        <FontAwesomeIcon icon={faTimes} /> {validationError}
      </div>
      <div id="success-message" className={`message hidden success-message ${popupVisible ? 'open-popup' : ''}`}></div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form name="contactform" method="post">
          <div className="form-group">
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" name="number" id="mobile" placeholder="Your Mobile Number" />
          </div>
          <div className="form-group">
          <input type="hidden" name="datetime" id="datetime" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Your Message"></textarea>
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
      <div className={`popup ${popupVisible ? 'open-popup' : ''}`} id="popup">
        <img src={checkmark} alt="checkmark" />
        <h2>Thank You!</h2>
        <p>Your message has been sent. Thank you!</p>
        <button type='button' onClick={() => setPopupVisible(false)}>OK</button>
      </div>
      {loading && (
        <div id="loading-spinner">
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}
      
      <div className="contact-details">
        <h3>Contact Information</h3>
        <p>Phone:<a href="tel:+918086097100"> 91 8086097100</a></p>
        <p>Phone:<a href="tel:+91 8086 097 101"> 91 8086097101</a></p>
        <p>Email: <a href="mailto:zgreendoors@gmail.com">zgreendoors@gmail.com</a></p>
        <p>Corporate Office: 12/661, Green Square, Puthanur Post,
        Mundur, Palakkad - 678 592, Kerala</p>
      </div>
    </div>
  );
};

export default Contact;
