import React from 'react';
import { specialityData } from '../assets/assets.js';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <section
            className='flex flex-col items-center gap-16 py-24 bg-gradient-to-r from-blue-100 via-white to-indigo-100 text-gray-900'
            id='speciality'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-800'>
                Browse Specialities
            </h1>
            <p className='w-11/12 sm:w-3/4 md:w-1/2 text-center text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed'>
                Discover a wide range of healthcare specialities and get in touch with trusted professionals to meet
                your needs.
            </p>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full max-w-7xl px-8'>
                {specialityData.map((item, index) => (
                    <Link
                        key={index}
                        to={`/doctors/${item.speciality}`}
                        className='group flex flex-col items-center p-10 border border-transparent rounded-lg bg-gradient-to-tl from-indigo-50 to-blue-100 shadow-md hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-200 hover:to-blue-50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-blue-300'
                        onClick={() => scrollTo(0, 0)}
                    >
                        <div className='relative w-28 h-28 mb-6'>
                            <img src={item.image} alt={item.speciality}
                                 className='w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110'/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className='text-2xl font-semibold text-indigo-700 group-hover:text-blue-600 transition-colors duration-300'>
                            {item.speciality}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default SpecialityMenu;
