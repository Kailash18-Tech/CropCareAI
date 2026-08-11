import React from "react";

export default function AdminOfficerFilter({
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
    <div className="admin-officer-filter">
      <div className="admin-officer-filter-group">
        <label htmlFor="officer-district">
          District
        </label>

        <select
          id="officer-district"
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