import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Doctors = () => {

    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
        } else {
            setFilterDoc(doctors);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [doctors, speciality]);

    return (
        <div className='container mx-auto p-6'>
            <div className='flex flex-col lg:flex-row items-start gap-10 mt-10'>
                {/* Filter Options */}
                <div className='w-full lg:w-1/4 flex flex-col gap-4'>
                    <h2 className='text-lg font-semibold text-gray-700'>Specialities</h2>
                    {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((item, idx) => (
                        <p
                            onClick={() => speciality === item ? navigate('/doctors') : navigate(`/doctors/${item}`)}
                            key={idx}
                            className={`pl-4 py-2 pr-16 border border-gray-300 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-100 hover:border-blue-400 text-gray-600 
                           ${speciality === item ? 'bg-blue-100 text-blue-600 border-blue-400' : ''}`}>
                            {item}
                        </p>
                    ))}
                </div>
                {/* Doctors List */}
                <div className='w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {filterDoc.map((item, index) => (
                        <div key={index}
                             onClick={() => navigate(`/appointment/${item._id}`)}
                             className='group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 ease-in-out cursor-pointer'>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-75 transition-opacity duration-500'></div>
                            <img className='w-full h-52 object-cover rounded-t-2xl' src={item.image} alt={item.name} />
                            <div className='p-5 relative z-10'>
                                <div className='flex items-center gap-2 text-sm text-green-500'>
                                    <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                                    <p>Available</p>
                                </div>
                                <p className='mt-3 text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-500'>
                                    {item.name}
                                </p>
                                <p className='text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-500'>
                                    {item.speciality}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
