import React from 'react';
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo2.png'
function Navbar(props) {
    return (
        <nav className="pro-pac-navbar">
            <div className="pro-pac-nav-left">
                <NavLink to="/" className="pro-pac-nav-logo">
                    <img src={Logo} className='pro-pac-va-mid pro-pac-logo-large' pro-pac-alt="Logo" />
                    <img src={Logo2} className='pro-pac-va-mid pro-pac-logo-small' pro-pac-alt="Logo" />
                </NavLink>
                <div className="pro-pac-nav-list">
                    <NavLink to="/" className="pro-pac-fw-500 pro-pac-text-light-black pro-pac-nav-item">Explore Programs</NavLink>
                    <NavLink to="/" className="pro-pac-fw-500 pro-pac-text-light-black pro-pac-nav-item">Offers</NavLink>
                    <NavLink to="/" className="pro-pac-fw-500 pro-pac-text-light-black pro-pac-nav-item">About us</NavLink>
                    <NavLink to="/" className="pro-pac-fw-500 pro-pac-text-light-black pro-pac-nav-item">Internship</NavLink>
                </div>
            </div>
            <div className="pro-pac-nav-btn">
                <NavLink className="pro-pac-nav-login-btn">Login </NavLink>
                <NavLink className="pro-pac-nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;