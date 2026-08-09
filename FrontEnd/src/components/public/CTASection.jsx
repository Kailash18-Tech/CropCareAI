import { Link } from 'react-router-dom';

export default function CTASection({ title, description, primaryCta, secondaryCta }) {
  return (
    <section>
      <div className="wrap">
        <div className="card cta-panel">
          <h2 className="section-title">{title}</h2>
          <p className="cta-desc">{description}</p>
          <div className="hero-cta cta-actions">
            <Link to={primaryCta.to} className="btn btn-primary">
              {primaryCta.label}
            </Link>
            <Link to={secondaryCta.to} className="btn btn-outline">
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}