import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
           <h1>Exclusive</h1>
           <h1>Offers For You</h1>
           <p>Only On Best Sellers Product</p>
           <a href='/Shop'><button>Click Now</button></a>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt='Exclusive Offer' />
        </div>
    </div>
  );
}

export default Offers;
