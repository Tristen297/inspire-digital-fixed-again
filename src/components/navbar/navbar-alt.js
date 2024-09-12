import React, { useEffect, useState } from "react";
import "../../styles/navbar/navbar-alt.css"; 
import logoIcon from "../../images-and-icons/inspire-icon.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the icons

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
                {/* Wrapped the logo in an anchor tag to link to the home page */}
                <a href="./">
                    <img src={logoIcon} alt="logo icon for inspire digital" className="menu-logo-alt" />
                </a>
                <h1>Inspire Digital</h1>
            </div>

            <div className={`nav-alt-links ${menuOpen ? 'open' : ''}`}>
                <a href="./">Home</a>
                <a href="./">Services</a>
                <a href="./">About Us</a>
                <a href="./">Contact</a>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
            </div>
        </div>
    );
}

export default NavbarAlt;
