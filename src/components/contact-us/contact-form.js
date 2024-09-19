import "../../styles/contact-us/contact-form.css";
import contactIll from "../../images-and-icons/contact-ill.svg";

function ContactForm() {
    return (
        <div className="contact-form-content">
            <h1><span className="highlight-text">Drop</span> Us a Line</h1>
            <div className="contact-form-body">
                <div className="ill-text">
                    <img src={contactIll} alt="svg of a stylized lady standing next to a giant phone" className="contact-ill-1" />
                    <div className="contact-sec">
                        <h3>
                            Email:
                        </h3>
                        <h6>
                            contact@myinspiredigital.com
                        </h6>
                    </div>
                    <div className="contact-sec">
                        <h3>
                            Phone:
                        </h3>
                        <h6>
                            (812) 260-1399
                        </h6>
                    </div>
                </div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe3v1imlh9M4ZK0YTHwR3EBRrYr-WLXxUnzFY9C4jM2PcsG2g/viewform?usp=sf_link"
                    title="Contact Form"
                    className="contact-form-iframe"
                >
                    Please wait while the form loads…
                </iframe>
            </div>
        </div>
    );
}

export default ContactForm;
