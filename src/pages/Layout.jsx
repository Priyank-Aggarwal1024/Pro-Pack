import React, { useState } from 'react';
import './layout.css'
import Navbar from './home/Navbar';
import Hero from './home/Hero';
import Guarantee from './home/Guarantee';
import OneGuarantee from './home/OneGuarantee';
import Roadmap from './home/Roadmap';
import Skill from './home/Skill';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';
import Footer from './home/Footer';
import WhyTutedude from './home/WhyTutedude';
import Backoffer from './home/Backoffer';
import DoubtSolve from './home/DoubtSolve';
import CareerOptions from './home/CareerOptions';
function Layout(props) {

    return (
        <div className='pro-pac-layout'>
            <Navbar />
            <Hero />
            <Roadmap />
            <OneGuarantee />
            <Backoffer />
            <DoubtSolve />
            <CareerOptions />
            <Guarantee />
            <Skill />
            <WhyTutedude />
            <Testimonials />

            <Faq />
            <Footer />
        </div>
    );
}

export default Layout;