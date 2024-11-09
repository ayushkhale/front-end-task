import React from 'react';
import herobg from '../../assets/Client-First - IMAGES/herobg.svg'

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center max-h-lvh items-start"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-14 py-16 sm:py-20 md:py-24 relative z-10 text-white text-left md:text-left">
        <div className="text-xs sm:text-sm uppercase tracking-wider">Posted on Startup</div>
        <h1 className="font-Sen text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 w-full md:w-[750px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <div className="mt-2 sm:mt-3 text-sm sm:text-base">
          By <span className='font-semibold text-yellow-400 '><a href="blog/bloguser">James West</a></span> | May 23, 2022
        </div>
        <p className="mt-4 max-w-md md:max-w-lg lg:max-w-2xl mx-auto md:mx-0 text-sm sm:text-base">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <a
          href="blog/blogpost"
          className="mt-6 inline-block bg-yellow-500 text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded font-medium text-sm sm:text-base"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
