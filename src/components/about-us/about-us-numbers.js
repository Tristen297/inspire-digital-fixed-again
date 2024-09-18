import "../../styles/about-us/about-us-numbers.css";

function AboutusNumbers() {
    return(
        <div className="about-us-numbers-content">
            <div className="number-section">
                <h1 className="number">1</h1>
                <h1 className="title">
                    No Pre-Written Content
                </h1>
                <p className="number-subtext">
                    We write unique and engaging content around your company. Everyone is unique!
                </p>
            </div>
            <div className="number-section">
                <h1 className="number">2</h1>
                <h1 className="title">
                    Unbeatable Customer Service
                </h1>
                <p className="number-subtext">
                    No automated systems - When you need help the lead developer answers your call.
                </p>
            </div>
            <div className="number-section">
                <h1 className="number">3</h1>
                <h1 className="title">
                    No Limits On Design
                </h1>
                <p className="number-subtext">
                    We can edit the design to cater to your tastes. Everything is customizable!
                </p>
            </div>
            <button className="cta-button">Get Started Now</button>
        </div>
    )
}

export default AboutusNumbers;