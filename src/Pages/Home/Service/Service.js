import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2 className='mt-2' style={{ color: '#332467' }}>{name}</h2>
            <h5>Price: ${price}</h5>
            <p className='px-2'>{description}</p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn custom-btn px-4'><small>ADMIT FOR {name}</small></button>
        </div>
    );
};

export default Service;