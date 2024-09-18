import "../../styles/about-us/about-us.css";
import NavbarAlt from "../navbar/navbar-alt"
import AboutUsHero from "./about-us-hero";
import AboutUsIntro from "./about-us-intro";
import AboutUsQuality from "./about-us-quality";
import AboutusNumbers from "./about-us-numbers";
import HomeFinal from "../home/home-final";

function AboutUs() {
    return(
        <div className="about-us-content">
            <NavbarAlt />
            <AboutUsHero />
            <AboutUsIntro />
            <AboutUsQuality />
            <AboutusNumbers />
            <HomeFinal />
        </div>
    )
}

export default AboutUs;