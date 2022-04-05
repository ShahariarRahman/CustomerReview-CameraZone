import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex flex-col sm:flex-row justify-center items-center  text-md font-semibold pt-8'>
            <CustomLink to='/home'>HOME</CustomLink >
            <CustomLink to='/reviews'>REVIEWS</CustomLink >
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink >
            <CustomLink to='/blogs'>BLOGS</CustomLink >
            <CustomLink to='/about'>ABOUT</CustomLink >
        </nav>
    );
};

export default Header;