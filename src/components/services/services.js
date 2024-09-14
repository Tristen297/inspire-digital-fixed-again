import NavbarAlt from "../navbar/navbar-alt"
import ServicesHero from "./services-hero"
import ServicesCollage from "./services-collage"

function Services() {
    return(
        <div className="services-content">
            <NavbarAlt />
            <ServicesHero />
            <ServicesCollage />
        </div>
    )
}

export default Services