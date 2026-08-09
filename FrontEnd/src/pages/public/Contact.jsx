import { useState } from 'react';
import '../../styles/Public.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Contact Hero */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">
            Get in touch
          </span>

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

      {/* Contact Section */}
      <section>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.8fr 1.2fr',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            {/* Contact Information */}
            <div>
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

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  marginTop: '28px',
                }}
              >
                <div className="card feature-card">
                  <div className="fc-ico">📧</div>
                  <h3>Email</h3>
                  <p>
                    support@cropcareai.com
                  </p>
                </div>

                <div className="card feature-card">
                  <div className="fc-ico">📍</div>
                  <h3>Location</h3>
                  <p>
                    CropCare AI Agriculture Technology Team
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600,
                      }}
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--color-card)',
                        color: 'var(--color-text)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600,
                      }}
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--color-card)',
                        color: 'var(--color-text)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: 600,
                      }}
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="How can we help you?"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--color-card)',
                        color: 'var(--color-text)',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Send message
                  </button>

                  {submitted && (
                    <p
                      style={{
                        color: 'var(--color-success)',
                        fontWeight: 600,
                      }}
                    >
                      Your message has been submitted.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}