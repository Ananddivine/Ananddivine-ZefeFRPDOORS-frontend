import React, { useEffect } from 'react';
import './Hero.css';
import slider_one from '../Assets/firstslider.jpg';
import slider_two from '../Assets/secondslider.jpg';
import slider_three from '../Assets/therdslider.jpg';
import slider_four from '../Assets/fourthslder.jpg';

const Hero = () => {
  useEffect(() => {
    // Ensure Bootstrap JS is available
    const carouselElement = document.querySelector('#heroCarousel');
    if (carouselElement) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // Set the interval to 3 seconds
        ride: 'carousel'
      });
      carousel.cycle(); // Start the carousel
    }
  }, []);

  return (
    <div id="heroCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
      <ol className="carousel-indicators">
        <li data-target="#heroCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#heroCarousel" data-slide-to="1"></li>
        <li data-target="#heroCarousel" data-slide-to="2"></li>
        <li data-target="#heroCarousel" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider_one} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={slider_two} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={slider_three} className="d-block w-100" alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img src={slider_four} className="d-block w-100" alt="Fourth slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Hero;
