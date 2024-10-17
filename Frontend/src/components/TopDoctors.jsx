import React, {useContext} from 'react';
// import { doctors } from "../assets/assets.js";
import {useNavigate} from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);

    return (
        <div className='flex flex-col cursor-pointer items-center gap-12 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-4xl font-extrabold text-blue-800 tracking-wide'>Top Doctors Available</h1>
            <p className='sm:w-2/3 text-center text-lg text-gray-600 leading-relaxed'>
                Browse through our carefully curated list of top-rated doctors. Find and book appointments with ease, backed by trusted patient reviews.
            </p>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={()=>navigate(`/appointment/${item._id}`)}
                        className='group relative bg-gradient-to-b from-gray-100 to-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 ease-in-out'
                        key={index}
                    >
                        <div className=' inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out'></div>
                        <img className='w-full h-48 object-cover rounded-t-2xl pt-0' src={item.image} alt={item.name} />
                        <div className='p-6 relative z-10'>
                            <div className='flex items-center gap-2 text-sm text-green-500'>
                                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                                <p>Available</p>
                            </div>
                            <p className='mt-3 text-lg font-semibold text-gray-800 group-hover:text-bold transition-colors duration-500'>
                                {item.name}
                            </p>
                            <p className='text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-500'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='mt-10 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md hover:from-blue-500 hover:to-blue-400 transition-all duration-300 ease-in-out'>
                View More
            </button>
        </div>
    );
};

export default TopDoctors;
