import React from 'react';
import Navbar from '../components/Navbar';
import OptionGallery from '../components/Gallery';
import Mission from '../components/Mission';
import Spacing from '../components/Spacing';

export default function Gallery() {
  return (
    <div>
        <Navbar/>
        <Spacing/>
        <OptionGallery/>
        <Spacing/>
        <Mission/>
    </div>
  )
}