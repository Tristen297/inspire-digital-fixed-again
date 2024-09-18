import "../../styles/about-us/about-us-intro.css";
import manCoffee from "../../images-and-icons/man-coffee.jpg"

function AboutUsIntro() {
    return(
        <div className="about-us-intro-content">
            <img src={manCoffee} alt="man drinking coffee at a park bench" className="about-us-intro-img" />
            <div className="about-us-intro-text">
                <p className="about-us-subtitle">
                    Inspire Digital Web Design & Development
                </p>
                <h1>
                    Giving Small Businesses The <span className="highlight-text">Big Business Treatment</span>
                </h1>
                <p className="about-us-intro-main">
                    At Inspire Digital, we specialize in providing high-quality web design and development services tailored specifically to small businesses. We focus on creating custom, handcrafted websites that help our clients establish a strong online presence. Our goal is to offer reliable, personalized solutions that meet the unique needs of each business, ensuring a trustworthy and professional experience every step of the way.
                </p>
                <p className="about-us-intro-main-2">
                    What we found is that many small businesses don't have the budget to spend thousands of dollars upfront on a new website. And those who did often got taken advantage of, ending up with a poorly designed website that looks outdated and doesn’t reflect modern trends. They were stuck in a difficult position — either unable to afford a quality website, or unsure of who to trust to create something great. So, we adjusted our business model to meet their needs. That's how we developed our $150 a month plan, which is much more manageable for small businesses and won't strain their finances. 
                </p>
            </div>
        </div>
    )
}

export default AboutUsIntro;