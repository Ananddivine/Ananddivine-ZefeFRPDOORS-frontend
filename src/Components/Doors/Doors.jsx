import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import shop_image from '../Assets/Z-14.png';
import pvc_image from '../Assets/pvc_image.png';
import upvc_image from '../Assets/upvc_image.png';
import wpc_image from '../Assets/WPC.jpeg';

import './Doors.css';  

const Doors = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='Doors'>
      <h1>Select The Door You Want</h1>
      <div className='Doors-item'>
          <div className='Doors-box'>
          <Link to={`/shop`}>
            <img src={shop_image} alt="" />
            </Link>
            <p>FRP DOORS</p>
          </div>
       
       
          <div className='Doors-box'>
          <Link to={`/pvc`}>
            <img src={pvc_image} alt="" />
            </Link>
            <p>PVC DOORS</p>
          </div>
          <div className='Doors-box'>
        <Link to={`/upvc`}>
         
            <img src={upvc_image} alt="" />
            </Link>
            <p>UPVC DOORS</p>
          </div>
       
        
          <div className='Doors-box'>
          <Link to={`/wpc`}>
            <img src={wpc_image} alt="" />
            </Link>
            <p>WPC DOORS</p>
          </div>
      </div>
    </div>
  );
};

export default Doors;
