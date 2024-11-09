import React from 'react'
import bloguserpost0 from '../../../assets/Client-First - IMAGES/bloguserpost0.svg';
import bloguserpost1 from '../../../assets/Client-First - IMAGES/bloguserpost1.svg';
const BlogUserMain = () => {
    return (
        <div className="px-4 md:px-16 py-8 md:py-16">
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-left font-Sen">All Posts</h2>
                <div className="space-y-10 md:space-y-14">
                    <div className="flex flex-col md:flex-row items-center md:items-start hover:cursor-pointer">
                        <img src={bloguserpost0} alt="Group of people discussing" className="w-full md:w-1/3 object-cover mb-6 md:mb-0 md:mr-8" />
                        <div className='w-full  md:w-[40vw]'>
                            <h3 className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">BUSINESS</h3>
                            <h4 className="text-xl md:text-3xl font-bold my-2 font-Sen tracking-tight">Design tips for designers that cover everything you need</h4>
                            <p className="text-gray-600 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start hover:cursor-pointer">
                        <img src={bloguserpost1} alt="Two people discussing" className="w-full md:w-1/3 object-cover mb-6 md:mb-0 md:mr-8" />
                        <div className='w-full md:w-[40vw]'>
                            <h3 className="text-purple-600 text-sm font-semibold mb-2 tracking-widest">BUSINESS</h3>
                            <h4 className="text-xl md:text-3xl font-bold my-2 font-Sen tracking-tight">What did i learn from doing 50+ designs sprints</h4>
                            <p className="text-gray-600 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogUserMain