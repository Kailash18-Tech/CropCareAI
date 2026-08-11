import React from "react";

export default function AdminSeedLabFilter({
  searchTerm,
  onSearchChange,
  selectedDistrict,
  onDistrictChange,
}) {
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

  return (
    <div className="admin-seedlab-filter">

      {/* Search */}
      <div className="admin-seedlab-filter-left">
        <label
          htmlFor="seedlab-search"
          className="admin-seedlab-filter-label"
        >
          Search
        </label>

        <input
          id="seedlab-search"
          type="text"
          className="admin-seedlab-search-input"
          placeholder="Search laboratory or location..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* District */}
      <div className="admin-seedlab-filter-right">
        <label
          htmlFor="seedlab-district"
          className="admin-seedlab-filter-label"
        >
          District
        </label>

        <select
          id="seedlab-district"
          className="admin-seedlab-district-select"
          value={selectedDistrict}
          onChange={(e) => onDistrictChange(e.target.value)}
        >
          <option value="all">
            All Districts
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
      </div>

    </div>
  );
}