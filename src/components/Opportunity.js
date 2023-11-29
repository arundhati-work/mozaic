import React from 'react';
import '../styles/Opportunity.css';
import arrowUpRight from '../assets/arrow-up-right.png';
import OpportunityCard from './OpportunityCard';
import PrivateInvestors from '../assets/PrivateInvestors.png';
import AlignedInterests from '../assets/AlignedInterests.png';
import SpreadTheRisks from '../assets/SpreadTheRisks.png';

const cardData = [
    {
        id:1,
        label: 'Private investors',
        image: PrivateInvestors,
        text: 'lorem ipsum cinco domayo sit amet consecuter. Boda dunkirk pill oppasa niko elamo nayasa eto.',
    },
    {
        id:2,
        label: 'Aligned interests',
        image: AlignedInterests,
        text: 'lorem ipsum cinco domayo sit amet consecuter. Boda dunkirk pill oppasa niko elamo nayasa eto.',
    },
    {
        id:3,
        label: 'Spread the risks',
        image: SpreadTheRisks,
        text: 'lorem ipsum cinco domayo sit amet consecuter. Boda dunkirk pill oppasa niko elamo nayasa eto.',
    }
]

export default function Opportunity() {
  return (
    <div>
        <div className='opportunity'>
            <div className='text-container'>
                <div className='left-container'>
                    <ul>
                        <li>Opportunity</li>
                    </ul>
                    <h1>Unique investment <br/> opportunity</h1>
                </div>
                <div className='right-container'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <button>Request a call <img src={arrowUpRight} alt='arrow-right-up'/></button>
                </div>
            </div>
            <div className='cards-container'>
                    {
                        cardData.map((card)=>{
                            return <OpportunityCard key={card.id} label={card.label} image={card.image} text={card.text}/>
                        })
                    }
                </div>
        </div>
    </div>
  )
}
