
import React, { useState } from "react";
import AdminFarmerFilter from "../../components/admin/farmer/AdminFarmerFilter";
import AdminFarmerTable from "../../components/admin/farmer/AdminFarmerTable";

import "../../styles/admin/FarmerManagement.css";

export default function FarmerManagement() {
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");

  return (
    <div className="admin-farmer-page">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="admin-page-header">
        <div>
          <span className="admin-page-eyebrow">
            Farmer Management
          </span>

          <h1>Farmers</h1>

          <p>
            View and manage registered farmers across all districts.
          </p>
        </div>
      </div>


      {/* =========================
          DISTRICT FILTER
      ========================= */}

      <AdminFarmerFilter
        selectedDistrict={selectedDistrict}
        onDistrictChange={setSelectedDistrict}
      />


      {/* =========================
          FARMER TABLE
      ========================= */}

      <section className="admin-farmer-section">

        <div className="admin-section-header">
          <div>
            <h2>Registered Farmers</h2>

            <p>
              {selectedDistrict === "All Districts"
                ? "Showing farmers from all districts"
                : `Showing farmers from ${selectedDistrict}`}
            </p>
          </div>
        </div>

        <AdminFarmerTable
          selectedDistrict={selectedDistrict}
        />

      </section>

    </div>
  );
}

