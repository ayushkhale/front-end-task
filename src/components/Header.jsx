import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 shadow h-20 backdrop-blur-5 bg-gray-900 p-2">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
          <div className="text-2xl font-bold text-center md:text-left text-white">&#123; Finsweet</div>
          </Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-yellow-400 focus:outline-none transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8 font-Sen">
          <Link to="/" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition-colors duration-300">About Us</Link>
          <Link to="/blog" className="text-white hover:text-yellow-400 transition-colors duration-300">Blog</Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact Us</Link>
          <Link to="/subscribe" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300">Subscribe</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav 
        className={`md:hidden flex flex-col space-y-2 mt-2 items-center transition-all duration-300 ease-in-out transform bg-gray-900 w-full mx-2 ${isOpen ? 'opacity-100 max-h-screen pb-4' : 'opacity-0 max-h-0 overflow-hidden'}`}
      >
        <Link to="/" className="text-white font-bold hover:text-yellow-400 transition-colors duration-300">Home</Link>
        <Link to="/about" className="text-white font-bold hover:text-yellow-400 transition-colors duration-300">About Us</Link>
        <Link to="/blog" className="text-white font-bold hover:text-yellow-400 transition-colors duration-300">Blog</Link>
        <Link to="/contact" className="text-white font-bold hover:text-yellow-400 transition-colors duration-300">Contact Us</Link>
        <Link to="/subscribe" className="bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300">Subscribe</Link>
      </nav>
    </header>
  );
};

export default Header;
