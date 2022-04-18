import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../hooks';
import Service from '../Home/Service/Service';
import './Services.css'
const Services = () => {
    const [services] = useProducts();

    return (
        <div>
            <div className='header-info'>
                <h1 className='text-center'>About us</h1>
                <p style={{ textAlign: "center", margin: '0 90px' }}>APNA CAR comapny is the biggest and femous or popular car company </p>
                <p style={{ textAlign: "center", margin: '0 90px' }}>in the world </p>

            </div>
            <div className='row row-cols-1 row-cols-sm-1  row-cols-md-3 g-4'>
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>
        </div >
    );
};

export default Services;