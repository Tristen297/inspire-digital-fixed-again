import "../../styles/services/services-collage.css";
import TransitionComp1 from "./transition-comp-1";
import servicesImg1 from "../../images-and-icons/services-ill-8.svg";
import servicesImg2 from "../../images-and-icons/services-ill-5.svg";
import servicesImg3 from "../../images-and-icons/services-ill-6.svg";
import checkMark from "../../images-and-icons/check-mint.svg"

function ServicesCollage() {
    return( 
        <div className="services-collage-content">
            <div className="services-sec-1">
                <img src={servicesImg1} alt="" className="services-ill-1" />
                <div className="services-text-1">
                    <h1>
                        Web Design & Development <br /> 
                        <span className="highlight-text">Done Differently</span>
                    </h1>
                    <p className="p-1">
                        What makes us unique in the development world is that we don't use WordPress, frameworks, or page builders. We meticulously write the code line by line. This gives us much more control over the design, and the website performs lightning fast because there's no bloated or messy code that slows it down.
                    </p>
                    <p className="p-2">
                        Websites built by hand <span className="purple-text">will out-perform WordPress sites</span> and drag and drop page builders. When it comes to the web, the faster and more organized websites win and rank higher on browsers like google.
                    </p>
                </div>
            </div>
            <TransitionComp1 />
            <div className="services-sec-2">
                <div className="services-text-2">
                    <h1>
                        Search Engine Optimization For 2021
                    </h1>
                    <p>
                        If someone tells you they can get you to the front page of Google in 3 months - RUN! Unless your website was featured by The New York Times it could take years to rank in the top of the search results.
                    </p>
                    <p>
                        We offer a number of the latest search engine optimization techniques for 2021:
                    </p>
                    <div className="sec-2-list">
                        <div className="services-line-item">
                            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon" />
                            <p>
                                Keyword-Centered Content & Blogs
                            </p>
                        </div>
                        <div className="services-line-item">
                            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon" /> 
                            <p>
                                Mobile-First-Optimized for the Best Experience    
                            </p>  
                        </div>
                        <div className="services-line-item">
                            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon" />
                            <p>
                                Clean & Organized Code Structure For Web Crawlers    
                            </p> 
                        </div>
                        <div className="services-line-item">
                            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon" />
                            <p>
                                Fully Responsive For Mobile, Tablet, & Desktop    
                            </p> 
                        </div>
                    </div>
                </div>
                <img src={servicesImg2} alt="" className="services-ill-2" />
            </div>
            <div className="services-sec-3">
                <img src={servicesImg3} alt="" className="services-ill-3" />
                <div className="services-text-3">
                    <h1>
                        Logos, Graphic Design, & Branding
                    </h1>
                    <p>
                        We also offer logo and graphic design services via our own in-house graphic designer. If you have an existing logo that needs a touch up or need a completely new one we can help build your business's brand.
                    </p>
                    <div className="services-line-item-sec-3">
                        <img src={checkMark} alt="svg of a check mark" className="check-mark-icon-2" />
                        <h5>
                            Logos Starting at $350
                        </h5>
                        <p>
                            Rates may increase based on complexity, number of hours, and number of revisions
                        </p>
                    </div>
                    <div className="services-line-item-sec-3">
                        <img src={checkMark} alt="svg of a check mark" className="check-mark-icon-2" />
                        <h5>
                            Social Media Graphics
                        </h5>
                        <p>
                            Make a post that stands out with its own custom graphics. Give us a call for plans and rates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCollage;