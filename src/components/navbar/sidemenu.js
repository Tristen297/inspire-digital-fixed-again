import { useState } from "react";
import "../../styles/navbar/navbar.css";
import menuIcon from "../../images-and-icons/icon.svg";
import locationIcon from "../../images-and-icons/location-icon.svg";
import phoneIcon from "../../images-and-icons/phone-icon.svg";
import mailIcon from "../../images-and-icons/mail-icon.svg";
import logoIcon from "../../images-and-icons/inspire-icon.png";

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
                    <p>
                        At Inspire Digital, we craft visually stunning and highly functional websites tailored to your brand. Our team is dedicated to helping your business thrive online with custom design and development solutions.
                    </p>
                    <button className="menu-button">Contact Us</button>
                </div>

                <div className="menu-section">
                    <h2>Contact Us</h2>
                    <p>
                        <span className="icon-container">
                            <img src={locationIcon} alt="Location Icon" className="icon"/>
                        </span> 
                        2272 Erie Ave Ste 219, Cincinnati
                    </p>
                    <p>
                        <span className="icon-container">
                            <img src={phoneIcon} alt="Phone Icon" className="icon"/>
                        </span> 
                        +1 (812) 260-1399
                    </p>
                    <p>
                        <span className="icon-container">
                            <img src={mailIcon} alt="Mail Icon" className="icon"/>
                        </span> 
                        contact@myinspiredigital.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sidemenu;
