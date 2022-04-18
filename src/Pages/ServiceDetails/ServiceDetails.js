import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div className='container'>
            <div className='text-center mt-3'>
                <h2>Welcome to Detail {serviceId}</h2>
                <Link to='/checkout'>
                    <Button className='btn btn-primary mt-2'>Get an Appoinment</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;