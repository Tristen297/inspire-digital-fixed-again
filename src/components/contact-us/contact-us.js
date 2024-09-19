import "../../styles/contact-us/contact-us.css";
import NavbarAlt from "../navbar/navbar-alt";
import ContactForm from "./contact-form";
import Footer from "../footer/footer";

function ContactUs() {
    return(
        <div className="contact-us-content">
            <NavbarAlt />
            <ContactForm />
        </div>
    )
}

export default ContactUs;