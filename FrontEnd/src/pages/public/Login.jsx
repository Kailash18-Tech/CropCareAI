import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Login.css';

export default function Login() {
  const [selectedRole, setSelectedRole] = useState('farmer');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend integration will be added later.
    console.log('Selected role:', selectedRole);
  };

  return (
    <main className="auth-page">
      <div className="auth-container">

        <div className="auth-card">

          {/* Header */}
          <div className="auth-header">
            <h1>Welcome back</h1>

            <p>
              Sign in to your CropCare AI account
            </p>
          </div>

          {/* Role Selection */}
          <div className="role-selection">

            <button
              type="button"
              className={`role-option ${
                selectedRole === 'farmer' ? 'active' : ''
              }`}
              onClick={() => setSelectedRole('farmer')}
            >
              <span className="role-icon">👨‍🌾</span>
              <span>Farmer</span>
            </button>

            <button
              type="button"
              className={`role-option ${
                selectedRole === 'districtOfficer' ? 'active' : ''
              }`}
              onClick={() => setSelectedRole('districtOfficer')}
            >
              <span className="role-icon">👨‍💼</span>
              <span>District Officer</span>
            </button>

            <button
              type="button"
              className={`role-option ${
                selectedRole === 'admin' ? 'active' : ''
              }`}
              onClick={() => setSelectedRole('admin')}
            >
              <span className="role-icon">⚙️</span>
              <span>Admin</span>
            </button>

          </div>

          {/* Login Form */}
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* Email / Phone */}
            <div className="form-group">
              <label htmlFor="email">
                Email or phone
              </label>

              <input
                type="text"
                id="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              {/* Forgot Password */}
              <div className="forgot-password">
                <Link to="/forgot-password">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="auth-submit"
            >
              Sign in
            </button>

          </form>

          {/* Signup */}
          <div className="auth-footer">
            <span>
              Don't have an account?
            </span>

            <Link to="/signup">
              Create one
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}