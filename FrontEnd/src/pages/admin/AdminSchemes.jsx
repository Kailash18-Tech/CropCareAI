import React, { useState } from "react";

import AdminSchemeFilter from "../../components/admin/schemes/AdminSchemeFilter";
import AdminSchemeTable from "../../components/admin/schemes/AdminSchemeTable";
import AdminSchemeForm from "../../components/admin/schemes/AdminSchemeForm";

import "../../styles/admin/AdminSchemes.css";

const defaultSchemes = [
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

export default function AdminSchemes() {
  /* =====================================================
     FORM VISIBILITY
     ===================================================== */

  const [showForm, setShowForm] = useState(false);

  /* =====================================================
     SCHEME DATA
     ===================================================== */

  const [schemes, setSchemes] = useState(defaultSchemes);

  /* =====================================================
     FILTER STATE
     ===================================================== */

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  /* =====================================================
     FILTER SCHEMES
     ===================================================== */

  const filteredSchemes = schemes.filter((scheme) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      scheme.name.toLowerCase().includes(search) ||
      scheme.category.toLowerCase().includes(search) ||
      scheme.eligibility.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "all" ||
      scheme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  /* =====================================================
     ADD SCHEME
     ===================================================== */

  const handleAddScheme = (newScheme) => {
    const schemeWithId = {
      ...newScheme,
      id: Date.now(),
    };

    setSchemes((currentSchemes) => [
      ...currentSchemes,
      schemeWithId,
    ]);

    setShowForm(false);
  };

  /* =====================================================
     REMOVE SCHEME
     ===================================================== */

  const handleRemoveScheme = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this scheme?"
    );

    if (!confirmed) {
      return;
    }

    setSchemes((currentSchemes) =>
      currentSchemes.filter(
        (scheme) => scheme.id !== id
      )
    );
  };

  /* =====================================================
     PAGE
     ===================================================== */

  return (
    <div className="admin-schemes-page">

      {/* =================================================
          ADD SCHEME FORM
          ================================================= */}

      {showForm ? (
        <AdminSchemeForm
          onAddScheme={handleAddScheme}
          onClose={() => setShowForm(false)}
        />
      ) : (

        /* =================================================
           SCHEME LIST
           ================================================= */

        <>
          {/* Page Header */}

          <div className="admin-schemes-page-header">

            <div>
              <h1>
                Government Schemes
              </h1>

              <p>
                Manage government agricultural schemes
                available for farmers.
              </p>
            </div>

            {/* Add Scheme */}

            <button
              type="button"
              className="admin-scheme-add-btn"
              onClick={() => setShowForm(true)}
            >
              + Add Scheme
            </button>

          </div>

          {/* Filter */}

          <AdminSchemeFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Table */}

          <AdminSchemeTable
            schemes={filteredSchemes}
            onRemove={handleRemoveScheme}
          />

        </>

      )}

    </div>
  );
}