import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";import { CONTACT } from "../../config/contact";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Mahesh WoodCraft Interiors</h3>

          <p>
            Professional carpentry, modular kitchens, wardrobes and custom
            furniture backed by 10+ years of hands-on experience.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Our Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

<div>
  <h4>Get In Touch</h4>

  <a
    href={`tel:${CONTACT.phoneTel}`}
    className="footer-contact footer-contact-link"
  >
    <Phone size={17} />

    <span>
      <small>Call us</small>
      {CONTACT.phoneDisplay}
    </span>
  </a>

  <a
    href={CONTACT.whatsappLink}
    target="_blank"
    rel="noreferrer"
    className="footer-contact footer-contact-link"
  >
    <MessageCircle size={17} />

    <span>
      <small>WhatsApp</small>
      Discuss your project
    </span>
  </a>

  <a
    href={`mailto:${CONTACT.email}`}
    className="footer-contact footer-contact-link"
  >
    <Mail size={17} />

    <span>
      <small>Email</small>
      {CONTACT.email}
    </span>
  </a>

  <div className="footer-contact">
    <MapPin size={17} />

    <span>
      <small>Service</small>
      Residential & commercial carpentry
    </span>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mahesh WoodCraft Interiors. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;