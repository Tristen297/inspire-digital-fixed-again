import Hero from "./hero";
import ServicesSection from "./services-section";
import AboutSection from "./about-us";

function Home() {
    return(
        <div className="home-content">
            <Hero />
            <ServicesSection />
            <AboutSection />
        </div>
    )
}

export default Home;