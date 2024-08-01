import React from 'react';
import './NewsLatter.css';

const NewsLatter = () => {
  return (
    <div className="newletter">
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe To Our Newsletter and Stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLatter;
