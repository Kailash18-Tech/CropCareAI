import { Link } from 'react-router-dom';

export default function FeatureCard({
  icon,
  title,
  description,
  to,
}) {
  return (
    <Link
      to={to}
      className="card feature-card"
    >
      <div className="fc-ico">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </Link>
  );
}