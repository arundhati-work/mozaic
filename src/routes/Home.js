import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Spacing from '../components/Spacing';
import About from '../components/About';
import Opportunity from '../components/Opportunity';
import Gallery from '../components/Gallery';
import Mission from '../components/Mission';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Spacing/>
        <About/>
        <Spacing/>
        <Opportunity/>
        <Spacing/>
        <Gallery/>
        <Spacing/>
        <Mission/>
    </div>
  )
}
