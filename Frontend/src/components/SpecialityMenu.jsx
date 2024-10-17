import React from 'react';
import { specialityData } from '../assets/assets.js';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <div className='flex flex-col items-center gap-12 py-16 bg-gray-50 text-gray-800' id='speciality'>
            <h1 className='text-4xl font-extrabold text-gray-700'>Explore by Speciality</h1>
            <p className='sm:w-1/2 text-center text-base text-gray-500 leading-relaxed'>
                Browse through our extensive list of specialities and easily connect with the right healthcare professionals for your needs.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4'>
                {specialityData.map((item, index) => (
                    <Link onClick={()=>scrollTo(0,0)}
                        key={index}
                        to={`/doctors/${item.speciality}`}
                        className='group flex flex-col items-center p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300'
                    >
                        <img src={item.image} alt={item.speciality} className='w-24 h-24 object-cover rounded-full mb-4 transition-transform duration-300 group-hover:scale-105'/>
                        <p className='text-lg font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;
