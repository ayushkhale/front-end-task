import React from 'react'
import facebookIcon from '../../../assets/Client-First - icons/facebookIcon.svg';
import twitterIcon from '../../../assets/Client-First - icons/twitterIcon.svg';
import linkedinIcon from '../../../assets/Client-First - icons/linkedinIcon.svg';
import instagramIcon from '../../../assets/Client-First - icons/instagramIcon.svg';

import shape from '../../../assets/Client-First - IMAGES/shape.svg';
import shape2 from '../../../assets/Client-First - IMAGES/shape-1.svg';

import jonathanclosed from '../../../assets/Client-First - IMAGES/jonathanclosed.svg';

const Anotherbloghero = () => {
    return (
        <div>
            <main className="bg-gray-200">
                <div className="relative px-4 sm:px-8 md:px-14 py-10 sm:py-16 flex flex-col md:flex-row justify-center items-center text-center md:text-left">

                    <img src={jonathanclosed} alt="Profile picture of Andrew Johnson" className="w-48 sm:w-64 md:w-auto mb-6 md:mb-0 md:mr-8" />


                    <div className="w-full md:w-[600px]">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Hey there, I’m Andrew Johnson and welcome to my Blog</h1>
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>


                        <div className="mt-4 flex justify-center md:justify-start space-x-4">
                            {[facebookIcon, twitterIcon, linkedinIcon, instagramIcon].map((icon, index) => (
                                <a href="#" key={index} className="text-gray-500">
                                    <img src={icon} alt={`Icon ${index}`} className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-14 mt-8">
                    <img src={shape} alt="Featured shape" className="w-full md:w-[700px] max-w-full object-cover" />
                    <img src={shape2} alt="Secondary shape" className="w-full md:w-[200px] max-w-full object-cover" />
                </div>
            </main>
        </div>
    )
}

export default Anotherbloghero;
