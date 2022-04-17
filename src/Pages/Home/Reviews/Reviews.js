import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reciews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div id='reviews' className='container'>
            <h1 className='text-center mt-5'>What People Says?</h1>
            <div className='row'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;