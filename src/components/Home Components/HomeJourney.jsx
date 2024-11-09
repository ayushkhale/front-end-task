import React from 'react'
import journeybg from '../../assets/Client-First - IMAGES/journeybg.svg'
const HomeJourney = () => {
    return (
        <section className="px-5 md:px-14 py-5 relative h-[100vh] md:ml-36">
            <img
                src={journeybg}
                alt="Background Image"
                className="md:w-[800px] md:h-[600px]"
            />

            <div className="bg-white p-12 absolute top-[12vw] left-[35vw] h-max hidden md:flex md:flex-col shadow-xl">
                <h2 className="text-xl my-6 ">WHY WE STARTED</h2>
                <p className='text-4xl font-bold my-4 font-Sen w-full md:w-[500px]'>It started out as a simple idea and evolved into our passion.</p>
                <p className="my-6 text-gray-600 w-full md:w-[500px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quis porro facilis illo. Ad quis enim in nulla voluptas assumenda, earum voluptatibus eveniet odio!.</p>
                <a href="#" className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded">Discover our story</a>
            </div>

            <div className="md:hidden">
                <div className="bg-white p-12 absolute top-[0vw] left-[0vw] w-full max-w-[500px] z-10">
                <h2 className="text-xl my-6">WHY WE STARTED</h2>
                <p className="text-4xl font-bold my-4 font-Sen">It started out as a simple idea and evolved into our passion.</p>
                <p className="my-6 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quis porro facilis illo. Ad quis enim in nulla voluptas assumenda, earum voluptatibus eveniet odio!.</p>
                <a href="#" className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded">Discover our story</a>
                </div>
            </div>
            
        </section>
    )
}

export default HomeJourney