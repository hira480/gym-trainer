import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2 className='mt-2' style={{ color: '#332467' }}>{name}</h2>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <button className='btn custom-btn px-4'><small>ADMIT FOR {name}</small></button>
        </div>
    );
};

export default Service;