import "../../styles/home/about-us.css";
import brain from "../../images-and-icons/brain-icon.svg";
import tools from "../../images-and-icons/tools-icon.svg";
import aboutImg1 from "../../images-and-icons/about-img1.jpg";
import aboutImg2 from "../../images-and-icons/about-img3.jpg";
import aboutShape from "../../images-and-icons/about-shape-2.png"

function AboutSection() {
    return (
        <div className="about-section-content">
            <div className="about-us-images">
                <img src={aboutShape} alt="geometric shape" className="about-img-3" />
                <img src={aboutImg1} alt="man and woman talking to someone off camera" className="about-img-1" />
                <img src={aboutImg2} alt="team crowded around a desk working together on something" className="about-img-2" />
            </div>
            <div className="about-us-left">
                <p className="about-heading">ABOUT OUR COMPANY</p>
                <h1 className="about-title">
                    We craft websites and digital experiences that help brands thrive online.
                </h1>
                <p className="about-description">
                    Our team builds custom websites that engage your audience and boost growth. From sleek designs to robust development, we help your brand thrive with modern, tailored solutions.
                </p>
                <div className="about-icons">
                    <div className="icon-item">
                        <img src={brain} alt="Creative Team" />
                        <p>Professional Creative Team Members</p>
                    </div>
                    <div className="icon-item">
                        <img src={tools} alt="Market Service" />
                        <p>Provide Market Standard Service to Clients</p>
                    </div>
                </div>
                <button className="about-button">Get Started Now</button>
            </div>
        </div>
    );
}

export default AboutSection;
