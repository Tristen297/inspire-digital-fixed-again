import NavbarAlt from "../navbar/navbar-alt"
import ServicesHero from "./services-hero"
import ServicesCollage from "./services-collage"
import HomeFinal from "../home/home-final"
import LifetimeUpdates from "./lifetime-updates"

function Services() {
    return(
        <div className="services-content">
            <NavbarAlt />
            <ServicesHero />
            <ServicesCollage />
            <LifetimeUpdates />
            <HomeFinal />
        </div>
    )
}

export default Services