import React from 'react';
import './css/About.css'; // Import the CSS file for styling and animations

const About = () => {
  return (
   <div className="About-continer-body">
     <div className="about-container">
      <div className="text-slide">
        <h1>About Us</h1>
        <p>
          We are reaching out to you on behalf of Z Green Group, a well-established company in the PVC glass doors manufacturing 
          sector in Kerala for over 15 years. We have recently introduced a new venture, ZEFE FRP doors, and we are contacting 
          you, with whom we have maintained a collaborative relationship involving dealers and customers, to share this latest development.
        </p>
        <p>
          As we embark on the FRP doors segment, we are interested in exploring the possibility of collaboration with your esteemed 
          organization. Your past support has been invaluable to us, and we hope to continue receiving your encouragement. Equipped 
          with top-notch materials, advanced machinery, and a skilled professional team, we assure you of exceptional services and 
          innovative designs.
        </p>
        <p>
          We are eager for the potential of your support and cooperation in our new endeavor. Thank you for considering this opportunity.
        </p>
      </div>

      <div className="contact-details">
        <h3>Contact Information</h3>
        <p>Phone: <a href="tel:+918086097100">91 8086097100</a></p>
        <p>Phone: <a href="tel:+918086097101">91 8086097101</a></p>
        <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
        <p>Corporate Office: 12/661, Green Square, Puthanur Post, Mundur, Palakkad - 678 592, Kerala</p>
      </div>
    </div>
   </div>
  );
}

export default About;
