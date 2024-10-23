import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Skeleton component
    const SkeletonCard = () => (
        <div className='animate-pulse bg-gray-200 h-64 rounded-2xl'></div>
    );

    return (
        <div className='flex flex-col items-center gap-12 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-5xl font-bold text-indigo-800 tracking-wide'>Top Doctors Available</h1>
            <p className='sm:w-2/3 text-center text-lg text-gray-600 leading-relaxed'>
                Browse our list of top-rated doctors and book your appointments with trusted professionals.
            </p>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 sm:px-0'>
                {loading ? (
                    Array(8).fill(0).map((_, index) => <SkeletonCard key={index} />)
                ) : (
                    doctors.slice(0, 10).map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            className='group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md transform hover:-translate-y-2 hover:shadow-lg transition-all duration-500 ease-in-out cursor-pointer'
                            key={index}
                        >
                            <img className='w-full h-48 object-cover rounded-t-2xl' src={item.image} alt={item.name} />
                            <div className='p-6'>
                                <div className='flex items-center gap-2 text-sm text-green-500'>
                                    <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                                    <p>Available</p>
                                </div>
                                <p className='mt-3 text-lg font-semibold text-gray-800'>
                                    {item.name}
                                </p>
                                <p className='text-sm text-gray-500'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {!loading && (
                <button
                    onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
                    className='mt-10 px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-400 transition-all duration-300 ease-in-out'
                >
                    View More
                </button>
            )}
        </div>
    );
};

export default TopDoctors;
