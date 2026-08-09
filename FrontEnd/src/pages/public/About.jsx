import { Link } from 'react-router-dom';
import '../../styles/Public.css';

const values = [
  {
    icon: '🌱',
    title: 'Farmer First',
    description:
      'Every feature is designed around the real needs of farmers, from crop diagnosis to market information.',
  },
  {
    icon: '🤖',
    title: 'AI Powered',
    description:
      'Artificial intelligence helps turn complex agricultural information into simple, useful decisions.',
  },
  {
    icon: '📊',
    title: 'Data Driven',
    description:
      'We combine trusted agricultural data with intelligent tools to provide practical insights.',
  },
];

const platformFeatures = [
  {
    icon: '🩺',
    title: 'Crop Disease Detection',
    description:
      'AI-powered crop analysis helps farmers identify possible diseases and understand recommended treatments.',
  },
  {
    icon: '📈',
    title: 'Market Intelligence',
    description:
      'Access mandi price information to help farmers make better decisions about where and when to sell.',
  },
  {
    icon: '☁️',
    title: 'Weather Insights',
    description:
      'Weather information and forecasts help farmers plan irrigation and other field activities.',
  },
];

export default function About() {
  return (
    <main>
      {/* About Hero */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">
            About CropCare AI
          </span>

          <h1 className="hero-h">
            Technology built for
            <br />
            smarter agriculture.
          </h1>

          <p className="hero-sub">
            CropCare AI brings artificial intelligence,
            agricultural data, and practical tools together
            to help farmers make better decisions and help
            agriculture teams manage their districts more
            effectively.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">
              Our mission
            </span>

            <h2 className="section-title">
              Making agricultural technology accessible
            </h2>

            <p className="section-desc">
              Farmers shouldn't need to be technology experts
              to benefit from modern agricultural intelligence.
              CropCare AI is designed to turn complicated
              information into simple, actionable insights.
            </p>
          </div>

          <div className="feature-grid">
            {values.map((value) => (
              <div
                className="card feature-card"
                key={value.title}
              >
                <div className="fc-ico">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="kicker">
                One connected platform
              </span>

              <h2 className="section-title">
                From the field to the district office
              </h2>

              <p className="section-desc">
                CropCare AI connects farmers, district
                officers, and administrators through one
                unified platform.
              </p>

              <p className="section-desc">
                Farmers get tools for their everyday
                agricultural needs. District officers can
                monitor and support farmers in their region.
                Administrators get the controls needed to
                manage the wider platform.
              </p>
            </div>

            <div className="hero-visual">
              <svg
                viewBox="0 0 480 360"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
              >
                <defs>
                  <linearGradient
                    id="aboutGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2E6B4F"
                    />

                    <stop
                      offset="100%"
                      stopColor="#0F2A20"
                    />
                  </linearGradient>
                </defs>

                <rect
                  width="480"
                  height="360"
                  fill="url(#aboutGradient)"
                />

                <circle
                  cx="240"
                  cy="180"
                  r="105"
                  fill="#3E8A66"
                  opacity="0.8"
                />

                <path
                  d="M240 270 C180 220 175 140 240 90 C305 140 300 220 240 270Z"
                  fill="#66BB6A"
                  opacity="0.85"
                />

                <path
                  d="M240 270 V115"
                  stroke="#E8F5E9"
                  strokeWidth="5"
                  fill="none"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">
              What we provide
            </span>

            <h2 className="section-title">
              Practical tools for real agricultural decisions
            </h2>

            <p className="section-desc">
              CropCare AI focuses on features that can be
              useful throughout the farming journey.
            </p>
          </div>

          <div className="feature-grid">
            {platformFeatures.map((feature) => (
              <div
                className="card feature-card"
                key={feature.title}
              >
                <div className="fc-ico">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap">
          <div
            className="card"
            style={{
              padding: '44px 32px',
              textAlign: 'center',
              background:
                'var(--color-secondary-light)',
              border: 'none',
            }}
          >
            <h2 className="section-title">
              Build a smarter future for agriculture
            </h2>

            <p className="section-desc">
              Explore CropCare AI and discover how
              technology can support better agricultural
              decisions.
            </p>

            <div
              className="hero-cta"
              style={{
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <Link
                to="/signup"
                className="btn btn-primary"
              >
                Get started
              </Link>

              <Link
                to="/features"
                className="btn btn-outline"
              >
                Explore features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}