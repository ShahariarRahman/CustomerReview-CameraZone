import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center text-md font-semibold '>
            <CustomLink to='/home'>HOME</CustomLink >
            <CustomLink to='/reviews'>REVIEWS</CustomLink >
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink >
            <CustomLink to='/blogs'>BLOGS</CustomLink >
            <CustomLink to='/about'>ABOUT</CustomLink >
        </div>
    );
};

export default Header;