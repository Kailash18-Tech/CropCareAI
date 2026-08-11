import { useState } from "react";

import SchemeTable from "../../components/officer/schemes/SchemeTable";
import "../../styles/officer/GovernmentSchemes.css";

const initialSchemes = [
  {
    id: 1,
    name: "PM-KISAN",
    category: "Financial Support",
    eligibility: "Small and marginal farmers",
    status: "Active",
  },
  {
    id: 2,
    name: "PM Fasal Bima Yojana",
    category: "Crop Insurance",
    eligibility: "Farmers growing notified crops",
    status: "Active",
  },
  {
    id: 3,
    name: "PM Krishi Sinchai Yojana",
    category: "Irrigation",
    eligibility: "Eligible agricultural farmers",
    status: "Active",
  },
  {
    id: 4,
    name: "Kisan Credit Card",
    category: "Financial Support",
    eligibility: "Eligible farmers",
    status: "Active",
  },
  {
    id: 5,
    name: "Soil Health Card Scheme",
    category: "Soil Management",
    eligibility: "Farmers",
    status: "Active",
  },
];

export default function GovernmentSchemes() {
  const [showForm, setShowForm] = useState(false);

  const [schemes, setSchemes] = useState(initialSchemes);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    eligibility: "",
    status: "Active",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newScheme = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      eligibility: formData.eligibility,
      status: formData.status,
    };

    setSchemes((previous) => [
      ...previous,
      newScheme,
    ]);

    setFormData({
      name: "",
      category: "",
      eligibility: "",
      status: "Active",
    });

    setShowForm(false);
  };

  /* =========================================================
     ADD SCHEME FORM
     ========================================================= */

  if (showForm) {
    return (
      <div className="government-schemes-page">

        {/* Back Button */}
        <button
          type="button"
          className="scheme-back-button"
          onClick={() => setShowForm(false)}
        >
          ← Back to Farmer Welfare Schemes
        </button>

        {/* Form Header */}
        <div className="government-schemes-header">
          <p className="government-schemes-label">
            Officer Dashboard
          </p>

          <h1>Add Farmer Welfare Scheme</h1>

          <p className="government-schemes-description">
            Add a new government welfare scheme for farmers.
          </p>
        </div>

        {/* Form */}
        <div className="scheme-form-card">
          <form onSubmit={handleSubmit}>

            {/* Scheme Name */}
            <div className="scheme-form-group">
              <label htmlFor="name">
                Scheme Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter scheme name"
                required
              />
            </div>

            {/* Category */}
            <div className="scheme-form-group">
              <label htmlFor="category">
                Category
              </label>

              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter scheme category"
                required
              />
            </div>

            {/* Eligibility */}
            <div className="scheme-form-group">
              <label htmlFor="eligibility">
                Eligibility
              </label>

              <textarea
                id="eligibility"
                name="eligibility"
                value={formData.eligibility}
                onChange={handleChange}
                placeholder="Enter eligibility details"
                rows="3"
                required
              />
            </div>

            {/* Status */}
            <div className="scheme-form-group">
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

            {/* Form Actions */}
            <div className="scheme-form-actions">

              <button
                type="button"
                className="scheme-cancel-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="scheme-submit-button"
              >
                Submit Scheme
              </button>

            </div>

          </form>
        </div>

      </div>
    );
  }

  /* =========================================================
     SCHEME LIST PAGE
     ========================================================= */

  return (
    <div className="government-schemes-page">

      {/* Page Header */}
      <div className="government-schemes-header">

        <div className="government-schemes-header-content">

          <div>
            <p className="government-schemes-label">
              Officer Dashboard
            </p>

            <h1>
              🏛️ Farmer Welfare Schemes
            </h1>

            <p className="government-schemes-description">
              Manage government welfare schemes available
              for farmers.
            </p>
          </div>

          {/* Add Scheme Button */}
          <button
            type="button"
            className="add-scheme-button"
            onClick={() => setShowForm(true)}
          >
            + Add Scheme
          </button>

        </div>

      </div>

      {/* Scheme Table */}
      <SchemeTable schemes={schemes} />

    </div>
  );
}