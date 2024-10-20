import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";
import {assets} from "../assets/assets.js";

const Appointment = () => {
    const {docID} = useParams();
    const {doctors, currencySymbol} = useContext(AppContext);

    const [docInfo, setDocInfo] = useState(null);

    const fetchDocInfo = () => {


        if (doctors && doctors.length > 0) {
            const docInfo = doctors.find(doc => doc._id === docID || String(doc.id) === docID);
            if (docInfo) {
                setDocInfo(docInfo);
            } else {
                console.error('Doctor not found! Check if the ID is correct and matches the data.');
            }
        }
    };

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docID]);

    return docInfo ? (
        <div className="container mx-auto p-6">
            <div className="flex flex-col sm:flex-row gap-12 items-center bg-white rounded-lg shadow-md p-8">
                {/* Doctor Image */}
                <div className="w-full sm:w-1/3">
                    <img
                        className="w-full h-auto rounded-lg shadow-lg object-cover transform transition-transform hover:scale-105"
                        src={docInfo.image}
                        alt={docInfo.name}
                    />
                </div>

                {/* Doctor Details */}
                <div className="flex-1 border border-gray-200 rounded-lg p-8 bg-gray-50">
                    {/* Doctor Name */}
                    <p className="flex items-center gap-2 text-3xl font-bold text-gray-900">
                        {docInfo.name}
                        <img className="w-6 h-6" src={assets.verified_icon} alt="Verified"/>
                    </p>

                    {/* Degree and Speciality */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                        <p className="font-medium">{docInfo.degree} - {docInfo.speciality}</p>
                        <button className="py-1 px-3 bg-green-100 text-green-600 border text-xs rounded-full shadow-sm">
                            {docInfo.experience} Years Experience
                        </button>
                    </div>

                    {/* About Section */}
                    <div className="mt-6">
                        <p className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                            About
                            <img className="w-5 h-5" src={assets.info_icon} alt="Info"/>
                        </p>
                        <p className="text-md text-gray-600 mt-2 leading-relaxed">
                            {docInfo.about}
                        </p>
                    </div>

                    {/* Appointment Fees */}
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
        </div>
    ) : (
        <p className="text-center mt-10 text-gray-500">Loading doctor information...</p>
    );
};

export default Appointment;
