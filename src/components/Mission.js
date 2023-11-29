import React from 'react';
import '../styles/Mission.css';
import arrowUpRightWhite from '../assets/arrow-up-right-white.png';

export default function Mission() {
  return (
    <div>
        <div className='mission'>
            
            <div className='text-container'>
            <div className='header'>
                <ul>
                    <li>Our Mission</li>
                </ul>
            </div>
                <div className='left-container'>
                    <h1>Creation of investment opportunities</h1>
                    <p>Providing a stabilizing component to portfolios, combining low-risk profiles with a value-add approach to yield attractive returns.</p>
                    <button>Request a call <img src={arrowUpRightWhite} alt='arrow-up-right-white'/></button>
                </div>
                <div className='right-container'>
                    <div className='capital'>
                        <h1>$12M</h1>
                        <p>Capital Raised</p>
                    </div>
                    <div className='capital'>
                        <h1>1000+</h1>
                        <p>Happy Investors</p>
                    </div>
                </div>
            </div>
            <div className='credits'>
                <p>Credits: Illustrations by <u>Storyset</u>. Design inspired by <u>Outcrowd</u>.</p>
            </div>
        </div>
    </div>
  )
}
