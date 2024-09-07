import "../../styles/footer/footer.css";
import footerShape from "../../images-and-icons/footer-shape.png";
import inspireIcon from "../../images-and-icons/inspire-icon.png";
import fbIcon from "../../images-and-icons/social-fb-white.svg";
import twitterIcon from "../../images-and-icons/social-twitter-white.svg";
import instaIcon from "../../images-and-icons/social-insta-white.svg";

function Footer() {
    return(
        <div className="footer-content">
            <div className="footer-bg-shape">
                <img src={footerShape} alt="" />
            </div>
            <div className="logo-social">
                <img src={inspireIcon} alt="icon for inspire digital" className="logo-icon" />
                <h1 className="logo-text">
                    Inspire Digital
                </h1>
                <div className="social-icons">
                    <a href="./"><img src={fbIcon} alt="facebook icon" /> </a>
                    <a href="./"><img src={twitterIcon} alt="twitter/X icon" /></a>
                    <a href="./"><img src={instaIcon} alt="instagram icon" /></a>
                </div>
            </div>
            <div className="footer-main">
                <div className="main-company-col">
                    <h1 className="company-col-title">
                        Company
                    </h1>
                    <a href="./">Home</a>
                    <a href="./">About Us</a>
                    <a href="./">Services</a>
                    <a href="./">Contact Us</a>
                </div>
                <div className="working-hours-col">
                    <h1 className="hours-col-title">
                        Working Time
                    </h1>
                    <p>
                        Mon-Fri: 9:00AM-5:00PM EST
                    </p>
                    <p>
                        Saturday & Sunday: Closed
                    </p>
                </div>
                <div className="contact-us-col">
                    <h1 className="contact-col-title">
                        Contact Us
                    </h1>
                    <p>
                        contact@myinspiredigital.com
                    </p>
                    <p>
                        (812) 260-1399
                    </p>
                    <p>
                        2272 Erie Ave Ste 219,<br />
                        Cincinnati, OH
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;