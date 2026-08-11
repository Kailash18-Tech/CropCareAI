import { useState } from "react";

export default function MandiDistrictSelect({ onDistrictChange }) {
  const [selectedDistrict, setSelectedDistrict] =
    useState("Tiruppur");

  const handleChange = (event) => {
    const district = event.target.value;

    setSelectedDistrict(district);

    if (onDistrictChange) {
      onDistrictChange(district);
    }
  };

  return (
    <div className="mandi-district-section">

      <div className="mandi-section-header">
        <div>
          <h2>Select District</h2>
          <p>
            Select a district to view its mandi prices.
          </p>
        </div>
      </div>

      <select
        value={selectedDistrict}
        onChange={handleChange}
        className="mandi-district-select"
      >
        <option value="Tiruppur">Tiruppur</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Erode">Erode</option>
        <option value="Salem">Salem</option>
        <option value="Namakkal">Namakkal</option>
      </select>

    </div>
  );
}