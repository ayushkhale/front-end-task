import React from 'react'
import Allblogs from '../Allblogs'
import business from '../../../assets/Client-First - icons/icon-1.svg';
import Startup from '../../../assets/Client-First - icons/rocket.svg';
import Economy from '../../../assets/Client-First - icons/icon.svg';
import Technology from '../../../assets/Client-First - icons/tech.svg';
import BusinessCards from './BusinessCards';

const Business = () => {
    return (
        <div>
            <section className="text-center mb-8 sm:mb-16 mx-14 my-16">
                <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-5 font-Sen">Business</h1>
                <p className="text-gray-600 max-w-lg sm:max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                <h2 className="text-sm mt-5">BLOG {'>'} BUSINESS</h2>
            </section>
            <div className='flex items-start'>
                <BusinessCards />
                <aside className="w-full lg:w-1/3 lg:pl-12 my-14 mx-20">
                    <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-8 text-left font-Sen">Categories</h2>

                        <div className="space-y-4 my-2">
                            <div className=" text-black px-4 py-2 rounded flex items-center border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
                                <img src={business} alt="Featured post image" className="h-[35px] object-cover bg-white rounded-lg" />
                                <h3 className="text-xl font-bold mt-2 font-Sen mb-2 mx-5">Business</h3>
                            </div>
                        </div>

                        <div className="space-y-4 my-2">
                            <div className=" text-black px-4 py-2 rounded flex items-center border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
                                <img src={Startup} alt="Featured post image" className="h-[35px] object-cover bg-white rounded-lg" />
                                <h3 className="text-xl font-bold mt-2 font-Sen mb-2 mx-5">Startup</h3>
                            </div>
                        </div>

                        <div className="space-y-4 my-2">
                            <div className=" text-black px-4 py-2 rounded flex items-center border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
                                <img src={Economy} alt="Featured post image" className="h-[35px] object-cover bg-white rounded-lg" />
                                <h3 className="text-xl font-bold mt-2 font-Sen mb-2 mx-5">Economy</h3>
                            </div>
                        </div>

                        <div className="space-y-4 my-2">
                            <div className=" text-black px-4 py-2 rounded flex items-center border-2 border-gray-200 hover:bg-[#FFD050] transition duration-300 hover:border-gray-300">
                                <img src={Technology} alt="Featured post image" className="h-[35px] object-cover bg-white rounded-lg" />
                                <h3 className="text-xl font-bold mt-2 font-Sen mb-2 mx-5">Technology</h3>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">All Tags</h3>
                        <div className="flex flex-wrap gap-2 rounded-2xl">
                            {['Business', 'Experience', 'Screen', 'Technology', 'Marketing', 'Life'].map(tag => (
                                <div key={tag} className="bg-white text-gray-900 px-4 py-2 rounded border">{tag}</div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Business