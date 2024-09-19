import "../../styles/footer/footer.css";
import footerShape from "../../images-and-icons/footer-shape.png";
import inspireIcon from "../../images-and-icons/inspire-icon.png";
import fbIcon from "../../images-and-icons/social-fb-white.svg";
import twitterIcon from "../../images-and-icons/social-twitter-white.svg";
import instaIcon from "../../images-and-icons/social-insta-white.svg";
import { Link } from 'react-router-dom'; // Import Link for internal routing

function Footer() {
    return (
        <div className="footer-content">
            <div className="footer-bg-shape">
                <img src={footerShape} alt="" />
            </div>
            <div className="logo-social">
                <img src={inspireIcon} alt="icon for inspire digital" className="logo-icon" />
                <h1 className="logo-text">Inspire Digital</h1>
                <div className="social-icons">
                    <a href="https://facebook.com"><img src={fbIcon} alt="facebook icon" /></a>
                    <a href="https://twitter.com"><img src={twitterIcon} alt="twitter/X icon" /></a>
                    <a href="https://instagram.com"><img src={instaIcon} alt="instagram icon" /></a>
                </div>
            </div>
            <div className="footer-main">
                <div className="main-company-col">
                    <h1 className="company-col-title">Company</h1>
                    <Link to="/">Home</Link> {/* Link to Home page */}
                    <Link to="/services">Services</Link> {/* Link to Services page */}
                    <Link to="/about-us">About Us</Link> {/* Example route for About Us */}
                    <Link to="/contact-us">Contact Us</Link> {/* Example route for Contact Us */}
                </div>
                <div className="working-hours-col">
                    <h1 className="hours-col-title">Working Times</h1>
                    <p>Mon-Fri: 9:00AM-5:00PM EST</p>
                    <p>Saturday & Sunday: Closed</p>
                </div>
                <div className="contact-us-col">
                    <h1 className="contact-col-title">Contact Us</h1>
                    <p>contact@myinspiredigital.com</p>
                    <p>(812) 260-1399</p>
                    <p>2272 Erie Ave Ste 219,<br /> Cincinnati, OH</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
