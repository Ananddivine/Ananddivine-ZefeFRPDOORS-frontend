import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/logo.png'
import Arrowicon from '../Assets/arrow.png'
import hero_image from '../Assets/Z-14.png'

const Hero = () => {
  return (
   <div className="hero">
    <div className="hero-left">
   <h2>NEW ARIVALS ONLY</h2>
   <div>
    <div className="hero-hand-icon">
    <p>New</p>
       <img src={hand_icon} alt="" />
    </div>
    <p>Collections</p>
    <p>For everyone</p>
   </div>
    <a href='/Products'><div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={Arrowicon} alt="" />
   </div></a>
    </div>

    <div className="hero-right">
  <img src={hero_image} alt="" />
    </div>


   </div>
  )
}

export default Hero