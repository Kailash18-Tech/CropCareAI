import React, { useState } from "react";

const AdminSchemeForm = ({ onAddScheme, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    eligibility: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Financial Support",
    "Crop Insurance",
    "Irrigation",
    "Soil Management",
    "Seeds & Inputs",
    "Agricultural Development",
  ];

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
      newErrors.name = "Scheme name is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.eligibility.trim()) {
      newErrors.eligibility = "Eligibility is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newScheme = {
      name: formData.name.trim(),
      category: formData.category,
      eligibility: formData.eligibility.trim(),
      status: formData.status,
    };

    /*
      Backend integration will be added later.

      For now, the form sends the new scheme
      information to AdminSchemes.jsx.
    */

    if (onAddScheme) {
      onAddScheme(newScheme);
    }

    setFormData({
      name: "",
      category: "",
      eligibility: "",
      status: "Active",
    });

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="admin-scheme-form-container">

      {/* Header */}
      <div className="admin-scheme-form-header">
        <div>
          <h2>
            Add Government Scheme
          </h2>

          <p>
            Enter the details of the new agricultural scheme.
          </p>
        </div>
      </div>

      {/* Back Button */}
      <button
        type="button"
        className="admin-scheme-back-btn"
        onClick={onClose}
      >
        ← Back to Schemes
      </button>

      {/* Form */}
      <form
        className="admin-scheme-form"
        onSubmit={handleSubmit}
      >

        <div className="admin-scheme-form-grid">

          {/* Scheme Name */}
          <div className="admin-scheme-form-group">

            <label htmlFor="scheme-name">
              Scheme Name
            </label>

            <input
              id="scheme-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter scheme name"
            />

            {errors.name && (
              <span className="admin-scheme-form-error">
                {errors.name}
              </span>
            )}

          </div>

          {/* Category */}
          <div className="admin-scheme-form-group">

            <label htmlFor="scheme-form-category">
              Category
            </label>

            <select
              id="scheme-form-category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">
                Select Category
              </option>

              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>

            {errors.category && (
              <span className="admin-scheme-form-error">
                {errors.category}
              </span>
            )}

          </div>

          {/* Eligibility */}
          <div className="admin-scheme-form-group">

            <label htmlFor="scheme-eligibility">
              Eligibility
            </label>

            <textarea
              id="scheme-eligibility"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              placeholder="Enter eligibility criteria"
              rows="4"
            />

            {errors.eligibility && (
              <span className="admin-scheme-form-error">
                {errors.eligibility}
              </span>
            )}

          </div>

          {/* Status */}
          <div className="admin-scheme-form-group">

            <label htmlFor="scheme-status">
              Status
            </label>

            <select
              id="scheme-status"
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

          </div>

        </div>

        {/* Actions */}
        <div className="admin-scheme-form-actions">

          <button
            type="submit"
            className="admin-scheme-submit-btn"
          >
            Add Scheme
          </button>

        </div>

      </form>

    </div>
  );
};

export default AdminSchemeForm;