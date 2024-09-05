import "../../styles/home/services-section.css";
import pen from "../../images-and-icons/pen-icon.svg";
import webpage from "../../images-and-icons/webpage-icon.svg";
import IT from "../../images-and-icons/it-webpage-icon.svg";
import phone from "../../images-and-icons/mobile-phone-icon.svg";

function ServicesSection() {
    return (
        <div className="services-section-content">
            <div className="services-section-text">
                <p>WHAT WE OFFER YOU</p>
                <h1>Services We Provide</h1>
            </div>
            <div className="service-section-boxes">
                <div className="box-1">
                    <img className="service-icon" src={pen} alt="Icon 1" />
                </div>
                <div className="box-2">
                    <img className="service-icon" src={webpage} alt="Icon 2" />
                </div>
                <div className="box-3">
                    <img className="service-icon" src={IT} alt="Icon 3" />
                </div>
                <div className="box-4">
                    <img className="service-icon" src={phone} alt="Icon 4" />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
