import React from 'react';
import sleeping from '../../../images/sleeping.png';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-danger my-5'>Weak up man! Go to Gym..</h1>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;