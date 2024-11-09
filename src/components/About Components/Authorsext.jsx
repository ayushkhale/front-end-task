import React from 'react'
import miles from '../../assets/Client-First - IMAGES/miles.svg'
import russel from '../../assets/Client-First - IMAGES/russel.svg'
import jenny from '../../assets/Client-First - IMAGES/jenny.svg'
import leshe from '../../assets/Client-First - IMAGES/leshe.svg'
import Guy from '../../assets/Client-First - IMAGES/Guy.svg'
import Pena from '../../assets/Client-First - IMAGES/Pena.svg'
import Fox from '../../assets/Client-First - IMAGES/Fox.svg'
import Jones from '../../assets/Client-First - IMAGES/Jones.svg'

import facebookIcon from '../../assets/Client-First - icons/facebookIcon.svg';
import twitterIcon from '../../assets/Client-First - icons/twitterIcon.svg';
import linkedinIcon from '../../assets/Client-First - icons/linkedinIcon.svg';
import instagramIcon from '../../assets/Client-First - icons/instagramIcon.svg';

const Authorsext = () => {
    return (
        <div>
            <section className="container mx-auto px-10 py-16 w-[95vw]">
                <h2 className="text-3xl font-bold mb-10 text-center font-Sen">List of Authors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Author 1 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={miles} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Floyd Miles</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-500">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Author 2 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={russel} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Dianne Russell</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-500">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Author 3 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={jenny} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Jenny Wilson</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-500">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Author 4 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={leshe} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Leslie Alexander</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-500">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Author 5 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={Guy} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Guy Hawkins</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-500">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Author 6 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={Pena} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Eleanor Pena</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-900">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-900">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-900">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-900">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Author 7 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={Fox} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Devon Fox</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-500">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Author 8 */}
                    <div className="bg-gray-100 shadow-lg p-10 text-center hover:bg-red-100 transition-colors duration-300">
                        <img src={Jones} alt="Author image" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold font-Sen">Robert Jones</h3>
                        <p className="text-gray-500">Content Writer @Company</p>
                        <div className="mt-4 space-x-2 flex justify-center">
                            <a href="#" className="text-gray-500">
                                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-500">
                                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Authorsext;
