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
        <>
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
            <div className="pro-pac-layout-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M1.53577 0.542954C1.39184 0.533897 1.24769 0.556653 1.11355 0.609607C0.979413 0.66256 0.858586 0.74441 0.759657 0.849339C0.660728 0.954269 0.586126 1.0797 0.541154 1.21672C0.496181 1.35374 0.481943 1.49899 0.49945 1.64213L1.98381 17.5694C2.07868 18.3429 2.99283 18.7033 3.58976 18.2025L6.7221 15.6623L8.12651 18.095C8.9342 19.4939 10.2157 19.8377 11.6146 19.03C13.0135 18.2223 13.3568 16.9405 12.5492 15.5415L11.1496 13.1177L14.8612 11.6948C15.5935 11.4283 15.7387 10.4562 15.1166 9.98731L2.06493 0.738198C1.9114 0.62269 1.72754 0.554801 1.53577 0.542954Z" fill="white" />
                </svg>
                <span>Enroll Now</span>
            </div>
        </>
    );
}

export default Layout;