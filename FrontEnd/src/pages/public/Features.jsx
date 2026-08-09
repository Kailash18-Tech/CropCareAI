import { Link } from 'react-router-dom';
import '../../styles/Public.css';

const features = [
  {
    id: 'disease-detection',
    icon: '🩺',
    title: 'Disease Detection',
    description:
      'Upload or capture a crop photo. Our AI names the disease, gives a confidence score, and recommends treatment — organic and chemical options shown side by side.',
  },
  {
    id: 'soil-crops',
    icon: '🌍',
    title: 'Soil & Crops',
    description:
      'Select your soil type and get crop recommendations with water requirements, best season, and expected yield.',
  },
  {
    id: 'mandi-prices',
    icon: '📈',
    title: 'Mandi Prices',
    description:
      "Your district is auto-detected to show nearby Uzhavar Sandhai markets with today's min, max, and modal prices, plus daily trends.",
  },
  {
    id: 'seed-labs',
    icon: '🧪',
    title: 'Seed Labs',
    description:
      'Find the nearest SATHI-affiliated seed testing laboratory automatically, with address, contact, and directions.',
  },
  {
    id: 'weather',
    icon: '☁️',
    title: 'Weather',
    description:
      'Current conditions plus a 7-day forecast, with irrigation advice based on expected rainfall.',
  },
  {
    id: 'government-schemes',
    icon: '🏛️',
    title: 'Government Schemes',
    description:
      'Browse active schemes, check your eligibility, and bookmark the ones that apply to you.',
  },
];

const managementFeatures = [
  {
    icon: '👨‍🌾',
    title: 'Farmer Approval',
    description:
      'Review and approve new farmer registrations for your district in one queue.',
  },
  {
    icon: '🌾',
    title: 'Disease Monitoring',
    description:
      'District-wide hotspot maps and AI detection statistics, updated in real time.',
  },
  {
    icon: '👥',
    title: 'User Management',
    description:
      'Admins can add, edit, and manage farmers, officers, and their roles platform-wide.',
  },
];

export default function Features() {
  return (
    <main>
      {/* Hero */}
      <section
        className="hero"
        style={{ paddingBottom: '20px' }}
      >
        <div className="wrap">
          <span className="eyebrow">
            Everything on the platform
          </span>

          <h1
            className="hero-h"
            style={{ fontSize: '2.4rem' }}
          >
            Features for every role
          </h1>

          <p className="hero-sub">
            Sign in to use these for real — this page is a
            public overview of what CropCare AI does.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section id="disease-detection">
        <div className="wrap">
          <div className="feature-grid">
            {features.map((feature) => (
              <div
                className="card feature-card"
                id={feature.id}
                key={feature.id}
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

      {/* District Officers & Admins */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">
              For district officers &amp; admins
            </span>

            <h2 className="section-title">
              District oversight and platform management
            </h2>
          </div>

          <div className="feature-grid">
            {managementFeatures.map((feature) => (
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
              background: 'var(--color-secondary-light)',
              border: 'none',
            }}
          >
            <h2 className="section-title">
              Ready to try it?
            </h2>

            <div
              className="hero-cta"
              style={{
                justifyContent: 'center',
                marginTop: '18px',
              }}
            >
              <Link
                to="/signup"
                className="btn btn-primary"
              >
                Create your account
              </Link>

              <Link
                to="/login"
                className="btn btn-outline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}