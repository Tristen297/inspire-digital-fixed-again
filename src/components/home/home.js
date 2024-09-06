import Hero from "./hero";
import ServicesSection from "./services-section";
import AboutSection from "./about-us";
import ServicesBreakdown from "./services-breakdown";
import HomeFinal from "./home-final";

function Home() {
    return(
        <div className="home-content">
            <Hero />
            <ServicesSection />
            <AboutSection />
            <ServicesBreakdown />
            <HomeFinal />
        </div>
    )
}

export default Home;