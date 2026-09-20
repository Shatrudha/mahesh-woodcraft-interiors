import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectVideos from "../components/home/ProjectVideos";
import { CONTACT } from "../config/contact";
import {
  ArrowRight,
  BedDouble,
  Hammer,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
  Tv,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Modular Kitchen",
    text: "Custom kitchens designed for better storage, durability and everyday comfort.",
    image: "/images/services/modular-kitchen.webp",
  },
  {
    icon: PanelsTopLeft,
    title: "Wardrobes",
    text: "Sliding, hinged and custom wardrobes designed around your room and storage needs.",
    image: "/images/services/wardrobe.webp",
  },
  {
    icon: Tv,
    title: "TV Units",
    text: "Modern TV panels, cabinets and storage units customised for your living room.",
    image: "/images/services/tv-unit.webp",
  },
  {
    icon: BedDouble,
    title: "Custom Furniture",
    text: "Beds, tables, cabinets and made-to-measure furniture built for your space.",
    image: "/images/services/custom-furniture.webp",
  },
];
  
const HomePage = () => {
    const featuredProjects = projects.filter((project) => project.featured);
    const heroProject = featuredProjects[0] ?? projects[0];
  return (
    <>
      <section className="hero">
  <div className="container hero-grid">
    <div className="hero-content">
      <p className="eyebrow">
        10+ Years of Carpentry Experience
      </p>

      <h1>
        Beautiful Woodwork.
        <span> Built for Your Home.</span>
      </h1>

      <p className="hero-description">
        Custom carpentry, modular kitchens, wardrobes,
        TV units and furniture crafted around your home,
        style and requirements.
      </p>

      <div className="hero-actions">
        <Link to="/gallery" className="primary-button">
          View Our Work
          <ArrowRight size={19} />
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

      <div className="hero-trust">
        <div>
          <strong>10+</strong>
          <span>Years Experience</span>
        </div>

        <div>
          <strong>95+</strong>
          <span>Project Photos</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Custom Made</span>
        </div>
      </div>
    </div>

    {heroProject && (
      <div className="hero-visual">
        <img
          src={heroProject.image}
          alt="Mahesh WoodCraft Interiors completed project"
        />

        <div className="hero-image-badge">
          <strong>10+ Years</strong>
          <span>Craftsmanship Experience</span>
        </div>
      </div>
    )}
  </div>
</section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Carpentry made around your space.</h2>
            <p>
              From complete kitchens to small custom furniture, every project
              is made according to your requirement.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
               <article className="service-card" key={service.title}>
  <div className="service-card-image">
    <img
      src={service.image}
      alt={`${service.title} by Mahesh WoodCraft Interiors`}
      loading="lazy"
    />

    <div className="service-image-icon">
      <Icon size={23} />
    </div>
  </div>

  <div className="service-card-content">
    <h3>{service.title}</h3>

    <p>{service.text}</p>

    <Link to="/gallery" className="service-card-link">
      View Projects
      <ArrowRight size={16} />
    </Link>
  </div>
</article>
              );
            })}
          </div>

          <div className="center-button">
            <Link to="/services" className="text-button">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
<ProjectVideos />

      <section className="section dark-section">
        <div className="container experience-grid">
          <div>
            <p className="eyebrow light-eyebrow">WHY CHOOSE US</p>

         <h2>Craftsmanship you can see in every detail.</h2>

<p>
  With more than 10 years of hands-on carpentry experience,
  Mahesh focuses on practical design, quality workmanship,
  clean finishing and furniture built to last.
</p>

<Link to="/about" className="story-button">
  Know Our Story
  <ArrowRight size={18} />
</Link>
          </div>

          <div className="benefits">
            <div>
              <Hammer />
              <span>
                <strong>Experienced Craftsmanship</strong>
                More than 10 years of hands-on carpentry experience.
              </span>
            </div>

            <div>
              <ShieldCheck />
              <span>
                <strong>Quality-Focused Work</strong>
                Attention to materials, fitting, finishing and durability.
              </span>
            </div>

            <div>
              <Users />
              <span>
                <strong>Made for Your Requirement</strong>
                Every home and customer is different, so the work is customised.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container project-preview">
          <div className="section-heading">
            <p className="eyebrow">OUR WORK</p>
            <h2>Real projects. Real craftsmanship.</h2>
           <p>
  Explore a selection of our completed carpentry and interior projects.
</p>
          </div>

         <div className="featured-project-grid">
  {featuredProjects.map((project) => (
    <Link
      to="/gallery"
      className="featured-project-card"
      key={project.id}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        loading="lazy"
      />

      <div className="featured-project-overlay">
        <span>View Project</span>
      </div>
    </Link>
  ))}
</div>

          <div className="center-button">
            <Link to="/gallery" className="primary-button">
              Explore All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

     <section className="cta-section">
  <div className="container cta-content">
    <div className="cta-copy">
      <p className="eyebrow light-eyebrow">HAVE A PROJECT?</p>

      <h2>
        Let's build something
        <span> made for your space.</span>
      </h2>

      <p>
        Share your requirements, photos or measurements with us on
        WhatsApp. We’ll discuss your idea and help you plan the next step.
      </p>

      <div className="cta-trust">
        <span>✓ Free Discussion</span>
        <span>✓ Custom Quote</span>
        <span>✓ Direct WhatsApp</span>
      </div>
    </div>

    <div className="cta-action">
     <a
  href={CONTACT.whatsappLink}
  target="_blank"
  rel="noreferrer"
  className="cta-whatsapp-button"
>
        <MessageCircle size={22} />
        <span>
          <small>Discuss your project</small>
          WhatsApp Us
        </span>
        <ArrowRight size={19} />
      </a>

      <p>No obligation. Tell us what you need.</p>
    </div>
  </div>
</section>
    </>
  );
};

export default HomePage;