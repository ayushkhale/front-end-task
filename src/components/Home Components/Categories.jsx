import React from 'react';
import { Link } from 'react-router-dom';

import business from '../../assets/Client-First - icons/icon-1.svg';
import Startup from '../../assets/Client-First - icons/rocket.svg';
import Economy from '../../assets/Client-First - icons/icon.svg';
import Technology from '../../assets/Client-First - icons/tech.svg';

const Categories = () => {
  return (
    <section className="container mx-auto px-14 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center font-Sen">Choose A Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


      <Link to="business">    
        <div className="bg-white p-6 text-left border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
          <img src={business} alt="Featured post image" className="h-[70px] object-cover bg-white rounded-lg" />
          <div className="text-4xl mb-4"><i className="fas fa-briefcase"></i></div>
          <h3 className="text-3xl font-bold mt-2 font-Sen">Business</h3>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </Link>  

        <div className="bg-white p-6 text-left border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
          <img src={Startup} alt="Featured post image" className="h-[70px] object-cover p-5 bg-white rounded-lg" />
          <div className="text-4xl mb-4"><i className="fas fa-briefcase"></i></div>
          <h3 className="text-3xl font-bold mt-2 font-Sen">Startup</h3>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-6 text-left border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
          <img src={Economy} alt="Featured post image" className="h-[70px] object-cover bg-white rounded-lg" />
          <div className="text-4xl mb-4"><i className="fas fa-briefcase"></i></div>
          <h3 className="text-3xl font-bold mt-2 font-Sen">Economy</h3>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white p-6 text-left border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
          <img src={Technology} alt="Featured post image" className="h-[70px] object-cover bg-white rounded-lg" />
          <div className="text-4xl mb-4"><i className="fas fa-briefcase"></i></div>
          <h3 className="text-3xl font-bold mt-2 font-Sen">Technology</h3>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
