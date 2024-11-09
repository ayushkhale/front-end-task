import React from 'react'
import aboucreative1 from '../../assets/Client-First - IMAGES/aboucreative1.svg'
import aboucreative2 from '../../assets/Client-First - IMAGES/aboucreative2.svg'
import circle from '../../assets/Client-First - IMAGES/circle.svg'
import shapes from '../../assets/Client-First - IMAGES/shapes.svg'

const Aboutcreatives = () => {
    return (
        <div>
            <section className="flex flex-col lg:flex-row justify-between mb-12 px-6 md:px-14 py-16 items-center">
                <div className="w-full lg:w-1/2 p-4 md:mr-36">
                    <h3 className="text-3xl lg:text-4xl font-bold my-2 font-Sen">Our team of creatives</h3>
                    <p className="text-lg lg:text-xl my-6 font-Sen font-semibold w-full md:w-[450px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="my-6 text-gray-600 w-full md:w-[500px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil accusantium neque recusandae sed ducimus veritatis dolorem dolor, assumenda excepturi praesentium pariatur exercitationem vitae officiis doloribus quidem molestias! Eaque ut molestias nesciunt ipsum quaerat officia veniam asperiores aperiam quas?</p>
                </div>
                <div className="relative w-full lg:w-1/2 p-4">
                    <img src={shapes} alt="Team of creatives working together" className="absolute top-28 -left-5 w-12 md:w-16 md:block hidden" />
                    <img src={aboucreative1} alt="Team of creatives working together" className="w-[70vw] md:w-[32vw]" />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row justify-between mb-12 px-6 md:px-14 py-16 items-center">
                <div className="relative w-full lg:w-1/2 p-4 md:mr-36">
                    <img src={circle} alt="Team of creatives working together" className="absolute left-28 -bottom-5 w-10 md:w-14 md:block hidden" />
                    <img src={aboucreative2} alt="Why we started this Blog" className="w-[70vw] md:w-[32vw]" />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h3 className="text-3xl lg:text-4xl font-bold my-2 font-Sen">Why we started this Blog</h3>
                    <p className="text-lg lg:text-xl my-6 font-Sen font-semibold w-full md:w-[450px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="my-6 text-gray-600 w-full md:w-[500px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil accusantium neque recusandae sed ducimus veritatis dolorem dolor, assumenda excepturi praesentium pariatur exercitationem vitae officiis doloribus quidem molestias! Eaque ut molestias nesciunt ipsum quaerat officia veniam asperiores aperiam quas?</p>
                </div>
            </section>
        </div>
    )
}

export default Aboutcreatives
