import React from "react";

export default function AdminSchemeFilter({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  const categories = [
    "Financial Support",
    "Crop Insurance",
    "Irrigation",
    "Soil Management",
    "Seeds & Inputs",
    "Agricultural Development",
  ];

  return (
    <div className="admin-scheme-filter">

      {/* Search */}
      <div className="admin-scheme-filter-left">
        <label
          htmlFor="scheme-search"
          className="admin-scheme-filter-label"
        >
          Search
        </label>

        <input
          id="scheme-search"
          type="text"
          className="admin-scheme-search-input"
          placeholder="Search scheme..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="admin-scheme-filter-right">
        <label
          htmlFor="scheme-category"
          className="admin-scheme-filter-label"
        >
          Category
        </label>

        <select
          id="scheme-category"
          className="admin-scheme-category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">
            All Categories
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
      </div>

    </div>
  );
}