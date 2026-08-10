import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Signup.css';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Frontend only for now.

      Later this information will be sent to the backend:

      {
        name,
        email,
        phone,
        password,
        confirmPassword,
        role: "farmer"
      }

      The backend will create the farmer account.
    */

    console.log('Farmer signup submitted');
  };

  return (
    <main className="auth-page signup-page">
      <div className="auth-container">

        {/* Brand */}
        <Link to="/" className="auth-brand">
          <span className="auth-brand-mark">✓</span>

          <span className="auth-brand-name">
            CropCare<span>AI</span>
          </span>
        </Link>

        {/* Signup Card */}
        <div className="auth-card signup-card">

          {/* Header */}
          <div className="auth-header">
            <h1>Create your account</h1>

            <p>
              Join CropCare AI and access smart farming assistance.
            </p>
          </div>

          {/* Farmer Role */}
          <div className="signup-role">
            <span className="signup-role-icon">👨‍🌾</span>

            <div>
              <strong>Farmer account</strong>

              <p>
                Create an account to access CropCare AI services.
              </p>
            </div>
          </div>

          {/* Signup Form */}
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">
                Full name
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="password-input">
                <input
                  type={
                    showConfirmPassword
                      ? 'text'
                      : 'password'
                  }
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="terms-row">
              <input
                type="checkbox"
                name="terms"
                required
              />

              <span>
                I agree to the CropCare AI terms and
                privacy policy.
              </span>
            </label>

            {/* Create Account */}
            <button
              type="submit"
              className="auth-submit"
            >
              Create account
            </button>

          </form>

          {/* Login */}
          <div className="auth-footer">
            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>
          </div>

        </div>

        {/* Back Home */}
        <Link
          to="/"
          className="back-home"
        >
          ← Back to home
        </Link>

      </div>
    </main>
  );
}