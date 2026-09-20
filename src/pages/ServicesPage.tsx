import { Link } from "react-router-dom";
import { CONTACT } from "../config/contact";
import {
  ArrowRight,
  BedDouble,
  Boxes,
  Building2,
  DoorOpen,
  Hammer,
  Home,
  MessageCircle,
  PanelsTopLeft,
  Ruler,
  Tv,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

const mainServices = [
  {
    title: "Modular Kitchen",
    description:
      "Custom kitchens designed around your available space, storage requirements and everyday use.",
    image: "/images/services/modular-kitchen.webp",
    icon: UtensilsCrossed,
  },
  {
    title: "Wardrobes",
    description:
      "Sliding, hinged and custom wardrobes designed for better storage and a clean bedroom finish.",
    image: "/images/services/wardrobe.webp",
    icon: PanelsTopLeft,
  },
  {
    title: "TV Units",
    description:
      "Modern TV panels, cabinets and storage solutions customised for your living room.",
    image: "/images/services/tv-unit.webp",
    icon: Tv,
  },
  {
    title: "Custom Furniture",
    description:
      "Beds, tables, cabinets and made-to-measure furniture built according to your requirement.",
    image: "/images/services/custom-furniture.webp",
    icon: BedDouble,
  },
];

const moreServices = [
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    text: "Wooden doors, frames, partitions and customised window work.",
  },
  {
    icon: Home,
    title: "Pooja Units",
    text: "Custom-designed pooja units and temple spaces for your home.",
  },
  {
    icon: Boxes,
    title: "Storage & Loft Work",
    text: "Practical lofts, cabinets and storage solutions for unused spaces.",
  },
  {
    icon: Building2,
    title: "Office & Shop Woodwork",
    text: "Counters, storage, workstations and commercial carpentry solutions.",
  },
  {
    icon: Wrench,
    title: "Repair & Renovation",
    text: "Furniture repair, modifications and upgrades to existing woodwork.",
  },
  {
    icon: Hammer,
    title: "Full Home Carpentry",
    text: "Coordinated carpentry work for multiple rooms and complete homes.",
  },
];

const ServicesPage = () => {
  return (
    <>
      <section className="services-page-hero">
        <div className="container services-page-hero-inner">
          <div>
            <p className="eyebrow">OUR SERVICES</p>

            <h1>
              Carpentry designed around
              <span> your space and lifestyle.</span>
            </h1>

            <p className="services-page-intro">
              From modular kitchens and wardrobes to custom furniture and
              complete home woodwork, every project is planned around your
              requirement.
            </p>

            <div className="services-page-actions">
              <Link to="/gallery" className="primary-button">
                View Our Work
                <ArrowRight size={18} />
              </Link>

              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <MessageCircle size={19} />
                Free Estimate
              </a>
            </div>
          </div>

          <div className="services-hero-badge">
            <strong>10+</strong>
            <span>Years of hands-on carpentry experience</span>
          </div>
        </div>
      </section>

      <section className="services-main-section">
        <div className="container">
          <div className="services-page-heading">
            <p className="eyebrow">POPULAR SERVICES</p>

            <h2>Built to fit your home.</h2>

            <p>
              Explore some of our most requested carpentry and interior
              services.
            </p>
          </div>

          <div className="services-photo-grid">
            {mainServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="services-photo-card"
                  key={service.title}
                >
                  <div className="services-photo">
                    <img
                      src={service.image}
                      alt={`${service.title} by Mahesh WoodCraft Interiors`}
                      loading="lazy"
                    />

                    <div className="services-photo-icon">
                      <Icon size={24} />
                    </div>
                  </div>

                  <div className="services-photo-content">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <Link to="/gallery" className="services-view-link">
                      View Projects
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="more-services-section">
        <div className="container">
          <div className="services-page-heading">
            <p className="eyebrow">MORE SERVICES</p>

            <h2>More ways we can help.</h2>

            <p>
              Custom solutions for homes, offices, shops and renovation
              projects.
            </p>
          </div>

          <div className="more-services-grid">
            {moreServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="more-service-card"
                  key={service.title}
                >
                  <div className="more-service-icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="work-process-section">
        <div className="container">
          <div className="services-page-heading light-heading">
            <p className="eyebrow light-eyebrow">HOW WE WORK</p>

            <h2>Simple from idea to installation.</h2>
          </div>

          <div className="work-process-grid">
            <div className="process-card">
              <span>01</span>
              <MessageCircle size={26} />
              <h3>Tell Us Your Requirement</h3>
              <p>
                Share your idea, photos, measurements or the type of work you
                need.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <Ruler size={26} />
              <h3>Planning & Estimate</h3>
              <p>
                We understand the space, material requirement and provide a
                suitable estimate.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <Hammer size={26} />
              <h3>Build & Finish</h3>
              <p>
                The work is completed with attention to fitting, usability and
                clean finishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-final-cta">
        <div className="container services-final-cta-inner">
          <div>
            <p className="eyebrow">NEED SOMETHING CUSTOM?</p>

            <h2>Have a design or idea in mind?</h2>

            <p>
              Send us a photo or explain what you want. We’ll help you plan the
              carpentry according to your space.
            </p>
          </div>

          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="services-whatsapp-cta"
          >
            <MessageCircle size={21} />

            <span>
              <small>Start a conversation</small>
              WhatsApp Us
            </span>

            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;