import { Link } from 'react-router-dom';
import PublicHeader from './PublicHeader';

export default function Hero() {
  return (
    
    <section className="hero">
      <div className="wrap hero-grid">

        <div>
          <span className="eyebrow">
            AI-powered smart agriculture
          </span>

          <h1 className="hero-h">
            Point your phone at the leaf. Know what's wrong.
          </h1>

          <p className="hero-sub">
            CropCare AI turns a phone camera into a plant doctor,
            a mandi price board, and a direct line to your district's
            agriculture office — for farmers, district officers,
            and administrators alike.
          </p>

          <div className="hero-cta">
            <Link
              to="/signup"
              className="btn btn-primary"
            >
              Create an account
            </Link>

            <Link
              to="/features"
              className="btn btn-outline"
            >
              Explore features
            </Link>
          </div>
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
                id="heroGradient"
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
              fill="url(#heroGradient)"
            />

            <ellipse
              cx="245"
              cy="180"
              rx="90"
              ry="120"
              fill="#3E8A66"
              opacity="0.85"
              transform="rotate(-18 245 180)"
            />

            <circle
              cx="270"
              cy="150"
              r="10"
              fill="#F0A93E"
              opacity="0.9"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}