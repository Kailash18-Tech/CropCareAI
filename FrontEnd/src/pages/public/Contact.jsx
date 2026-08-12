import { useState } from "react";
import "../../styles/Public.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* ================================
          CONTACT HERO
      ================================= */}

      <section className="hero">
        <div className="wrap">
          <span className="kicker">Get in touch</span>

          <h1 className="hero-h">
            We're here to help.
          </h1>

          <p className="hero-sub">
            Have a question about CropCare AI, need help
            with the platform, or want to work with us?
            Send us a message.
          </p>
        </div>
      </section>

      {/* ================================
          CONTACT SECTION
      ================================= */}

      <section className="contact-section">
        <div className="wrap">

          <div className="contact-grid">

            {/* ==========================
                CONTACT INFORMATION
            =========================== */}

            <div className="contact-info">

              <span className="kicker">
                Contact us
              </span>

              <h2 className="section-title">
                Let's talk
              </h2>

              <p className="section-desc">
                Whether you're a farmer, district officer,
                administrator, or simply want to learn more
                about CropCare AI, we'd love to hear from you.
              </p>

              <div className="contact-info-cards">

                {/* Email */}

                <div className="card feature-card contact-info-card">

                  <div className="fc-ico">
                    📧
                  </div>

                  <h3>
                    Email
                  </h3>

                  <p>
                    support@cropcareai.com
                  </p>

                </div>

                {/* Location */}

                <div className="card feature-card contact-info-card">

                  <div className="fc-ico">
                    📍
                  </div>

                  <h3>
                    Location
                  </h3>

                  <p>
                    CropCare AI Agriculture Technology Team
                  </p>

                </div>

              </div>
            </div>

            {/* ==========================
                CONTACT FORM
            =========================== */}

            <div className="card contact-form-card">

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Name */}

                <div className="contact-form-group">

                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>

                {/* Email */}

                <div className="contact-form-group">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

                {/* Message */}

                <div className="contact-form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="How can we help you?"
                    required
                  />

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="btn btn-primary contact-submit-btn"
                >
                  Send message
                </button>

                {/* Success Message */}

                {submitted && (
                  <p className="contact-success">
                    Your message has been submitted.
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}