import React from 'react';
import '../styles/OpportunityCard.css';

export default function OpportunityCard(props) {
  return (
    <div className='op-card'>
        <div className='image-container'>
            <img src={props.image} alt={props.label}/>
        </div>
        <div className='header-container'>
            <h1>{props.label}</h1>
        </div>
        <div className='text-container'>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
