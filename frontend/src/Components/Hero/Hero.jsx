import React from 'react';
import "./Hero.css";
import hand_icon from '../Assests/hand_icon.png';
import arrow_icon from '../Assests/arrow.png';
import hero_image from '../Assests/hero_image.png';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Welcome to MegaMart</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="Hand Icon" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;