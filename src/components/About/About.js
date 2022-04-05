import React from 'react';

const About = () => {
    return (
        <div className='text-lg mt-8 flex flex-col items-center'>
            <h2 className='font-bold text-xl mt-6 mb-4'>Website: Camera Zone</h2>
            <div>
                <p><span className='font-semibold'>Home Section:</span> Home section have heading and most 3 recently customer reviews.</p>
                <p><span className='font-semibold'>Review Section:</span> Review section have all customer reviews with their name and ratings.</p>
                <p><span className='font-semibold'>Dashboard:</span> Dashboard have 4 kind of chart using rechart.</p>
                <p><span className='font-semibold'>Blog:</span> Description about Context API, Semantic Tag and difference between Inline, Block and Inline-block.</p>
            </div>
        </div>
    );
};

export default About;