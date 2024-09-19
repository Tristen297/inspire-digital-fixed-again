import "../../styles/contact-us/contact-us.css";
import NavbarAlt from "../navbar/navbar-alt";
import ContactForm from "./contact-form";


function ContactUs() {
    return(
        <div className="contact-us-content">
            <NavbarAlt />
            <ContactForm />
        </div>
    )
}

export default ContactUs;