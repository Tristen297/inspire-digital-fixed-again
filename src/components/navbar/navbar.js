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
                    <a href="./">Home</a>
                    <a href="./">Services</a>
                    <a href="./">About Us</a>
                    <a href="./">Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
