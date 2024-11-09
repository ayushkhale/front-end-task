import React from 'react';

import facebookIcon from '../assets/Client-First - icons/facebookIcon.svg';
import twitterIcon from '../assets/Client-First - icons/twitterIcon.svg';
import linkedinIcon from '../assets/Client-First - icons/linkedinIcon.svg';
import instagramIcon from '../assets/Client-First - icons/instagramIcon.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-16 px-6 sm:px-14">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
          <div className="text-2xl font-bold text-center md:text-left">&#123; Finsweet</div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="Blog" className="hover:text-gray-400">Blog</a>
            <a href="about" className="hover:text-gray-400">About Us</a>
            <a href="Contact" className="hover:text-gray-400">Contact Us</a>
            <a href="privacy" className="hover:text-gray-400">Privacy Policy</a>
          </nav>
        </div>

        <div className="bg-gray-800 text-left flex flex-col lg:flex-row py-10 px-4 lg:px-14 items-center space-y-6 lg:space-y-0 lg:space-x-8 justify-around">
          <h2 className="text-2xl lg:text-3xl font-bold font-sans text-center lg:text-left lg:w-[600px]">
            Subscribe to our newsletter to get the latest updates and news
          </h2>
          <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2  text-white bg-gray-900 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 px-6 py-2 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-6 md:space-y-0">
          <div className="text-center md:text-left text-gray-500">
            <p>Finsweet 2021 © All rights reserved.</p>
            <p>info@finsweet.com | 123-456-7890</p>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-white">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
