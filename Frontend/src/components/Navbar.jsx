import React, { useState } from 'react';
import { assets } from "../assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-5 mb-5 border-b border-gray-300 shadow-sm " style={{ backgroundColor: '#e1d9d1' }}>
            {/*------------------------------------ Logo ------------------------------------------------------*/}
            <span>
                <h1 onClick={()=>navigate('/')}
                    className="text-4xl ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-r
                    from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-700 hover:via-indigo-600
                    hover:to-purple-700 cursor-pointer transition-all duration-300 ease-in-out">
                    MedSchedule
                </h1>
            </span>

            {/* -------------------------------------------------------------------Navigation Links-------------------------------------------------------- */}
            <ul className="hidden md:flex items-center gap-6 font-medium">
                <NavLink exact to="/" activeClassName="text-blue-900">
                    <li className="py-1 hover:text-blue-600 transition duration-300">Home</li>
                </NavLink>
                <NavLink to="/doctors" activeClassName="text-blue-900">
                    <li className="py-1 hover:text-blue-600 transition duration-300">All Doctors</li>
                </NavLink>
                <NavLink to="/about" activeClassName="text-blue-900">
                    <li className="py-1 hover:text-blue-600 transition duration-300">About</li>
                </NavLink>
                <NavLink to="/contact" activeClassName="text-blue-900">
                    <li className="py-1 hover:text-blue-600 transition duration-300">Contact</li>
                </NavLink>
            </ul>

            {/* Profile Dropdown / Register Button */}
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="relative group cursor-pointer">
                        <div className="flex items-center mr-3 gap-2">
                            <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
                        </div>
                        {/* Dropdown Menu */}
                        <div className="absolute top-13 right-0  z-20 hidden group-hover:block bg-white shadow-lg rounded-lg">
                            <div  className='min w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                                <p className="hover:text-black cursor-pointer" onClick={() => navigate('/my-profile')}>My Profile</p>
                                <p className="hover:text-black cursor-pointer" onClick={() => navigate('/my-dash-appointments')}>My Appointment</p>
                                <p className="hover:text-black cursor-pointer" onClick={() => setToken(false)}>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-8 py-3 mr-4
                                       rounded-md font-semibold shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hidden md:block"
                        onClick={() => navigate('/login')}>
                        Register
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
