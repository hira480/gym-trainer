import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Servises = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h1 className='services-titel mt-5'>My Services</h1>
                    <div className='services-container mt-3'>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servises;