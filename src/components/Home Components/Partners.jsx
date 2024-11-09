import React from 'react';
import logo1 from '../../assets/Client-First - IMAGES/Logo 1.svg';
import logo2 from '../../assets/Client-First - IMAGES/logo 2.svg';
import logo3 from '../../assets/Client-First - IMAGES/logo 3.svg';
import logo4 from '../../assets/Client-First - IMAGES/logo 4.svg';
import logo5 from '../../assets/Client-First - IMAGES/logo 5.svg';

const Partners = () => {
  return (
    <section id="partners" className="px-6 sm:px-10 lg:px-20 py-5 text-left">
      <div className="container mx-auto mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7 items-center">
        {/* Title */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 text-center sm:text-left text-gray-600 mb-4 lg:mb-0">
          <h2 className="text-lg sm:text-xl">We're</h2>
          <h2 className="text-xl sm:text-2xl font-sans font-semibold">Featured in</h2>
        </div>

        {/* Partner Logos */}
        <img
          src={logo1}
          className="w-24 sm:w-32 object-cover mx-auto rounded-lg"
        />
        <img
          src={logo2}
          className="w-24 sm:w-32 object-cover mx-auto rounded-lg"
        />
        <img
          src={logo3}
          className="w-24 sm:w-32 object-cover mx-auto rounded-lg"
        />
        <img
          src={logo4}
          className="w-24 sm:w-32 object-cover mx-auto rounded-lg"
        />
        <img
          src={logo5}
          className="w-24 sm:w-32 object-cover mx-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default Partners;
