import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Spacing from '../components/Spacing';
import About from '../components/About';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Spacing/>
        <Spacing/>
        <About/>
    </div>
  )
}
