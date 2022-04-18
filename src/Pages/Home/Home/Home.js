import React from 'react';
import useProducts from '../../../hooks';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Service from './Service/Service';

const Home = () => {
    const [services] = useProducts();
  
    const restServices =services.slice(0,3);
    return (
        <div>
    
            <Banner></Banner>
            <div className='row row-cols-1 row-cols-sm-1  row-cols-md-3 g-4 mt-5'>
            {
                restServices.map(service=><Service service={service}></Service>)
            }
             </div>
            
        </div>
    );
};

export default Home;