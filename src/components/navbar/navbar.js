import "../../styles/navbar/navbar.css";
import Sidemenu from "./sidemenu";
import logoIcon from "../../images-and-icons/inspire-icon.png";

function Navbar() {
    return(
        <div className="navbar-content">
            <div className="sidemenu-container">
                <Sidemenu />
            </div>
            <div className="main-nav-content">
                <div className="nav-logo-full">
                    <img src={logoIcon} alt="Logo" className="menu-logo" />
                    <h1>Inspire Digital</h1>
                </div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
