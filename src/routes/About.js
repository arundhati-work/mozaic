import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/About';
import Spacing from '../components/Spacing';
import Opportunity from '../components/Opportunity';
import Mission from '../components/Mission';

export default function About() {
  return (
    <div>
        <Navbar/>
        <Spacing/>
        <AboutUs/>
        <Spacing/>
        <Opportunity/>
        <Spacing/>
        <Mission/>
    </div>
  )
}
