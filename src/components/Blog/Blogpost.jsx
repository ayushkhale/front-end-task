import React from 'react'
import blogpost from '../../assets/Client-First - IMAGES/blogpost.svg'
import jonathan from '../../assets/Client-First - IMAGES/jonathan.svg';
import Teamjoin from '../Home Components/Teamjoin';

import blog1 from '../../assets/Client-First - IMAGES/blog1.svg'
import blog2 from '../../assets/Client-First - IMAGES/blog2.svg'
import blog3 from '../../assets/Client-First - IMAGES/blog3.svg'
import blog4 from '../../assets/Client-First - IMAGES/blog4.svg'
import blog5 from '../../assets/Client-First - IMAGES/blog5.svg'

const Blogpost = () => {
    return (
        <div>
            <main class="container mx-auto px-14 py-16 items-center justify-center">
                <article class="mb-12 items-center">
                    <div className='md:mx-72'>
                        <div class="flex items-center mb-4">
                            <img src={`${jonathan}`} alt="Author's profile picture" class="rounded-full mr-4" />
                            <div>
                                <a href="bloguser">
                                    <div class="text-blue-600 font-semibold">Andrew Jonson</div>
                                </a>
                                <div class="text-gray-500">Posted on 27th January 2022</div>
                            </div>
                        </div>

                        <h1 class="text-4xl font-bold mb-4 md:w-[40vw]">Step-by-step guide to choosing great font pairs</h1>
                        <div class="text-yellow-500 mb-8 font-semibold"><i class="fas fa-rocket"></i> Startup</div>
                    </div>


                    <img src={`${blogpost}`} alt="People working in an office" class="w-full mb-8" />

                    <div className='justify-center md:mx-72'>
                    <section class="my-14 md:text-justify md:w-[50vw]">
                        <h2 class="text-3xl font-bold my-2 font-Sen tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                    </section>
                    <section class="my-14 md:text-justify w-[50vw]">
                        <h2 class="text-3xl font-bold my-2 font-Sen tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                        <ul class="list-disc list-inside text-gray-700 mb-4 font-semibold">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Non blandit massa enim nec scelerisque</li>
                            <li>Neque egestas congue quisque egestas</li>
                        </ul>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
                    </section>
                    </div>
                </article>

                <section class="mb-12">
                <h2 className="text-3xl font-bold mb-10 text-left font-Sen">What to read next</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white p-6">
                            <img src={`${blog1}`} alt="People discussing in a meeting" class="w-full mb-4" />
                            <div class="text-gray-500 mb-2">By John Doe | Aug 23, 2021</div>
                            <h3 class="text-xl font-semibold mb-2 font-Sen tracking-tight">A UX Case Study Creating a Studious Environment for Students:</h3>
                            <p class="text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                        <div class="bg-white p-6">
                            <img src={`${blog2}`} alt="Team brainstorming ideas" class="w-full mb-4" />
                            <div class="text-gray-500 mb-2">By John Doe | Aug 23, 2021</div>
                            <h3 class="text-xl font-semibold mb-2 font-Sen tracking-tight">A UX Case Study Creating a Studious Environment for Students:</h3>
                            <p class="text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                        <div class="bg-white p-6">
                            <img src={`${blog3}`} alt="Person presenting to a group" class="w-full mb-4" />
                            <div class="text-gray-500 mb-2">By John Doe | Aug 23, 2021</div>
                            <h3 class="text-xl font-semibold mb-2 font-Sen tracking-tight">A UX Case Study Creating a Studious Environment for Students:</h3>
                            <p class="text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>
                </section>
                <hr />
                <Teamjoin />
            </main>
        </div>
    )
}

export default Blogpost