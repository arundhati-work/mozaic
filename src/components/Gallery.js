import React from 'react';
import '../styles/Gallery.css';
import corbetPark from '../assets/corbetPark.png';
import bloomingEthos from '../assets/bloomingEthos.png';
import valorBenz from '../assets/ValorBenz.png';
import salamander from '../assets/Salamander.png';

const galleryItems = [
    {
        id: 1,
        image: corbetPark,
        label: 'Corbet Park',
        location: 'Boston'
    },
    {
        id: 2,
        image: bloomingEthos,
        label: 'Blooming Ethos',
        location: 'Manchester'
    },
    {
        id: 3,
        image: valorBenz,
        label: 'Valor Benz',
        location: 'Irvine'
    },
    {
        id: 4,
        image: salamander,
        label: 'Salamander',
        location: 'Washington DC'
    },
]

export default function Gallery() {
  return (
    <div>
        <div className='gallery'>
            <div className='header'>
                <ul>
                    <li>Mozaic Gallery</li>
                </ul>
            </div>
            <div className='gallery-items-container'>
            {
                galleryItems.map((item)=>{
                    return (
                        <div className='galleryItem'>
                            <div className='image-container'>
                                <img src={item.image} alt={item.label}/>
                            </div>
                            <div className='text-container'>
                                <div className='text-items'>
                                <h3>{item.label}</h3>
                                <p>{item.location}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}
