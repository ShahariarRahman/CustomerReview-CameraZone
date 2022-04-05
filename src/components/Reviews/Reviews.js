import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,] = useReviews();
    return (
        <div className='flex flex-col items-center mt-10'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl px-4 font-semibold'>What our customer say!</h2>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 mx-6 my-10'>
                {reviews.map(review => <Review key={review.id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;