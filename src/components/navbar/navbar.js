import React, { useState } from 'react';
import "../../styles/navbar/navbar.css";
import Sidemenu from "./sidemenu";
import logoIcon from "../../images-and-icons/inspire-icon.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-content">
            <div className="sidemenu-container">
                <Sidemenu />
            </div>
            <div className="main-nav-content">
                <div className="nav-logo-full">
                    <img src={logoIcon} alt="Logo" className="menu-logo" />
                    <h1>Inspire Digital</h1>
                </div>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link> {/* Link to Home */}
                    <Link to="/services">Services</Link> {/* Link to Services */}
                    <Link to="/about-us">About Us</Link> {/* Link to About Us */}
                    <Link to="/contact-us">Contact</Link> {/* Link to Contact */}
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
