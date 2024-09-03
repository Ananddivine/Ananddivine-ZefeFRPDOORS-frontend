import React from 'react';
import './Allproductshow.css';
import doors from '../Assets/doors.jpg';
import windows from '../Assets/windows.jpg';
import { Link } from 'react-router-dom';

const Allproductshow = () => {


  return (
    <div className='Allproductshow'>
      <h1>Doors and Windows</h1>
      <div className="Allproductshow-grid">
        <div className="Allproductshow-item">
          <div className="Allproductshow-box">
            <Link to={`/doors`}>
              <img onClick={window.scrollTo(0,0)} src={doors} alt="" />
            </Link>
            <p>Explore our wide range of doors</p>
          </div>
        </div>
        <div className="Allproductshow-item">
          <div className="Allproductshow-box">
            <Link to="/windows">
              <img onClick={window.scrollTo(0,0)} src={windows} alt="" />
            </Link>
            <p>Discover our collection of windows</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allproductshow;
