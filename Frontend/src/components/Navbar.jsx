import React, { useState } from 'react';
import { assets } from "../assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => setShowMenu(false);

    return (
        <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-lg py-5 mb-5">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <span>
                   <h1 onClick={() => navigate('/')}
                       className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-700 hover:via-indigo-600 hover:to-purple-700 cursor-pointer transition-all duration-300 ease-in-out">
    MedSchedule
</h1>

                </span>

                {/* Navigation Links (Desktop View) */}
                <ul className="hidden md:flex items-center space-x-8 font-medium">
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            isActive
                                ? "text-indigo-700 font-semibold"
                                : "hover:text-indigo-600 transition duration-300"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/doctors"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-700 font-semibold"
                                : "hover:text-indigo-600 transition duration-300"
                        }
                    >
                        All Doctors
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-700 font-semibold"
                                : "hover:text-indigo-600 transition duration-300"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-indigo-700 font-semibold"
                                : "hover:text-indigo-600 transition duration-300"
                        }
                    >
                        Contact
                    </NavLink>
                </ul>

                {/* Profile Dropdown / Register Button */}
                <div className="flex items-center gap-4">
                    {token ? (
                        <div className="relative group cursor-pointer">
                            <div className="flex items-center mr-3 gap-2">
                                <img className="w-8 h-8 rounded-full object-cover shadow-sm" src={assets.profile_pic} alt="Profile" />
                                <img className="w-3 h-3" src={assets.dropdown_icon} alt="Dropdown" />
                            </div>
                            {/* Dropdown Menu */}
                            <div className="absolute right-0 mt-2 w-48 hidden group-hover:block bg-white shadow-xl rounded-lg z-20">
                                <ul className="text-gray-700 py-3">
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={() => navigate('/my-profile')}>My Profile</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={() => navigate('/my-dash-appointments')}>My Appointments</li>
                                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer" onClick={() => setToken(false)}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6 py-2 rounded-md font-semibold shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl hidden md:block"
                            onClick={() => navigate('/login')}
                        >
                            Register
                        </button>
                    )}

                    {/* Mobile Menu Icon */}
                    <img
                        onClick={() => setShowMenu(!showMenu)}
                        className="w-6 h-6 md:hidden cursor-pointer"
                        src={assets.menu_icon}
                        alt="Menu"
                    />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-20 transition-all duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="relative bg-white h-full w-72 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Menu</h2>
                            <img
                                onClick={() => setShowMenu(false)}
                                className="w-6 cursor-pointer"
                                src={assets.cross_icon}
                                alt="Close"
                            />
                        </div>
                        <ul className="flex flex-col space-y-6">
                            <NavLink to="/" className="text-lg text-gray-800 hover:text-indigo-600" onClick={handleLinkClick}>
                                Home
                            </NavLink>
                            <NavLink to="/doctors" className="text-lg text-gray-800 hover:text-indigo-600" onClick={handleLinkClick}>
                                All Doctors
                            </NavLink>
                            <NavLink to="/about" className="text-lg text-gray-800 hover:text-indigo-600" onClick={handleLinkClick}>
                                About
                            </NavLink>
                            <NavLink to="/contact" className="text-lg text-gray-800 hover:text-indigo-600" onClick={handleLinkClick}>
                                Contact
                            </NavLink>
                            {!token && (
                                <NavLink to="/login" className="text-lg text-white bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 py-2 px-4 text-center rounded-md mt-4">
                                    Register / Login
                                </NavLink>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
