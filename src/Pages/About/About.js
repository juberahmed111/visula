import React from 'react';
import img from '../../Pages/img/Captures/about.jpg'
import './About.css'
const About = () => {
    return (
        <div className=' mb-5'>
            <div className='header-info'>
                <h1 className='text-center'>About us</h1>
                <p style={{ textAlign: "center", margin: '0 90px' }}>APNA CAR comapny is the biggest and femous or popular car company </p>
                <p style={{ textAlign: "center", margin: '0 90px' }}>in the world </p>

            </div>
            <div className='about'  >
                <img src={img} style={{ width: '200px' }} alt="" />
                <h3>The CEO of our car company of APNA CAR</h3>
                <h5><span>ABOUT: </span>My name is ABDUR RAHIM. i am a student of class ten | i am the ceo of apna car company and beside i am   FRONTEND WEBDEVELOPER </h5>

            </div>
        </div>
    );
};

export default About;