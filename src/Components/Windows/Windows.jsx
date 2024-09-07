import React, {useEffect} from 'react';
import './Windows.css'; // Add this for custom styles
import image1 from '../Assets/secondslider.jpg'; 
import image2 from '../Assets/therdslider.jpg';
import image3 from '../Assets/windowscollectionone.jpg';
import image4 from '../Assets/windowscollectiontwo.jpg';
import image5 from '../Assets/windowscollectionthree.jpg';

const Windows = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="windows-container">
      <h1>Windows</h1>
      <div className="image-gallery">
        <img src={image1} alt="windows 1" className="gallery-image" />
        <img src={image2} alt="windows 2" className="gallery-image" />
        <img src={image3} alt="windows 3" className="gallery-image" />
        <img src={image4} alt="windows 4" className="gallery-image" />
        <img src={image5} alt="windows 5" className="gallery-image" />
      </div>
    </div>
  );
}

export default Windows;
