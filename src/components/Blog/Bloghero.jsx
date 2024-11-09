import React from 'react';
import bloghero from '../../assets/Client-First - IMAGES/bloghero.svg';

const Bloghero = () => {
    return (
        <div>
            <section className="relative bg-cover bg-center bg-gray-200 py-10 sm:py-16 lg:py-24">
                <div className="container mx-auto px-6 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between">
                    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                        <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-700">FEATURED POST</div>
                        <h1 className="font-Sen text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 w-full md:w-[750px] mx-auto md:mx-0">
                            Step-by-step guide to choosing great font pairs
                        </h1>
                        <div className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                            By <span className="font-semibold text-violet-950"><a href="blog/bloguser">John Doe</a></span> | May 23, 2022
                        </div>
                        <p className="mt-4 max-w-md sm:max-w-lg lg:max-w-2xl mx-auto md:mx-0 text-sm sm:text-base text-gray-700">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <a
                            href="blog/blogpost"
                            className="mt-6 inline-block bg-yellow-500 text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded font-medium text-sm sm:text-base"
                        >
                            Read More
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5 mt-6 md:mt-0">
                        <img src={bloghero} alt="Person working on a computer" className="w-max h-auto object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bloghero;
