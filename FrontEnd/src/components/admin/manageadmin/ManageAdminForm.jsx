import React, { useState } from "react";

const ManageAdminForm = ({ onAddAdmin, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newAdmin = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      role: "Admin",
      status: "Active",
    };

    /*
      Backend integration will be added later.

      For now, the form sends the admin
      information to ManageAdmin.jsx.
    */

    if (onAddAdmin) {
      onAddAdmin(newAdmin);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="manage-admin-form-container">

      {/* ================================
          FORM HEADER
      ================================= */}

      <div className="manage-admin-form-header">

        <div>
          <h2>Add Administrator</h2>

          <p>
            Enter the details of the new administrator.
          </p>
        </div>

      </div>

      {/* ================================
          BACK BUTTON
      ================================= */}

      <button
        type="button"
        className="manage-admin-back-btn"
        onClick={onClose}
      >
        ← Back to Manage Admins
      </button>

      {/* ================================
          FORM
      ================================= */}

      <form
        className="manage-admin-form"
        onSubmit={handleSubmit}
      >

        <div className="manage-admin-form-grid">

          {/* Name */}

          <div className="manage-admin-form-group">

            <label htmlFor="admin-name">
              Name
            </label>

            <input
              id="admin-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter admin name"
            />

            {errors.name && (
              <span className="manage-admin-form-error">
                {errors.name}
              </span>
            )}

          </div>

          {/* Email */}

          <div className="manage-admin-form-group">

            <label htmlFor="admin-email">
              Email
            </label>

            <input
              id="admin-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter admin email"
            />

            {errors.email && (
              <span className="manage-admin-form-error">
                {errors.email}
              </span>
            )}

          </div>

          {/* Password */}

          <div className="manage-admin-form-group">

            <label htmlFor="admin-password">
              Password
            </label>

            <input
              id="admin-password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter admin password"
            />

            {errors.password && (
              <span className="manage-admin-form-error">
                {errors.password}
              </span>
            )}

          </div>

        </div>

        {/* ================================
            FORM ACTIONS
        ================================= */}

        <div className="manage-admin-form-actions">

          <button
            type="submit"
            className="manage-admin-submit-btn"
          >
            Add Admin
          </button>

        </div>

      </form>

    </div>
  );
};

export default ManageAdminForm;