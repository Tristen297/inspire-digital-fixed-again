import React, { useState } from 'react';
import "../../styles/navbar/navbar.css";
import Sidemenu from "./sidemenu";
import logoIcon from "../../images-and-icons/inspire-icon.png";

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
                    <a href="./">Home</a>
                    <a href="./">Services</a>
                    <a href="./">About Us</a>
                    <a href="./">Contact</a>
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
