import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";

const Appointment = () => {
    const { docID } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    const fetchDocInfo = () => {
        if (doctors && doctors.length > 0) {
            const foundDoc = doctors.find(doc => doc._id === docID || String(doc.id) === docID);
            if (foundDoc) {
                setDocInfo(foundDoc);
            } else {
                console.error('Doctor not found! Check if the ID is correct.');
            }
        }
    };

    const getAvailableSlots = async () => {
        setDocSlots([]);
        let today = new Date();
        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }
            let timeSlots = [];

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                timeSlots.push({
                    dateTime: new Date(currentDate),
                    time: formattedTime,
                });

                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            setDocSlots(prev => ([...prev, timeSlots]));
        }
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docID]);

    useEffect(() => {
        if (docInfo) getAvailableSlots();
    }, [docInfo]);

    return docInfo ? (
        <div className="container mx-auto p-6">
            {/* Main Doctor Info Section */}
            <div className="flex flex-col sm:flex-row gap-12 items-center bg-white rounded-lg shadow-lg p-8">
                <div className="w-full sm:w-1/3">
                    <img
                        className="w-full h-auto rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
                        src={docInfo.image}
                        alt={`Dr. ${docInfo.name}`}
                    />
                </div>
                <div className="flex-1 border border-gray-200 rounded-lg p-8 bg-gray-50">
                    <p className="flex items-center gap-2 text-3xl font-bold text-gray-900">
                        {docInfo.name}
                        <img className="w-6 h-6" src={assets.verified_icon} alt="Verified" />
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                        <p className="font-medium">{docInfo.degree} - {docInfo.speciality}</p>
                        <button className="py-1 px-3 bg-green-100 text-green-600 border text-xs rounded-full shadow-sm">
                            {docInfo.experience} Years Experience
                        </button>
                    </div>
                    <div className="mt-6">
                        <p className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                            About
                            <img className="w-5 h-5" src={assets.info_icon} alt="Info" />
                        </p>
                        <p className="text-md text-gray-600 mt-2 leading-relaxed">
                            {docInfo.about}
                        </p>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg font-semibold text-gray-700">
                            Appointment Fees:
                            <span className="text-gray-900 ml-2">
                                {currencySymbol}{docInfo.fees}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Appointment Booking Section */}
            <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
                <p>Booking Day</p>
                <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
                    {docSlots.length > 0 && docSlots.map((item, index) => (
                        <div
                            onClick={() => setSlotIndex(index)}
                            className={`text-center py-6 min-w-[64px] rounded-full cursor-pointer transition-colors duration-200 ${slotIndex === index ? 'bg-blue-600 text-white' : 'border border-gray-200 hover:bg-gray-200'}`}
                            key={index}
                        >
                            <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                            <p>{item[0] && item[0].dateTime.getDate()}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-3 w-full overflow-x-auto mt-4">
                    {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
                        <p
                            onClick={() => setSlotTime(item.time)}
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-colors duration-200 ${item.time === slotTime ? 'bg-blue-600 text-white' : 'text-gray-400 border border-gray-300 hover:bg-gray-100'}`}
                            key={index}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button className="bg-blue-600 text-white text-sm font-light px-14 py-3 rounded-full mt-4 hover:bg-blue-700 transition-colors duration-200">
                    Book Now
                </button>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white mt-10 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p>Email: support@medbook.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-3">
                            <a href="#" className="hover:scale-110 transition-transform">
                                <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform">
                                <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:scale-110 transition-transform">
                                <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4 text-sm text-gray-400">
                    © 2024 MedBook. All rights reserved.
                </div>
            </footer>
        </div>
    ) : (
        <p className="text-center mt-10 text-gray-500">Loading doctor information...</p>
    );
};

export default Appointment;
