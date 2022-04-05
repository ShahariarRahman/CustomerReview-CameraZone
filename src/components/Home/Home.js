import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/home-img.jpg'

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-3 mt-10 mx-6'>
                <div className='col-span-2 px-6 mt-10'>
                    <h1 className='text-6xl font-extrabold '>
                        <p>Your next Camera</p>
                        <p className='text-indigo-700'>Your best Camera</p>
                    </h1>
                    <p className='text-lg text-gray-700 mt-7'>You can give your review in our website. You can give your review in our website. You can give your review in our website. You can give your review in our website. You can give your review in our website. You can give your review in our website. </p>
                    <button className='text-indigo-700 font-semibold bg-indigo-100 px-10 py-3 mt-7  rounded-md hover:bg-indigo-50'>Live demo</button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className='mt-12'>
                <h3 className='text-4xl font-bold text-center'>Customer Reviews(3)</h3>
                <div className='flex justify-center my-4'>
                    <button className='text-white bg-indigo-700 px-16 py-1 rounded-md font-semibold'>
                        <Link to='/reviews'>See All Reviews</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;