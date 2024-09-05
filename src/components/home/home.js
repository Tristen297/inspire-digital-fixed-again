import Hero from "./hero";
import ServicesSection from "./services-section";

function Home() {
    return(
        <div className="home-content">
            <Hero />
            <ServicesSection />
        </div>
    )
}

export default Home;