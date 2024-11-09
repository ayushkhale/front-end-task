import React from 'react';
import jonathan from '../../assets/Client-First - IMAGES/jonathan.svg';
import arrow from '../../assets/Client-First - icons/Arrow 1.svg';

const Testimonials = () => {
  return (
    <section className="py-10 px-6 md:px-14">
      <div className="bg-red-100 container mx-auto flex flex-col md:flex-row items-center py-10 md:py-14 justify-evenly">

        {/* Text Section */}
        <div className="w-full md:w-[450px] text-center md:text-left px-5 md:px-20">
          <h2 className="text-lg mb-2 font-medium">TESTIMONIALS</h2>
          <p className="text-2xl md:text-3xl font-bold mt-2">What people say about our blog</p>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block h-full border-l-2 border-gray-300 mx-8"></div>

        {/* Testimonial Content */}
        <div className="w-full md:w-[500px] text-left items-center px-5">
          <p className="mt-4 font-semibold text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo perspiciatis, quos necessitatibus sed quibusdam illo ex accusamus molestiae dignissimos cumque!
          </p>
          <div className='md:flex md:items-center md:gap-12'>
          <div className="mt-6 md:mt-12 flex flex-col md:flex-row items-center justify-center md:justify-start">
            <img src={jonathan} alt="Jonathan Vallem" className="w-16 h-16 rounded-full mx-auto md:mx-0" />
            <div className="mt-4 md:mt-0 md:ml-5 text-center md:text-left">
              <p className="font-bold">Jonathan Vallem</p>
              <p className="text-sm text-gray-500">New York, USA</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-6 md:mt-10">
            <button className="bg-gray-400 p-2 rounded-full">
              <img src={arrow} className="w-8 h-8 rotate-180" alt="Previous" />
            </button>
            <button className="bg-black p-2 rounded-full">
              <img src={arrow} className="w-8 h-8" alt="Next" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
