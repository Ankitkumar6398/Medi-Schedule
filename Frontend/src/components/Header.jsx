import React from 'react';
import {assets} from "../assets/assets.js";
import './Header.css';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg px-6 md:px-10 py-2 md:py-2 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            {/*------------------------Left Side ------*/}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-8 m-auto md:py-[10vw] md:mb-[-30px]">
                <p className="text-3xl md:text-4xl lg:text-4xl text-white font-extrabold leading-tight md:leading-tight lg:leading-tight tracking-tight">
                    Healing Starts Here: <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                        Book Your Appointment Today
                    </span>
                </p>
                <div
                    className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-purple-600 to-indigo-500 p-6 rounded-lg shadow-lg text-white text-base font-light transition-all duration-300 ease-in-out hover:shadow-xl">
                    <img
                        className="w-28 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                        src={assets.group_profiles}
                        alt="Group of Profiles"
                    />
                    <p className="max-w-md leading-relaxed">
                        Easily explore our comprehensive list of reliable doctors,
                        <br className="hidden sm:block" />
                        and book your appointment without any hassle.
                    </p>
                </div>

                <a
                    className="flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out text-sm m-auto md:m-0"
                    href="#speciality"
                >
                    Book appointment
                    <img className="w-4 transition-transform duration-300 ease-in-out hover:translate-x-1" src={assets.arrow_icon} alt="arrow" />
                </a>
            </div>

            {/*--------------------------Right Side------------*/}
            <div className="md:w-1/2 relative">
                <img className="w-full md:absolute bottom-0 h-auto rounded-lg shadow-lg" src={assets.header_img} alt="Header" />
            </div>
        </div>
    );
};

export default Header;
