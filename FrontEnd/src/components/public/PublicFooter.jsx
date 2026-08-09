import { Link } from 'react-router-dom';

export default function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand footer-brand">
              <span className="mark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21C12 21 5 16.5 5 10.5C5 7 7.5 4.5 11 4.5C11 4.5 11.5 8 15 8C18 8 19 5.5 19 5.5C19 5.5 19.5 8.5 17.5 11.5C16 13.7 12 21 12 21Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              <span className="brand-txt">
                CropCare<span className="dot">AI</span>
              </span>
            </div>
            <p className="footer-blurb">
              A crop diagnosis and district support platform for farmers, officers and administrators.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/features#weather">Weather</Link></li>
              <li><Link to="/features#mandi-prices">Mandi Prices</Link></li>
              <li><Link to="/features#government-schemes">Government Schemes</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Account</h4>
            <ul>
              <li><Link to="/login">Sign in</Link></li>
              <li><Link to="/signup">Create account</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CropCare AI. Built for smallholder farmers.</span>
          <span>தமிழ் · English · हिंदी</span>
        </div>
      </div>
    </footer>
  );
}