import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Sign in', to: '/login' },
  { label: 'Get started', to: '/signup' },
];

export default function MobileDrawer({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`pub-drawer-overlay${isOpen ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`pub-drawer${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="pub-drawer-head">
          <button
            type="button"
            className="hamburger"
            aria-label="Close menu"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}