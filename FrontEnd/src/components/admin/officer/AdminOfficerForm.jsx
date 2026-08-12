import React, { useState } from "react";

const AdminOfficerForm = ({ onAddOfficer, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    district: "",
  });

  const [errors, setErrors] = useState({});

  const districts = [
    "Coimbatore",
    "Erode",
    "Salem",
    "Tiruppur",
    "Namakkal",
    "Karur",
    "Madurai",
    "Thanjavur",
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
      newErrors.name = "Officer name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!formData.district) {
      newErrors.district = "Please select a district";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newOfficer = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      district: formData.district,
      status: "Active",
    };

    /*
      Backend integration will be added later.

      For now, the officer information is sent
      to OfficerManagement.jsx.
    */

    if (onAddOfficer) {
      onAddOfficer(newOfficer);
    }
  };

  return (
    <div className="manage-officer-form-container">

      {/* ================================
          FORM HEADER
      ================================= */}

      <div className="manage-officer-form-header">

        <div>
          <h2>Add District Officer</h2>

          <p>
            Create a new district officer account
            for the CropCare AI platform.
          </p>
        </div>

      </div>


      {/* ================================
          BACK BUTTON
      ================================= */}

      <button
        type="button"
        className="manage-officer-back-btn"
        onClick={onClose}
      >
        ← Back to Officer Management
      </button>


      {/* ================================
          FORM
      ================================= */}

      <form
        className="manage-officer-form"
        onSubmit={handleSubmit}
      >

        <div className="manage-officer-form-grid">

          {/* Officer Name */}
          <div className="manage-officer-form-group">

            <label htmlFor="officer-name">
              Officer Name
            </label>

            <input
              id="officer-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter officer name"
            />

            {errors.name && (
              <span className="manage-officer-form-error">
                {errors.name}
              </span>
            )}

          </div>


          {/* Email */}
          <div className="manage-officer-form-group">

            <label htmlFor="officer-email">
              Email
            </label>

            <input
              id="officer-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter officer email"
            />

            {errors.email && (
              <span className="manage-officer-form-error">
                {errors.email}
              </span>
            )}

          </div>


          {/* Password */}
          <div className="manage-officer-form-group">

            <label htmlFor="officer-password">
              Password
            </label>

            <input
              id="officer-password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />

            {errors.password && (
              <span className="manage-officer-form-error">
                {errors.password}
              </span>
            )}

          </div>


          {/* District */}
          <div className="manage-officer-form-group">

            <label htmlFor="officer-district">
              District
            </label>

            <select
              id="officer-district"
              name="district"
              value={formData.district}
              onChange={handleChange}
            >
              <option value="">
                Select District
              </option>

              {districts.map((district) => (
                <option
                  key={district}
                  value={district}
                >
                  {district}
                </option>
              ))}
            </select>

            {errors.district && (
              <span className="manage-officer-form-error">
                {errors.district}
              </span>
            )}

          </div>

        </div>


        {/* ================================
            ACTION
        ================================= */}

        <div className="manage-officer-form-actions">

          <button
            type="submit"
            className="manage-officer-submit-btn"
          >
            Add Officer
          </button>

        </div>

      </form>

    </div>
  );
};

export default AdminOfficerForm;