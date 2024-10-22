import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext.jsx";

const MyAppointment = () => {
    const { doctors } = useContext(AppContext);

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">My Appointments</h1>
            <div className="space-y-8 max-w-5xl mx-auto">
                {doctors.slice(0, 2).map((doctor, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 md:flex md:space-x-8 items-center transition-all duration-300 hover:shadow-2xl"
                    >
                        {/* Doctor Image */}
                        <div className="flex-shrink-0 mb-6 md:mb-0">
                            <img
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-400"
                                src={doctor.image}
                                alt={doctor.name}
                            />
                        </div>

                        {/* Doctor Details */}
                        <div className="flex-grow">
                            <p className="text-2xl font-semibold text-gray-800">{doctor.name}</p>
                            <p className="text-blue-500 mb-2 font-medium">{doctor.speciality}</p>
                            <p className="text-gray-700 font-semibold">Address:</p>
                            <p className="text-gray-500">{doctor.address.line1}</p>
                            <p className="text-gray-500">{doctor.address.line2}</p>
                            <p className="mt-4 text-gray-600">
                                <span className="font-bold">Date & Time:</span> 25, July 2024 | 8:30 PM
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col space-y-4 mt-6 md:mt-0 md:space-y-0 md:flex-row md:space-x-4">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
                                Pay Online
                            </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointment;
