import "../../styles/home/hero.css";
import heroPic from "../../images-and-icons/man-on-computer.png";

function Hero() {
    return (
        <div className="hero-content">
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="hero-picture">
                <h1 className="hero-text">
                    <span className="outline-letter">C</span>REATIVE
                </h1>
                <h2 className="agency-text">AGENCY</h2>
                <img src={heroPic} alt="man working on computer" />
            </div>
            <div className="hero-content-text">
                <p className="welcome-text">WELCOME TO OUR AGENCY</p>
                <h1 className="main-heading">Digital Creative <br /> Studio</h1>
                <p className="description">Over 15 years in the game & build successful, profitable products.</p>
                <button className="cta-button">Get Started Now</button>
            </div>
        </div>
    );
}

export default Hero;
