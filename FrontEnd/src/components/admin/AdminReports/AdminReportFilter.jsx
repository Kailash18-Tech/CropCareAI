import React from "react";

export default function AdminReportFilter({
  searchTerm,
  onSearchChange,
  selectedDistrict,
  onDistrictChange,
  selectedType,
  onTypeChange,
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

  const reportTypes = [
    "Disease",
    "Soil",
    "Mandi",
    "Seed Laboratory",
    "Farmer Activity",
  ];

  return (
    <div className="admin-report-filter">

      {/* Search */}

      <div className="admin-report-filter-left">

        <label
          htmlFor="report-search"
          className="admin-report-filter-label"
        >
          Search
        </label>

        <input
          id="report-search"
          type="text"
          className="admin-report-search-input"
          placeholder="Search reports..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

      </div>

      {/* District */}

      <div className="admin-report-filter-group">

        <label
          htmlFor="report-district"
          className="admin-report-filter-label"
        >
          District
        </label>

        <select
          id="report-district"
          className="admin-report-district-select"
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

      {/* Report Type */}

      <div className="admin-report-filter-group">

        <label
          htmlFor="report-type"
          className="admin-report-filter-label"
        >
          Report Type
        </label>

        <select
          id="report-type"
          className="admin-report-type-select"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="all">
            All Reports
          </option>

          {reportTypes.map((type) => (
            <option
              key={type}
              value={type}
            >
              {type}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}