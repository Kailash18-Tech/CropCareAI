import { useMemo, useState } from "react";

import FarmerStats from "../../components/officer/farmer/FarmerStats";
import FarmerSearch from "../../components/officer/farmer/FarmerSearch";
import FarmerTable from "../../components/officer/farmer/FarmerTable";
import FarmerCard from "../../components/officer/farmer/FarmerCard";

import "../../styles/officer/FarmerManagement.css";


/* =========================================================
   FARMER DATA
========================================================= */

const farmers = [
  {
    id: "FMR001",
    name: "Murugan K",
    phone: "98765 43210",
    village: "Avinashi",
    crops: "Tomato, Paddy",
    status: "Active",
    joined: "12 Jun 2026",
  },
  {
    id: "FMR002",
    name: "Ramesh P",
    phone: "98432 15678",
    village: "Palladam",
    crops: "Cotton, Chilli",
    status: "Active",
    joined: "08 Jun 2026",
  },
  {
    id: "FMR003",
    name: "Selvam R",
    phone: "97865 21430",
    village: "Tiruppur",
    crops: "Paddy",
    status: "Pending",
    joined: "09 Aug 2026",
  },
  {
    id: "FMR004",
    name: "Kumar S",
    phone: "96543 82170",
    village: "Sulur",
    crops: "Tomato, Onion",
    status: "At Risk",
    joined: "24 May 2026",
  },
  {
    id: "FMR005",
    name: "Arun M",
    phone: "95678 34120",
    village: "Avinashi",
    crops: "Banana",
    status: "Inactive",
    joined: "15 Apr 2026",
  },
  {
    id: "FMR006",
    name: "Suresh V",
    phone: "94432 56781",
    village: "Palladam",
    crops: "Tomato",
    status: "Active",
    joined: "02 Jul 2026",
  },
  {
    id: "FMR007",
    name: "Mani R",
    phone: "93678 21456",
    village: "Tiruppur",
    crops: "Paddy, Sugarcane",
    status: "Active",
    joined: "28 Jun 2026",
  },
  {
    id: "FMR008",
    name: "Prakash K",
    phone: "97845 62130",
    village: "Sulur",
    crops: "Cotton",
    status: "Pending",
    joined: "07 Aug 2026",
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function FarmerManagement() {

  /* =======================================================
     SEARCH & FILTER STATE
  ======================================================= */

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [villageFilter, setVillageFilter] = useState("All");


  /* =======================================================
     FILTER FARMERS
  ======================================================= */

  const filteredFarmers = useMemo(() => {

    return farmers.filter((farmer) => {

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        search === "" ||
        farmer.name.toLowerCase().includes(search) ||
        farmer.id.toLowerCase().includes(search) ||
        farmer.phone.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        farmer.status === statusFilter;

      const matchesVillage =
        villageFilter === "All" ||
        farmer.village === villageFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesVillage
      );
    });

  }, [
    searchTerm,
    statusFilter,
    villageFilter,
  ]);


  /* =======================================================
     VIEW FARMER
  ======================================================= */

  const handleViewFarmer = (farmer) => {

    console.log("Selected farmer:", farmer);

    alert(
      `Farmer: ${farmer.name}\n` +
      `Farmer ID: ${farmer.id}\n` +
      `Village: ${farmer.village}\n` +
      `Status: ${farmer.status}`
    );
  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="farmer-management-page">

      {/* ===================================================
          PAGE INTRODUCTION
      =================================================== */}

      <div className="farmer-management-intro">

        <div>
          <h1>Farmer Management</h1>

          <p>
            Manage and monitor registered farmers
            in your district.
          </p>
        </div>

      </div>


      {/* ===================================================
          STATISTICS
      =================================================== */}

      <FarmerStats />


      {/* ===================================================
          FARMER DIRECTORY
      =================================================== */}

      <section className="farmer-directory">

        {/* Section Header */}

        <div className="farmer-directory-header">

          <div>
            <h2>Farmer Directory</h2>

            <p>
              View, search and manage farmers
              registered in your district.
            </p>
          </div>

          <span className="farmer-count">
            {filteredFarmers.length} Farmers
          </span>

        </div>


        {/* =================================================
            SEARCH & FILTER
        ================================================= */}

        <FarmerSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          villageFilter={villageFilter}
          setVillageFilter={setVillageFilter}
        />


        {/* =================================================
            DESKTOP TABLE
        ================================================= */}

        <div className="farmer-desktop-view">

          <FarmerTable
            farmers={filteredFarmers}
            onView={handleViewFarmer}
          />

        </div>


        {/* =================================================
            MOBILE CARDS
        ================================================= */}

        <div className="farmer-mobile-view">

          {filteredFarmers.length > 0 ? (

            filteredFarmers.map((farmer) => (

              <FarmerCard
                key={farmer.id}
                farmer={farmer}
                onView={handleViewFarmer}
              />

            ))

          ) : (

            <div className="farmer-mobile-empty">
              No farmers found.
            </div>

          )}

        </div>

      </section>

    </div>
  );
}