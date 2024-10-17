import React from 'react';
import { assets } from "../assets/assets.js";

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between p-8 bg-gray-300 rounded-lg shadow-lg px-6 sm:px-14 lg:px-12 my-20 md:mx-10'>
            {/* Left Side */}
            <div className='md:w-1/2 flex flex-col items-start'>
                <h1 className='text-4xl font-bold text-gray-800 mb-2'>Book Your Appointment</h1>
                <p className='text-lg text-gray-600 mb-6'>With 100+ Trusted Doctors</p>
                <button className='px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out'>
                    Create Account
                </button>
            </div>

            {/* Right Side */}
            <div className=' hidden  md:block md:w-1/4 mb-8 md:mb-0 lg:w-[300px] relative'>
                <img src={assets.appointment_img} alt="Appointment" className='w-full  bottom-0 right-0 h-auto rounded-lg shadow-md' />
            </div>
        </div>
    );
};

export default Banner;
