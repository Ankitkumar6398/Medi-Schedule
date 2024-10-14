import React, {useState} from 'react';
import {assets} from "../assets/assets.js";
import {NavLink, useNavigate} from "react-router-dom";
import './Navbar.css'
import Home from "../pages/Home.jsx";

const Navbar = () => {
    const navigate = useNavigate();

    const[showMenu,setShowMenu] = useState(false);
    const[token,setToken] = useState(true);

    return (
        <div className='navbar'>
            <span><h1>MedSchedule</h1></span>
            <ul className='navbar-links'>
                <NavLink to='/'>
                    <li>Home</li>
                    <hr/>
                </NavLink>
                <NavLink to='/doctors'>
                    <li>All Doctors</li>
                    <hr/>
                </NavLink>
                <NavLink to='/about'>
                    <li>About</li>
                    <hr/>
                </NavLink>
                <NavLink to='/contact'>
                    <li>Contact</li>
                    <hr/>
                </NavLink>
            </ul>
            <div className='navbar-btn'>
                {
                    token ? <div className='img-links'>
                            <img className='img-links-1' src={assets.profile_pic} alt=""/>
                            <img className='img-links-2' src={assets.dropdown_icon} alt=""/>
                        <div className='dropdown'>
                            <div>
                                <p>My Profile</p><p>My Appointment</p><p>Logout</p>
                            </div>
                        </div>
                        </div>
                        : <button className='btn-primary' onClick={() => navigate('/login')}>
                            Register
                        </button>
                }

            </div>
        </div>
    );
};

export default Navbar;