import React from 'react';
import { assets } from "../assets/assets.js";
import './Header.css';

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 rounded-lg p-10 md:px-16 py-12 shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-103">

            {/* Left Side */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-8 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight md:leading-tight">
                    Excellence in Care <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                        Schedule Your Appointment Today
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed md:max-w-lg mx-auto md:mx-0">
                    Discover trusted healthcare professionals and book your appointments seamlessly.
                </p>

                <a
                    href="#speciality"
                    className="mt-6 flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-l hover:shadow-2xl"
                >
                    Book Now
                    <img
                        className="w-5 h-5 transition-transform duration-300 ease-in-out hover:translate-x-2"
                        src={assets.arrow_icon}
                        alt="Arrow icon"
                    />
                </a>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-101 transition-transform duration-300 ease-in-out">
                    <img
                        className="w-full h-auto rounded-lg"
                        src={assets.header_img}
                        alt="Healthcare professionals"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-transparent to-transparent opacity-90 rounded-lg"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
