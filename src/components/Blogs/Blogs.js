import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-6 flex flex-col items-center text-md'>
            <div>
                <h2 className='font-bold text-xl mt-6 mb-4'>Questions:</h2>
                <div>
                    <p className='font-semibold'>What is Context API/ What is the Purpose of Context API?</p>
                    <p className='font-semibold'>Answer:</p>
                    <ul>
                        <li>Context API used to share data to child componenet without prop-drilling.</li>
                        <li>Context API export variables that can be accessable in all levels of your application.</li>
                        <li>useContext hook used to access parent componenets provided value without sharing the value to other componenet.</li>
                        <li>Using useContext we can select the provider so data privacy not compromised.</li>
                        <li>Context api is much helpfull when data to share in a largest nested componenet.</li>
                    </ul>
                </div>
                <div>
                    <p className='font-semibold mt-4'>What is Semantic Tag. Give some example?</p>
                    <p className='font-semibold'>Answer:</p>
                    <ul>
                        <li>Semantic tags let us know information about the contents of those tags.</li>
                        <li>Semantic tags is usefull to both the browser and the developer to understand its contents.</li>
                        <li>Nav: nav semantic tag is used for navigation links.</li>
                        <li>Header: header semantic tag is used for a document or section.</li>
                        <li>Main: main semantic tag is used for main content of a document.</li>
                        <li>Section: section semantic tag is used for a section in a document.</li>
                        <li>Article: article semantic tag is used when content is self-contained and distribute independently.</li>
                        <li>Footer: footer semantic tag is used for the footer section in a document.</li>
                    </ul>
                </div>
                <div>
                    <p className='font-semibold mt-4'>Difference Between Inline vs Block vs Inline-block.</p>
                    <p className='font-semibold'>Answer:</p>
                    <ul>
                        <li>Inline: Element doesn't start on a new line.It takes width it's required.</li>
                        <li>Inline: we can't set it's width and height.</li>
                        <li>Inline: we can't set vertical margin and padding.</li>
                        <li>block: ELement start on a new line. It takes full avaliable width.</li>
                        <li>block: we can set it's height, width and vertical margin, padding.</li>
                        <li>Inline-block: ELement doesn't start on a new line. It takes width it's required.</li>
                        <li>Inline-block: we can set it's height, width and vertical margin, padding.</li>
                        <li>Inline-block: It is formatted like inline element but behave like block element.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;