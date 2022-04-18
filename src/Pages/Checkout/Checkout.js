import React from 'react';


import useProducts from '../../hooks';
import Checking from './Cheking/Checking';

const Checkout = () => {
 
 const [services]= useProducts()

  console.log(services)             

    return (
        <div>
        <h1>{services.length}</h1>
       {
         services.map(service=><Checking service={service}></Checking>)
       }
         
        </div>
    );
};

export default Checkout;