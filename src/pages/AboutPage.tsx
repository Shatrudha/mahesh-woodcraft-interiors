import { Link } from "react-router-dom";
import { CONTACT } from "../config/contact";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  HeartHandshake,
  MessageCircle,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const AboutPage = () => {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <p className="eyebrow">ABOUT US</p>

            <h1>
              Built with experience.
              <span> Finished with care.</span>
            </h1>

            <p className="about-hero-description">
              Mahesh WoodCraft Interiors brings more than 10 years of
              hands-on carpentry experience to custom furniture,
              modular kitchens, wardrobes, TV units and complete
              woodwork solutions.
            </p>

            <div className="about-hero-actions">
              <Link to="/gallery" className="primary-button">
                See Our Work
                <ArrowRight size={18} />
              </Link>

              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <MessageCircle size={19} />
                Discuss Your Project
              </a>
            </div>

            <div className="about-stats">
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
                <span>Custom Work</span>
              </div>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-main-image">
              <img
                src="/images/services/wardrobe.webp"
                alt="Custom wardrobe work by Mahesh WoodCraft Interiors"
              />
            </div>

            <div className="about-small-image">
              <img
                src="/images/services/modular-kitchen.webp"
                alt="Modular kitchen work by Mahesh WoodCraft Interiors"
              />
            </div>

            <div className="about-experience-badge">
              <strong>10+</strong>
              <span>Years of craftsmanship</span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story-section">
        <div className="container about-story-grid">
          <div>
            <p className="eyebrow">OUR STORY</p>

            <h2>
              Practical carpentry backed by years of hands-on experience.
            </h2>
          </div>

          <div className="about-story-copy">
            <p>
              Mahesh has spent more than a decade working directly with
              wood, furniture, storage solutions and home interior
              requirements.
            </p>

            <p>
              That practical experience is the foundation of Mahesh
              WoodCraft Interiors — understanding the available space,
              listening to what the customer actually needs, and building
              solutions that are useful, durable and well finished.
            </p>

            <p>
              Whether it is a modular kitchen, wardrobe, TV unit,
              customised furniture or renovation work, every project is
              approached with the same attention to fitting, usability and
              finishing.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values-section">
        <div className="container">
          <div className="about-section-heading">
            <p className="eyebrow">WHAT MATTERS TO US</p>

            <h2>Good work is more than good-looking furniture.</h2>

            <p>
              We focus on the things that make carpentry useful long after
              installation.
            </p>
          </div>

          <div className="about-values-grid">
            <article className="about-value-card">
              <div className="about-value-icon">
                <Hammer size={25} />
              </div>

              <h3>Experienced Craftsmanship</h3>

              <p>
                More than 10 years of practical experience in carpentry and
                custom woodwork.
              </p>
            </article>

            <article className="about-value-card">
              <div className="about-value-icon">
                <Ruler size={25} />
              </div>

              <h3>Made for Your Space</h3>

              <p>
                Every design is planned according to the room, available
                space and your actual requirement.
              </p>
            </article>

            <article className="about-value-card">
              <div className="about-value-icon">
                <ShieldCheck size={25} />
              </div>

              <h3>Quality-Focused Work</h3>

              <p>
                Attention is given to fitting, materials, usability,
                durability and clean finishing.
              </p>
            </article>

            <article className="about-value-card">
              <div className="about-value-icon">
                <HeartHandshake size={25} />
              </div>

              <h3>Clear Communication</h3>

              <p>
                Requirements are discussed properly so customers understand
                what is being planned and built.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="about-promise-section">
        <div className="container about-promise-grid">
          <div>
            <p className="eyebrow light-eyebrow">OUR APPROACH</p>

            <h2>
              Furniture should fit your home — not the other way around.
            </h2>

            <p>
              We believe custom carpentry should solve real problems:
              better storage, better use of space and furniture that feels
              right for your home.
            </p>
          </div>

          <div className="about-check-list">
            <div>
              <CheckCircle2 />
              <span>Understand your requirement first</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Plan around the available space</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Focus on practical storage and usability</span>
            </div>

            <div>
              <CheckCircle2 />
              <span>Pay attention to fitting and finishing</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-final-cta">
        <div className="container about-final-cta-inner">
          <div>
            <p className="eyebrow">HAVE SOMETHING IN MIND?</p>

            <h2>Tell us what you want to build.</h2>

            <p>
              Send your idea, reference photo or requirement on WhatsApp
              and start a discussion.
            </p>
          </div>

          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="about-whatsapp-button"
          >
            <MessageCircle size={21} />

            <span>
              <small>Talk directly with us</small>
              WhatsApp Us
            </span>

            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;