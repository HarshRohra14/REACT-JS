import React from 'react'

export default function Contact() {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Info Card */}
                <div className="bg-orange-50 p-8 rounded-2xl shadow-md">
                    <h2 className="text-3xl font-extrabold text-orange-800">Get in Touch</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Interested in adopting or renting a cat? Reach out and we'll help you find your purr-fect companion.
                    </p>

                    <div className="mt-8 space-y-6 text-gray-700">
                        <div className="flex items-center">
                            <span className="text-orange-600">
                                📍
                            </span>
                            <span className="ml-3 font-medium">
                                Catopia HQ, Purr Street, Meow City, 112233
                            </span>
                        </div>

                        <div className="flex items-center">
                            <span className="text-orange-600">
                                📞
                            </span>
                            <span className="ml-3 font-medium">
                                +91 98765 43210
                            </span>
                        </div>

                        <div className="flex items-center">
                            <span className="text-orange-600">
                                📧
                            </span>
                            <span className="ml-3 font-medium">
                                hello@catopia.org
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Contact Form */}
                <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="tel" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="tel"
                            name="tel"
                            placeholder="Mobile number"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Optional Inquiry Type */}
                    <div>
                        <label htmlFor="type" className="block text-sm font-semibold text-gray-700">I am interested in</label>
                        <select
                            id="type"
                            name="type"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            <option>Adopting a cat</option>
                            <option>Renting a cat</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

