import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './FloatingWhatsApp.css'; // Create and import the CSS file for styling

const FloatingWhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/918086097100" 
      className="whatsapp_float" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
}

export default FloatingWhatsAppButton;
