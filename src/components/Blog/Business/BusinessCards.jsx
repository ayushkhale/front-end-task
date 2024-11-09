import React from 'react';
import { Link } from 'react-router-dom';

import blog1 from '../../../assets/Client-First - IMAGES/blog1.svg';
import blog2 from '../../../assets/Client-First - IMAGES/blog2.svg';
import blog3 from '../../../assets/Client-First - IMAGES/blog3.svg';
import blog4 from '../../../assets/Client-First - IMAGES/blog4.svg';
import blog5 from '../../../assets/Client-First - IMAGES/blog5.svg';

const BusinessCards = () => {
    return (
        <div className="px-4 md:px-16 py-8 md:py-16">
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-left font-Sen">All Posts</h2>
                <div className="space-y-10 md:space-y-14">

                    {/* Blog post 1 */}
                    <Link to="blogpost">
                        <div className="flex flex-col md:flex-row items-center md:items-start hover:cursor-pointer">
                            <img src={blog1} alt="Group of people discussing" className="w-full md:w-1/3 object-cover mb-6 md:mb-0 md:mr-8" />
                            <div className='w-full md:w-[40vw]'>
                                <h3 className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">STARTUP</h3>
                                <h4 className="text-xl md:text-3xl font-bold my-2 font-Sen tracking-tight">Design tips for designers that cover everything you need</h4>
                                <p className="text-gray-600 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident.</p>
                            </div>
                        </div>
                    </Link>

                    {/* Repeat for each blog post */}
                    <div className="flex flex-col md:flex-row items-center md:items-start hover:cursor-pointer">
                        <img src={blog1} alt="People in a meeting" className="w-full md:w-1/3 object-cover mb-6 md:mb-0 md:mr-8" />
                        <div className='w-full md:w-2/3'>
                            <h3 className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">BUSINESS</h3>
                            <h4 className="text-xl md:text-3xl font-bold my-2 font-Sen tracking-tight">Step-by-step guide to choosing great font pairs</h4>
                            <p className="text-gray-600 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start hover:cursor-pointer">
                        <img src={blog1} alt="People working together" className="w-full md:w-1/3 object-cover mb-6 md:mb-0 md:mr-8" />
                        <div className='w-full md:w-2/3'>
                            <h3 className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">BUSINESS</h3>
                            <h4 className="text-xl md:text-3xl font-bold my-2 font-Sen tracking-tight">Ten Free Google Fonts that you should Use</h4>
                            <p className="text-gray-600 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start hover:cursor-pointer">
                        <img src={blog1} alt="Two people discussing" className="w-full md:w-1/3 object-cover mb-6 md:mb-0 md:mr-8" />
                        <div className='w-full md:w-2/3'>
                            <h3 className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">BUSINESS</h3>
                            <h4 className="text-xl md:text-3xl font-bold my-2 font-Sen tracking-tight">What did i learn from doing 50+ designs sprints</h4>
                            <p className="text-gray-600 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident.</p>
                        </div>
                    </div>
                </div>

                {/* Pagination Buttons */}
                <div className="flex justify-center mt-8">
                    <button className="text-gray-600 hover:text-gray-900 mx-2 p-2 px-4 rounded-full bg-gray-200 hover:bg-gray-300 transition">Prev</button>
                    <button className="text-gray-600 hover:text-gray-900 mx-2 p-2 px-4 rounded-full bg-gray-200 hover:bg-gray-300 transition">Next</button>
                </div>
            </section>
        </div>
    );
}

export default BusinessCards;
