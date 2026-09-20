import { useState, type FormEvent } from "react";
import { CONTACT } from "../config/contact";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";


const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Mahesh WoodCraft Interiors,

I would like to discuss a carpentry project.

Name: ${name}
Phone: ${phone}
Service: ${service || "Not selected"}

Requirement:
${message || "I would like to discuss my requirement."}
    `.trim();

    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>
            Have a project in mind?
            <span> Let’s talk about it.</span>
          </h1>

          <p>
            Tell us what you want to build, share your reference photos or
            explain your requirement. We’ll help you plan the next step.
          </p>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-main-section">
        <div className="container contact-main-grid">
          {/* LEFT SIDE */}
          <div className="contact-info-side">
            <p className="eyebrow">CONTACT US</p>

            <h2>Start with a simple conversation.</h2>

            <p className="contact-intro">
              Whether you need a modular kitchen, wardrobe, TV unit,
              furniture or complete carpentry work, send us your requirement
              and we’ll discuss it with you.
            </p>

            <div className="contact-methods">
            <a
  href={`tel:${CONTACT.phoneTel}`}
  className="contact-method-card"
>
                <div className="contact-method-icon">
                  <Phone size={23} />
                </div>

                <div>
                  <small>CALL US</small>
                  <strong>{CONTACT.phoneDisplay}</strong>
                  <span>Tap to call directly</span>
                </div>

                <ArrowRight size={18} />
              </a>

             <a
  href={CONTACT.whatsappLink}
  target="_blank"
  rel="noreferrer"
  className="contact-method-card"
>
  <a
  href={`mailto:${CONTACT.email}`}
  className="contact-method-card"
>  
  <div className="contact-method-icon">
    <Mail size={23} />
  </div>

  <div>
    <small>EMAIL</small>
    <strong>{CONTACT.email}</strong>
    <span>Send your project enquiry</span>
  </div>

  <ArrowRight size={18} />
</a>
                <div className="contact-method-icon whatsapp-icon">
                  <MessageCircle size={23} />
                </div>

                <div>
                  <small>WHATSAPP</small>
                  <strong>Discuss your project</strong>
                  <span>Send photos and requirements</span>
                </div>

                <ArrowRight size={18} />
              </a>
            </div>

            <div className="contact-extra-info">
              <div>
                <MapPin size={20} />

                <span>
                  <strong>Service Area</strong>
                  Carpentry projects based on location and requirement
                </span>
              </div>

              <div>
                <Clock3 size={20} />

                <span>
                  <strong>Enquiries</strong>
                  Call or WhatsApp to discuss availability
                </span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <p className="eyebrow">FREE PROJECT DISCUSSION</p>

              <h2>Tell us what you need.</h2>

              <p>
                Fill in the details below and we’ll open your enquiry directly
                in WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Your Name *</label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">Phone Number *</label>

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="service">
                  What service do you need?
                </label>

                <select
                  id="service"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                >
                  <option value="">Select a service</option>
                  <option value="Modular Kitchen">
                    Modular Kitchen
                  </option>
                  <option value="Wardrobe">Wardrobe</option>
                  <option value="TV Unit">TV Unit</option>
                  <option value="Custom Furniture">
                    Custom Furniture
                  </option>
                  <option value="Pooja Unit">Pooja Unit</option>
                  <option value="Doors & Windows">
                    Doors & Windows
                  </option>
                  <option value="Office / Shop Woodwork">
                    Office / Shop Woodwork
                  </option>
                  <option value="Repair / Renovation">
                    Repair / Renovation
                  </option>
                  <option value="Full Home Carpentry">
                    Full Home Carpentry
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="message">
                  Tell us about your requirement
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Example: I need a modular kitchen for my home..."
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="contact-submit-button"
              >
                <MessageCircle size={20} />

                Send Enquiry on WhatsApp

                <Send size={17} />
              </button>

              <p className="contact-form-note">
                No payment required. This will only open WhatsApp with
                your enquiry details.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SMALL TRUST SECTION */}
      <section className="contact-trust-section">
        <div className="container contact-trust-grid">
          <div>
            <strong>01</strong>
            <span>
              <b>Share Your Requirement</b>
              Tell us what you want or send reference photos.
            </span>
          </div>

          <div>
            <strong>02</strong>
            <span>
              <b>Discuss the Project</b>
              We understand your space and requirements.
            </span>
          </div>

          <div>
            <strong>03</strong>
            <span>
              <b>Plan the Next Step</b>
              Move ahead based on project scope and availability.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;