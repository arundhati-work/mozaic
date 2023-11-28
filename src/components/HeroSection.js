import React from 'react';
import '../styles/HeroSection.css';
import arrowUpRight from '../assets/arrow-up-right.png';
import HeroImg from '../assets/hero-img.png';

export default function HeroSection() {
  return (
    <div>
        <div className='hero-section'>
            <div className='left-container'>
                <h1>Invest in <br/> real estate</h1>
                <p>Attractive location close to business centers provides guaranteed rentals. Choose from a wide range of options based on your budget and requirements.</p>
                <button>Request a call <img src={arrowUpRight} alt='arrow-up-right'/></button>
            </div>
            <div className='right-container'>
                <img src={HeroImg} alt='hero-img'/>
            </div>
        </div>
    </div>
  )
}
