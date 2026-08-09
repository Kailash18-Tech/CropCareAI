import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import MobileDrawer from './MobileDrawer';

export default function PublicHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className="pub-header">
        <div className="wrap pub-nav-inner">

          <Logo />

          <nav className="pub-nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                >
                  Features
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="pub-actions">

            <Link
              to="/login"
              className="btn btn-outline"
            >
              Sign in
            </Link>

            <Link
              to="/signup"
              className="btn btn-primary"
            >
              Get started
            </Link>

            <button
              type="button"
              className="hamburger"
              onClick={openDrawer}
              aria-label="Open menu"
              aria-expanded={isDrawerOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

        </div>
      </header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
      />
    </>
  );
}