import React from 'react';
import postbg from '../../assets/Client-First - IMAGES/postbg.svg';

const Posts = () => {
    return (
        <section className="container mx-auto px-4 md:px-14 py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                
                <div className="md:col-span-2 border-2 border-gray-200 rounded-lg overflow-hidden md:p-10 ">
                    <h2 className="text-2xl md:text-2xl font-bold mb-4 font-Sen">Featured Post</h2>
                    <div className="bg-white">
                        <img src={postbg} alt="Featured post image" className="w-full object-cover" />
                        <div className="p-5 md:p-6">
                            <div className="text-sm text-gray-500">By Jane Doe | Mar 23, 2022</div>
                            <h3 className="text-lg md:text-xl font-bold mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </h3>
                            <p className="mt-4 text-gray-700">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                            <a href="#" className="mt-6 inline-block bg-yellow-500 text-gray-900 px-5 py-3 rounded">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>


                <div className="w-full">
                    <div className="flex items-center justify-between pb-5 font-Sen px-5">
                        <h2 className="text-xl font-bold">All Posts</h2>
                        <a href="blog" className="text-lg font-inter">View All</a>
                    </div>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="block bg-white rounded-lg p-4 md:p-6">
                                <div className="text-sm text-gray-500">By James | Aug 23, 2022</div>
                                <h3 className="text-base md:text-lg font-bold mt-2">8 Figma design systems that you can download for free today.</h3>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block bg-red-100 rounded-lg p-4 md:p-6">
                                <div className="text-sm text-gray-500">By James | Aug 23, 2022</div>
                                <h3 className="text-base md:text-lg font-bold mt-2">8 Figma design systems that you can download for free today.</h3>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block bg-white rounded-lg p-4 md:p-6">
                                <div className="text-sm text-gray-500">By James | Aug 23, 2022</div>
                                <h3 className="text-base md:text-lg font-bold mt-2">8 Figma design systems that you can download for free today.</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Posts;
