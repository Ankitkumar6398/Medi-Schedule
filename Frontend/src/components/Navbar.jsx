import React from 'react';
import {assets} from "../assets/assets.js";
import {NavLink, useNavigate} from "react-router-dom";
import './Navbar.css'
import Home from "../pages/Home.jsx";

const Navbar = () => {
    const navigate = useNavigate();
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
                <button className='btn-primary' onClick={() => navigate('/login')}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Navbar;