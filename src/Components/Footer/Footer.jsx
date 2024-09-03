import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/Zefe_group_of_companies.png';
import instagram from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import mail_icon from '../Assets/gmail.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="SHRPER Logo" />
        <p>PVC UPVC WPC Doors & WINDOWS</p>
      </div>
      <ul className="footer-links">
        <li><a href='/home'>Company</a></li>
        <li><a href='/products'>Product</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Offices</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram Icon" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noreferrer">
            <img src={pinterest_icon} alt="Pinterest Icon" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="https://wa.me/918086097100" target="_blank" rel="noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp Icon" />
          </a>
        </div>
        <div className="footer-icon-container">
          <a href="mailto:zgreendoors@gmail.com" target="_blank" rel="noreferrer">
            <img src={mail_icon} alt="Mail Icon" />
          </a>
        </div>
      </div>
      <div className="footer-copieright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
