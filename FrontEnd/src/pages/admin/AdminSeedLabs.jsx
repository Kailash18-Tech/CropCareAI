import React, { useState } from "react";
import AdminSeedLabFilter from "../../components/admin/seedlabs/AdminSeedLabFilter";
import AdminSeedLabTable from "../../components/admin/seedlabs/AdminSeedLabTable";
import AdminSeedLabForm from "../../components/admin/seedlabs/AdminSeedLabForm";
import "../../styles/admin/SeedLabs.css";

export default function AdminSeedLabs() {
  const [showForm, setShowForm] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");

  const [seedLabs, setSeedLabs] = useState([
    {
      id: 1,
      labName: "Government Seed Testing Laboratory",
      district: "Coimbatore",
      location: "Coimbatore",
      contact: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      labName: "Regional Seed Testing Laboratory",
      district: "Erode",
      location: "Erode",
      contact: "9876543211",
      status: "Active",
    },
    {
      id: 3,
      labName: "Agricultural Seed Testing Laboratory",
      district: "Salem",
      location: "Salem",
      contact: "9876543212",
      status: "Inactive",
    },
  ]);

  const filteredSeedLabs = seedLabs.filter((lab) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      lab.labName.toLowerCase().includes(search) ||
      lab.location.toLowerCase().includes(search);

    const matchesDistrict =
      selectedDistrict === "all" ||
      lab.district === selectedDistrict;

    return matchesSearch && matchesDistrict;
  });

  const handleAddLab = (newLab) => {
    const labWithId = {
      ...newLab,
      id: Date.now(),
    };

    setSeedLabs((prev) => [...prev, labWithId]);
    setShowForm(false);
  };

  const handleDeleteSeedLab = (id) => {
    setSeedLabs((prev) =>
      prev.filter((lab) => lab.id !== id)
    );
  };

  return (
    <div className="admin-seedlabs-page">

      {showForm ? (

        /* FORM PAGE */
        <AdminSeedLabForm
          onAddLab={handleAddLab}
          onClose={() => setShowForm(false)}
        />

      ) : (

        /* SEED LABS PAGE */
        <>
          <div className="admin-seedlabs-header">

            <div className="admin-seedlabs-title">
              <h1>Seed Testing Laboratories</h1>

              <p>
                Manage seed testing laboratories registered on CropCare AI.
              </p>
            </div>

            <button
              type="button"
              className="admin-seedlabs-add-btn"
              onClick={() => setShowForm(true)}
            >
              + Add Seed Lab
            </button>

          </div>

          <AdminSeedLabFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
          />

          <AdminSeedLabTable
            seedLabs={filteredSeedLabs}
            onRemove={handleDeleteSeedLab}
          />
        </>

      )}

    </div>
  );
}