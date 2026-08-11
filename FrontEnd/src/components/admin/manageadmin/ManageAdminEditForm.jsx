import React, { useState } from "react";

const ManageAdminEditForm = ({ admin, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    role: admin?.role || "Admin",
    status: admin?.status || "Active",
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

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (!formData.status) {
      newErrors.status = "Please select a status";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const updatedAdmin = {
      ...admin,
      role: formData.role,
      status: formData.status,
    };

    /*
      Backend integration will be added later.

      For now, updated administrator information
      is sent back to ManageAdmin.jsx.
    */

    if (onSave) {
      onSave(updatedAdmin);
    }
  };

  if (!admin) {
    return (
      <div className="manage-admin-form-container">
        <p>Administrator information not found.</p>

        <button
          type="button"
          className="manage-admin-back-btn"
          onClick={onClose}
        >
          ← Back to Manage Admins
        </button>
      </div>
    );
  }

  return (
    <div className="manage-admin-form-container">

      {/* Header */}
      <div className="manage-admin-form-header">
        <div>
          <h2>Edit Administrator</h2>

          <p>
            Update the role and account status of this administrator.
          </p>
        </div>
      </div>

      {/* Back Button */}
      <button
        type="button"
        className="manage-admin-back-btn"
        onClick={onClose}
      >
        ← Back to Manage Admins
      </button>

      {/* Form */}
      <form
        className="manage-admin-form"
        onSubmit={handleSubmit}
      >

        <div className="manage-admin-form-grid">

          {/* Name */}
          <div className="manage-admin-form-group">
            <label htmlFor="adminName">
              Name
            </label>

            <input
              id="adminName"
              type="text"
              value={admin.name}
              readOnly
              className="manage-admin-readonly"
            />
          </div>

          {/* Admin ID */}
          <div className="manage-admin-form-group">
            <label htmlFor="adminId">
              Admin ID
            </label>

            <input
              id="adminId"
              type="text"
              value={admin.adminId}
              readOnly
              className="manage-admin-readonly"
            />
          </div>

          {/* Email */}
          <div className="manage-admin-form-group">
            <label htmlFor="adminEmail">
              Email
            </label>

            <input
              id="adminEmail"
              type="email"
              value={admin.email}
              readOnly
              className="manage-admin-readonly"
            />
          </div>

          {/* Role */}
          <div className="manage-admin-form-group">
            <label htmlFor="role">
              Role
            </label>

            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">
                Select Role
              </option>

              <option value="Admin">
                Admin
              </option>

              <option value="Super Admin">
                Super Admin
              </option>
            </select>

            {errors.role && (
              <span className="manage-admin-form-error">
                {errors.role}
              </span>
            )}
          </div>

          {/* Status */}
          <div className="manage-admin-form-group">
            <label htmlFor="status">
              Status
            </label>

            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>

            {errors.status && (
              <span className="manage-admin-form-error">
                {errors.status}
              </span>
            )}
          </div>

        </div>

        {/* Actions */}
        <div className="manage-admin-form-actions">

          <button
            type="submit"
            className="manage-admin-submit-btn"
          >
            Save Changes
          </button>

        </div>

      </form>
    </div>
  );
};

export default ManageAdminEditForm;