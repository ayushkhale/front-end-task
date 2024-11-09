import React from 'react'

const Contactform = () => {
    return (
        <div>
            <main className="p-4 sm:p-8 my-8 sm:my-16 mx-4 sm:mx-14">
                <section className="text-center mb-8 sm:mb-16">
                    <h2 className="text-sm font-bold">CONTACT US</h2>
                    <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-5 font-Sen">Let’s Start a Conversation</h1>
                    <p className="text-gray-600 max-w-lg sm:max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </section>

                <section className="bg-purple-700 text-white p-6 sm:p-8 mb-6 sm:mb-8 mx-4 sm:mx-16 lg:mx-48 h-auto sm:h-56">
                    <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                        <div className="px-4 sm:px-10">
                            <h3 className="py-2 sm:py-4 opacity-70">Working hours</h3>
                            <hr />
                            <p className="mt-2 font-bold font-Sen text-lg sm:text-xl">Monday To Friday</p>
                            <p className="font-bold font-Sen text-lg sm:text-xl">9:00 AM to 8:00 PM</p>
                            <p className="py-2 sm:py-4 opacity-70">Our Support Team is available 24/7</p>
                        </div>
                        <div className="px-4 sm:px-10">
                            <h3 className="py-2 sm:py-4 opacity-70">Contact Us</h3>
                            <hr />
                            <p className="mt-2 font-bold font-Sen text-lg sm:text-xl">020 7993 2905</p>
                            <p className="py-2 sm:py-4 opacity-70">hello@finsweet.com</p>
                        </div>
                    </div>
                </section>

                <section>
                    <form className="space-y-4 mx-4 sm:mx-8 lg:mx-48">
                        <input type="text" placeholder="Full Name" className="w-full p-3 sm:p-4 border border-gray-300 rounded" />
                        <input type="email" placeholder="Your Email" className="w-full p-3 sm:p-4 border border-gray-300 rounded" />
                        <select className="w-full p-3 sm:p-4 border border-gray-300 rounded">
                            <option>Query Related</option>
                            <option>Support</option>
                            <option>Sales</option>
                            <option>General</option>
                        </select>
                        <textarea placeholder="Message" className="w-full p-3 sm:p-4 border border-gray-300 rounded h-24 sm:h-32"></textarea>
                        <button type="submit" className="w-full bg-yellow-500 text-black p-3 sm:p-4 rounded font-Sen font-bold">Send Message</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default Contactform
