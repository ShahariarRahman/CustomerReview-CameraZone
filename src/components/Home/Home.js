import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import image from '../../images/home-img.jpg';
import Review from '../Review/Review';

const Home = () => {
    const [reviews,] = useReviews();
    return (
        <div>
            <div className='grid md:grid-cols-3 mt-16 mx-6'>
                <div className='md:col-span-2 px-4 lg:px-20 md:mt-6'>
                    <h1 className='text-4xl lg:text-5xl xl:text-6xl font-extrabold '>
                        <p>Your next Camera</p>
                        <p className='text-blue-700'>Your best Camera</p>
                    </h1>
                    <p className='text-xl text-gray-700 mt-10'>We are selling all kinds of cameras. All products are 100% new and authentic. We sell cameras from Canon, Canon, Nikon, Sony, Panasonic, Fujifilm and many more brands. We have professional cameras for photography: Canon EOS 6D Mark II, Nikon D850, Panasonic Lumix G85, Sony Alpha A7 III, Sony Alpha A6400. Please buy a product and let us know about your experience with our product by giving your review.</p>
                    <button className='text-blue-800 font-semibold bg-indigo-100 px-10 py-3 my-10 rounded-md hover:bg-blue-500 hover:text-white'>Live demo</button>
                </div>
                <div className='flex justify-center'>
                    <img className='h-96 object-cover border-2' src={image} alt="" />
                </div>
            </div>

            <div className='mt-14 mx-0 lg:px-20 xl:px-20 2xl:px-24 ' >
                <h3 className='text-4xl font-bold text-center'>Customer Reviews(3)</h3>
                <div className='grid md:grid-cols-3 gap-4 px-8 mt-14'>
                    {reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)}
                </div>
                <div className='flex justify-center my-16 pb-16'>
                    <button className='text-white bg-blue-700 px-20 py-1 rounded-md font-semibold text-lg'>
                        <Link to='/reviews'>See All Reviews</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;