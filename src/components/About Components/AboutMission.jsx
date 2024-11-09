import React from 'react'
import shape from '../../assets/Client-First - IMAGES/shape.svg'
import shape2 from '../../assets/Client-First - IMAGES/shape-1.svg'
import journeybg from '../../assets/Client-First - IMAGES/journeybg.svg'

const AboutMission = () => {
  return (
    <div>
      <section className="px-5 md:px-16 py-5">

        <div class="w-full h-[400px] overflow-hidden relative">
          <img src={`${journeybg}`} alt="Image" class="w-full h-full object-cover object-center" />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start md:mx-28 absolute">
          <img src={`${shape2}`} alt="Featured post image" className="w-full md:w-[600px] object-cover md:max-w-[200px]" />
          <img src={`${shape}`} alt="Featured post image" className="w-full md:w-[300px] object-cover md:max-w-[600px]" />
        </div>

        <div className="bg-gray-100 container mx-auto px-4 md:px-20 py-10 h-[50vh]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24">
            <div className="w-full md:w-[500px]">
              <h2 className="text-xl mb-4">ABOUT US</h2>
              <h1 className="text-3xl font-bold mt-2">We are a community of content writers who share their learnings.</h1>
              <h3 className="text-lg mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque quasi sed voluptate accusamus consequuntur voluptates maxime aut dicta explicabo..</h3>
              <a href="#" className="mt-4 inline-block hover:underline font-semibold text-purple-950">Read More</a>
            </div>

            <div className="w-full md:w-[550px]">
              <h2 className="text-xl mb-4">OUR MISSION</h2>
              <h1 className="text-3xl font-bold mt-2">Creating valuable content for creatives all around the world.</h1>
              <h3 className="text-lg mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque quasi sed voluptate accusamus consequuntur voluptates maxime aut dicta explicabo..</h3>
              <a href="#" className="mt-4 inline-block hover:underline font-semibold text-purple-950">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMission