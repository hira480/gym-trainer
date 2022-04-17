import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div className='container'>
            <div className='text-center'>
                <h2>Welcome to Detail {serviceId}</h2>
                <Link to='/checkout'>
                    <Button className='btn btn-primary'>Confirm</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;