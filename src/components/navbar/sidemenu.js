import { useState } from "react";
import "../../styles/navbar/navbar.css";
import menuIcon from "../../images-and-icons/icon.svg";
import locationIcon from "../../images-and-icons/location-icon.svg";
import logoIcon from "../../images-and-icons/inspire-icon.png"

function Sidemenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="sidemenu-content" onClick={toggleMenu}>
                <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
            </div>
            <div className={`side-menu ${isOpen ? "open" : ""}`}>
                <button className="close-button" onClick={toggleMenu}>&times;</button>
                
                <div className="menu-header">
                    <img src={logoIcon} alt="Logo" className="menu-logo" />
                    <h1>Inspire Digital</h1>
                </div>
                
                <div className="menu-section">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="menu-button">Contact Us</button>
                </div>

                <div className="menu-section">
                    <h2>Contact Us</h2>
                    <p><i className="fa fa-map-marker"></i> Valentin, Street Road 24, New York</p>
                    <p><i className="fa fa-phone"></i> +000 123 (456) 789</p>
                    <p><i className="fa fa-envelope"></i> runokcontact@gmail.com</p>
                </div>

                <div className="social-icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-google"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidemenu;
