import "../../styles/services/lifetime-updates.css";
import update from "../../images-and-icons/update-icon.svg";
import weelchair from "../../images-and-icons/handicp-icon.svg";
import search from "../../images-and-icons/search-icon.svg";
import google from "../../images-and-icons/google-icon.svg";
import { Link } from 'react-router-dom'; 

function LifetimeUpdates() {
    return(
        <div className="lifetime-updates-content">
            <div className="text-section">
                <h1>
                    Lifetime Updates For Your <span className="highlight-text">Website</span>
                </h1>
                <p>
                    Google changes its search alogrithm standards every so often, changing what is important to rank. And web accessibility guidelines for users with screen readers get updated as well. So we also include <span className="highlight-text">lifetime updates</span> to your website to make sure it never goes out of date and is always changing with the times.
                </p>
                <Link to="/contact-us">
                    <button className="about-button">
                        Get Started Now
                    </button>
                </Link> 
            </div>
            <div className="square-section">
                <div className="square-content">
                    <img src={update} alt="svg of update icon" />
                    <h1>
                        Design Updates
                    </h1>
                    <p>
                        If you ever want a new design, we will rebuild your website at no extra cost.
                    </p>
                </div>
                <div className="square-content">
                    <img src={weelchair} alt="svg of weelchair icon" />
                    <h1>
                        Web Accessibility
                    </h1>
                    <p>
                        Staying on top of the latest guidelines for web accessibility compliance.
                    </p>
                </div>
                <div className="square-content">
                <img src={search} alt="svg of eyeglass icon" />
                    <h1>
                        Search Engine Updates
                    </h1>
                    <p>
                        Your website will stay up to date with Google's search guidelines for ranking.
                    </p>
                </div>
                <div className="square-content">
                <img src={google} alt="svg of google icon" />
                    <h1>
                        Google Business Profile
                    </h1>
                    <p>
                        We also help optimize and manage your Google Business Profile
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LifetimeUpdates;