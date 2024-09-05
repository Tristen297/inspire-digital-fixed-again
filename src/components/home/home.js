import Hero from "./hero";
import ServicesSection from "./services-section";
import AboutSection from "./about-us";
import ServicesBreakdown from "./services-breakdown";

function Home() {
    return(
        <div className="home-content">
            <Hero />
            <ServicesSection />
            <AboutSection />
            <ServicesBreakdown />
        </div>
    )
}

export default Home;