import "../../styles/home/services-breakdown.css";
import greenCheck from "../../images-and-icons/check-mint.svg";
import savings from "../../images-and-icons/savings.svg";

function ServicesBreakdown() {
    return(
        <div className="services-breakdown-content">
            <div className="services-breakdown-illustration">
                <img src={savings} alt="illustration of  man sitting on a piggy bank" />
            </div>
            <div className="services-breakdown-text-container">
                <div className="services-breakdown-text">
                    <p>
                        THE INSPIRE DIFFERENCE
                    </p>
                    <h1>
                        We Do Things Differently
                    </h1>
                    <p>
                        Most web agencies charge $5K+ upfront, which is unaffordable for many small businesses especially when that website could take months to build. Without a quality website, ranking on Google is nearly impossible. 
                    </p>
                    <p>
                        That's why we offer a better option: a $150 monthly retainer that covers initial development as well as ongoing services which would typically cost extra at a traditional agency. Plus, you can cancel anytime with no hassle if it's not the right fit.
                    </p>
                </div>
                <div className="services-breakdown-specific">
                    <div className="service-1">
                        <img src={greenCheck} alt="check Icon" />
                        <div className="service-text">
                            <h1>
                                Hosting Fees Included
                            </h1>
                            <p>
                                Hosting fees are built right into the monthly payment.
                            </p>
                        </div>
                    </div>
                    <div className="service-1">
                        <img src={greenCheck} alt="check Icon" />
                        <div className="service-text">
                            <h1>
                                Unlimited Edits
                            </h1>
                            <p>
                                Change anything you want at anytime and it will be done that day.
                            </p>
                        </div>
                    </div>
                    <div className="service-1">
                        <img src={greenCheck} alt="check Icon" />
                        <div className="service-text">
                            <h1>
                                World Class Customer Service
                            </h1>
                            <p>
                                Contact us anytime day or night, no phone trees or automated responses.
                            </p>
                        </div>
                    </div>
                    <div className="service-1">
                        <img src={greenCheck} alt="check Icon" />
                        <div className="service-text">
                            <h1>
                                Web Design & Development
                            </h1>
                            <p>
                                Includes over 70 hours of design, development, and testing.
                            </p>
                        </div>
                    </div>
                    <div className="service-1">
                        <img src={greenCheck} alt="check Icon" />
                        <div className="service-text">
                            <h1>
                                90+ Google Page Speed Score
                            </h1>
                            <p>
                                We can achieve a 90 or better (out of 100) Google Page Speed score and boost your search ranking.
                            </p>
                        </div>
                    </div>
                    <div className="service-1">
                        <img src={greenCheck} alt="check Icon" />
                        <div className="service-text">
                            <h1>
                                Google Analytics
                            </h1>
                            <p>
                                We install Analytics for free to monitor traffic and where it comes from.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ServicesBreakdown;