import React from 'react';

const Review = ({ review }) => {
    const { name, reviews, ratings } = review;
    return (
        <div className='border border-gray-400 rounded-xl py-2 px-4 font-thin text-lg shadow-xl  hover:shadow-2xl'>
            <h2>Name: {name}</h2>
            <h2>Reviews: {reviews}</h2>
            <h2>Ratings: {ratings}</h2>
        </div>
    );
};

export default Review;