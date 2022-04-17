import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, img, body, rating } = review;
    return (
        <div className="col-sm-12 col-md-3">
            <div className='card mt-4 review'>
                <img className='mx-auto' height={100} src={img} alt="" />
                <h5>{name}</h5>
                <p>{body}</p>
                <h6>Rating: {rating}</h6>
            </div>
        </div>
    );
};

export default Review;