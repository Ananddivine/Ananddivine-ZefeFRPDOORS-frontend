import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import instagram from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="SHRPER Logo" />
        <p>PVC & uPVC Doors</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>About</li>
        <li>Offices</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram} alt="Instagram Icon" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_icon} alt="Pinterest Icon" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp Icon" />
        </div>
      </div>
      <div className="footer-copieright">
        <hr />
        <p>Copie Right @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
