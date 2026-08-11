import React, { useState } from "react";

import AdminOfficerFilter from "../../components/admin/officer/AdminOfficerFilter";
import AdminOfficerTable from "../../components/admin/officer/AdminOfficerTable";

import "../../styles/admin/OfficerManagement.css";

export default function OfficerManagement() {
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  return (
    <div className="admin-officer-page">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="admin-officer-header">
        <div>
          <span className="admin-officer-eyebrow">
            Admin Workspace
          </span>

          <h1>Officer Management</h1>

          <p>
            View and manage district officers registered in CropCare AI.
          </p>
        </div>
      </div>

      {/* =========================
          DISTRICT FILTER
      ========================= */}

      <section className="admin-officer-section">
        <div className="admin-section-header">
          <div>
            <h2>District Officers</h2>

            <p>
              Filter officers by district.
            </p>
          </div>
        </div>

        <AdminOfficerFilter
          selectedDistrict={selectedDistrict}
          onDistrictChange={setSelectedDistrict}
        />
      </section>

      {/* =========================
          OFFICER TABLE
      ========================= */}

      <section className="admin-officer-section">
        <AdminOfficerTable
          selectedDistrict={selectedDistrict}
        />
      </section>

    </div>
  );
}