import React from "react";

export default function AdminFarmerFilter({
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
    <div className="admin-farmer-filter">

      <div className="admin-farmer-filter-left">

        <label
          htmlFor="district"
          className="admin-farmer-filter-label"
        >
          District
        </label>

        <select
          id="district"
          className="admin-farmer-district-select"
          value={selectedDistrict}
          onChange={(e) =>
            onDistrictChange(e.target.value)
          }
        >
          <option value="All Districts">
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