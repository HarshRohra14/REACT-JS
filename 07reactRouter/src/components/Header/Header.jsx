import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="w-full border-b border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 w-auto"
                            alt="Logo"
                        />
                    </Link>

                    {/* Right Buttons */}
                    <div className="flex items-center gap-2 lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 transition"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/get-started"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 transition"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Center Nav */}
                    <div className="hidden lg:flex items-center w-full lg:w-auto lg:order-1">
                        <ul className="flex flex-col lg:flex-row font-medium lg:space-x-8 mt-4 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-orange-600 font-semibold transition"
                                            : "text-gray-700 hover:text-orange-500 transition"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-orange-600 font-semibold transition"
                                            : "text-gray-700 hover:text-orange-500 transition"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-orange-600 font-semibold transition"
                                            : "text-gray-700 hover:text-orange-500 transition"
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Github"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-orange-600 font-semibold transition"
                                            : "text-gray-700 hover:text-orange-500 transition"
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            {/* Add more links here if needed */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}