import React, { useState } from "react";

const AdminSeedLabForm = ({ onAddLab, onClose }) => {
  const [formData, setFormData] = useState({
    labName: "",
    location: "",
    district: "",
    contact: "",
    status: "Active",
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

    if (!formData.labName.trim()) {
      newErrors.labName = "Laboratory name is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.district) {
      newErrors.district = "Please select a district";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newLab = {
      labName: formData.labName.trim(),
      location: formData.location.trim(),
      district: formData.district,
      contact: formData.contact.trim(),
      status: formData.status,
    };

    /*
      Backend integration will be added later.

      For now, the form sends the laboratory
      information to AdminSeedLabs.jsx.
    */

    if (onAddLab) {
      onAddLab(newLab);
    }

    setFormData({
      labName: "",
      location: "",
      district: "",
      contact: "",
      status: "Active",
    });

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="admin-seedlab-form-container">

      {/* Header */}
      <div className="admin-seedlab-form-header">
        <div>
          <h2>Add Seed Testing Laboratory</h2>

          <p>
            Enter the details of the new seed testing laboratory.
          </p>
        </div>
      </div>

      {/* Back Button */}
      <button
        type="button"
        className="admin-seedlab-back-btn"
        onClick={onClose}
      >
        ← Back to Seed Labs
      </button>

      {/* Form */}
      <form
        className="admin-seedlab-form"
        onSubmit={handleSubmit}
      >
        <div className="admin-seedlab-form-grid">

          {/* Laboratory Name */}
          <div className="admin-seedlab-form-group">
            <label htmlFor="labName">
              Laboratory Name
            </label>

            <input
              id="labName"
              type="text"
              name="labName"
              value={formData.labName}
              onChange={handleChange}
              placeholder="Enter laboratory name"
            />

            {errors.labName && (
              <span className="admin-seedlab-form-error">
                {errors.labName}
              </span>
            )}
          </div>

          {/* Location */}
          <div className="admin-seedlab-form-group">
            <label htmlFor="location">
              Location
            </label>

            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter laboratory location"
            />

            {errors.location && (
              <span className="admin-seedlab-form-error">
                {errors.location}
              </span>
            )}
          </div>

          {/* District */}
          <div className="admin-seedlab-form-group">
            <label htmlFor="district">
              District
            </label>

            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
            >
              <option value="">
                Select District
              </option>

              <option value="Coimbatore">
                Coimbatore
              </option>

              <option value="Erode">
                Erode
              </option>

              <option value="Salem">
                Salem
              </option>

              <option value="Tiruppur">
                Tiruppur
              </option>

              <option value="Namakkal">
                Namakkal
              </option>

              <option value="Karur">
                Karur
              </option>

              <option value="Madurai">
                Madurai
              </option>

              <option value="Thanjavur">
                Thanjavur
              </option>
            </select>

            {errors.district && (
              <span className="admin-seedlab-form-error">
                {errors.district}
              </span>
            )}
          </div>

          {/* Contact */}
          <div className="admin-seedlab-form-group">
            <label htmlFor="contact">
              Contact Number
            </label>

            <input
              id="contact"
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
            />

            {errors.contact && (
              <span className="admin-seedlab-form-error">
                {errors.contact}
              </span>
            )}
          </div>

          {/* Status */}
          <div className="admin-seedlab-form-group">
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
          </div>

        </div>

        {/* Actions */}
        <div className="admin-seedlab-form-actions">

          <button
            type="submit"
            className="admin-seedlab-submit-btn"
          >
            Add Laboratory
          </button>

        </div>
      </form>

    </div>
  );
};

export default AdminSeedLabForm;