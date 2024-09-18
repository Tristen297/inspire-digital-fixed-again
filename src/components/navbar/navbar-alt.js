import React, { useEffect, useState } from "react";
import "../../styles/navbar/navbar-alt.css"; 
import logoIcon from "../../images-and-icons/inspire-icon.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the icons
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

function NavbarAlt() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar-alt-content ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-alt-logo">
                {/* Wrap the logo in a Link component to link to the home page */}
                <Link to="/">
                    <img src={logoIcon} alt="logo icon for inspire digital" className="menu-logo-alt" />
                </Link>
                <h1>Inspire Digital</h1>
            </div>

            <div className={`nav-alt-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about-us">About Us</Link> 
                <Link to="/contact">Contact</Link>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
            </div>
        </div>
    );
}

export default NavbarAlt;
