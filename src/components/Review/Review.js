import React from 'react';

const Review = ({ review }) => {
    const { name, reviews, ratings } = review;
    return (
        <div className='p-6  text-lg bg-white rounded-md shadow-xl hover:shadow-2xl'>
            <h2> <span className='font-semibold'>Name: </span>{name}</h2>
            <h2> <span className='font-semibold'>Ratings:</span> {ratings}/5</h2>
            <h2> <span className='font-semibold'>Reviews:</span> {reviews}</h2>
        </div>
    );
};

export default Review;