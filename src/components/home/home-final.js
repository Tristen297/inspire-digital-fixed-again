import "../../styles/home/home-final.css";
import homeImg from "../../images-and-icons/home-final-img.png";
import homeIcon from "../../images-and-icons/home-final-icon.svg";
import { Link } from 'react-router-dom';

function HomeFinal() {
    return(
        <div className="home-final-content">
            <div className="home-final-text">
                <p>
                    HAVE YOUR PROJECT IN MIND?
                </p>
                <h1>
                    Let's make something <br /> great together!
                </h1>
            </div>
            <div className="home-final-abs-text">
                <h1>
                    GET STARTED
                </h1>
            </div>
            <div className="home-final-picture">
                <img src={homeImg} alt="two men working together & looking at a paper" />
            </div>
            <div className="home-final-icon">
                <Link to="/contact-us">
                    <img src={homeIcon} alt="" />  
                </Link> 
            </div>
        </div>
    )
}

export default HomeFinal;