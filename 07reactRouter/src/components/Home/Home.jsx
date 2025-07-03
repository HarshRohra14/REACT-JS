import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-white mx-auto w-full px-4 sm:px-8 p-3">
            {/* Hero Section */}
            <aside className="relative rounded-2xl overflow-hidden shadow-xl mt-3">
                {/* Solid White Background Layer */}
                <div className="absolute inset-0 bg-white z-0" />

                {/* Clean Background Image (non-transparent) */}
                <img
                    className="absolute inset-0 h-full  opacity-90 z-10"
                    src="https://imgs.search.brave.com/YRS0Ow7H2K3MBTaDJnCxQRKcfjV6EPkxDqbpeq2q2QA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZXVwLWN1dGUt/ZG9tZXN0aWMtZ3Jl/eS1jYXQtbG9va2lu/Zy11cC13aXRoLWJl/YXV0aWZ1bC1iaWct/ZXllc18xODE2MjQt/MjIwMC5qcGc_c2Vt/dD1haXNfaXRlbXNf/Ym9vc3RlZCZ3PTc0/MA"
                    alt="Hero Background"
                />

                {/* Overlay Content */}
                <div className="relative z-20 px-6 py-20 sm:py-28 text-center sm:text-right">
                    <div className="sm:max-w-xl ml-auto space-y-6">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                            Rent a Cat Now
                            <span className="block text-orange-600 text-3xl sm:text-4xl mt-2">
                                Download the App Today
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700">
                            Adobt the joy, Rent a cat, Love without limits.
                        </p>

                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                            <svg
                                fill="currentColor"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 20h14v-2H5v2zm7-18L5.33 11h13.34L12 2z" />
                            </svg>
                            Download Now
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Image Section */}
            <div className="grid place-items-center mt-20">
                <img
                    className="w-full max-w-4xl rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                    src="https://i.pinimg.com/736x/7e/7a/e7/7e7ae7a4d2a5601e31f8fd1261492147.jpg"
                    alt="Productivity Tools"
                />
            </div>

            {/* CTA Heading */}
            <h1 className="w-full text-center text-3xl sm:text-5xl font-semibold text-gray-800 py-14">
                Choose. Cuddle. Cherish.
            </h1>
        </div>
    );
}
