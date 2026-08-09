import Hero from '../../components/public/Hero';
import FeatureCard from '../../components/public/FeatureCard';
import CTASection from '../../components/public/CTASection';
import PublicFooter from '../../components/public/PublicFooter';
import '../../styles/Public.css';

const roleCards = [
  {
    icon: '👨‍🌾',
    title: 'Farmer',
    description:
      'Scan crops for disease, check mandi prices, find seed labs, and track government schemes — all in one place.',
    to: '/signup',
  },
  {
    icon: '🧑‍💼',
    title: 'District Officer',
    description:
      'Approve farmer registrations, monitor disease hotspots, manage seed testing, and broadcast alerts district-wide.',
    to: '/login',
  },
  {
    icon: '⚙️',
    title: 'Administrator',
    description:
      'Manage users, districts, labs, schemes, and monitor platform-wide analytics from a single dashboard.',
    to: '/login',
  },
];

const trustedDataCards = [
  {
    icon: '🩺',
    title: 'Disease Detection',
    description:
      'Upload or capture a photo and get an AI diagnosis with a confidence score in seconds.',
    to: '/features#disease-detection',
  },
  {
    icon: '📈',
    title: 'Mandi Prices',
    description:
      'Live prices from your nearest markets, with daily trend charts.',
    to: '/features#mandi-prices',
  },
  {
    icon: '🧪',
    title: 'Seed Labs',
    description:
      'Find the nearest SATHI-affiliated seed testing laboratory automatically, based on your district.',
    to: '/features#seed-labs',
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* Roles */}
        <section id="roles">
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">
                One platform, three roles
              </span>

              <h2 className="section-title">
                Built for who's actually using it
              </h2>

              <p className="section-desc">
                Farmers, district officers, and admins each get a
                workspace shaped for their real job.
              </p>
            </div>

            <div className="feature-grid">
              {roleCards.map((card) => (
                <FeatureCard
                  key={card.title}
                  {...card}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Data */}
        <section>
          <div className="wrap">
            <div className="section-head">
              <span className="kicker">
                Trusted data
              </span>

              <h2 className="section-title">
                Grounded in official sources, not guesses
              </h2>

              <p className="section-desc">
                Mandi prices from Agmarknet/Uzhavar Sandhai,
                dosage guidance from ICAR, and seed testing through
                SATHI-affiliated labs.
              </p>
            </div>

            <div className="feature-grid">
              {trustedDataCards.map((card) => (
                <FeatureCard
                  key={card.title}
                  {...card}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Your next scan is thirty seconds away"
          description="No paperwork to start — just your phone, your field, and a district officer already assigned to you."
          primaryCta={{
            label: 'Create your account',
            to: '/signup',
          }}
          secondaryCta={{
            label: 'Talk to us',
            to: '/contact',
          }}
        />
      </main>

      <PublicFooter />
    </>
  );
}