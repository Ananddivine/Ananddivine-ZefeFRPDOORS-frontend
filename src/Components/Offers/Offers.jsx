import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
import brochure from '../Assets/brochure.zip'; // Replace with the correct file path

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Visit Our Brochure</h1>
        <a href={brochure} download="Exclusive_Offer_Brochure.zip">
          <button>Download Now</button>
        </a>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt='Exclusive Offer' />
      </div>
    </div>
  );
}

export default Offers;
