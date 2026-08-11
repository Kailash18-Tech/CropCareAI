import { useState } from "react";

import DiseaseStats from "../../components/officer/disease/DiseaseStats";
import DiseaseSearch from "../../components/officer/disease/DiseaseSearch";
import DiseaseCard from "../../components/officer/disease/DiseaseCard";
import DiseaseTable from "../../components/officer/disease/DiseaseTable";

import "../../styles/officer/DiseaseMonitoring.css";

const diseaseCases = [
  {
    id: 1,
    farmer: "Ramesh Kumar",
    crop: "Tomato",
    disease: "Leaf Blight",
    village: "Avinashi",
    severity: "High",
    date: "11 Aug 2026",
  },
  {
    id: 2,
    farmer: "Suresh",
    crop: "Paddy",
    disease: "Rice Blast",
    village: "Sulur",
    severity: "Medium",
    date: "10 Aug 2026",
  },
  {
    id: 3,
    farmer: "Priya",
    crop: "Chilli",
    disease: "Leaf Curl",
    village: "Palladam",
    severity: "Low",
    date: "09 Aug 2026",
  },
  {
    id: 4,
    farmer: "Arun",
    crop: "Tomato",
    disease: "Powdery Mildew",
    village: "Tiruppur",
    severity: "Medium",
    date: "08 Aug 2026",
  },
  {
    id: 5,
    farmer: "Murugan",
    crop: "Paddy",
    disease: "Rice Blast",
    village: "Avinashi",
    severity: "High",
    date: "07 Aug 2026",
  },
  {
    id: 6,
    farmer: "Kavitha",
    crop: "Chilli",
    disease: "Leaf Curl",
    village: "Sulur",
    severity: "Low",
    date: "06 Aug 2026",
  },
];

export default function DiseaseMonitoring() {

  const [searchTerm, setSearchTerm] = useState("");
  const [diseaseFilter, setDiseaseFilter] = useState("All");
  const [villageFilter, setVillageFilter] = useState("All");
  const [severityFilter, setSeverityFilter] = useState("All");

  /* =========================================================
     FILTER DISEASE CASES
     ========================================================= */

  const filteredCases = diseaseCases.filter((item) => {

    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      item.farmer.toLowerCase().includes(search) ||
      item.crop.toLowerCase().includes(search) ||
      item.disease.toLowerCase().includes(search) ||
      item.village.toLowerCase().includes(search);

    const matchesDisease =
      diseaseFilter === "All" ||
      item.disease === diseaseFilter;

    const matchesVillage =
      villageFilter === "All" ||
      item.village === villageFilter;

    const matchesSeverity =
      severityFilter === "All" ||
      item.severity === severityFilter;

    return (
      matchesSearch &&
      matchesDisease &&
      matchesVillage &&
      matchesSeverity
    );
  });

  return (
    <div className="disease-monitoring-page">

      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <div className="disease-monitoring-header">
        <div>
          <h1>Disease Monitoring</h1>

          <p>
            Monitor crop disease reports and identify disease
            trends across your district.
          </p>
        </div>
      </div>


      {/* =====================================================
          STATISTICS
          ===================================================== */}

      <DiseaseStats />


      {/* =====================================================
          SEARCH & FILTER
          ===================================================== */}

      <DiseaseSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        diseaseFilter={diseaseFilter}
        setDiseaseFilter={setDiseaseFilter}
        villageFilter={villageFilter}
        setVillageFilter={setVillageFilter}
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
      />


      {/* =====================================================
          DISEASE CASE CARDS
          ===================================================== */}

      <DiseaseCard diseaseCases={filteredCases} />


      {/* =====================================================
          DISEASE TABLE
          ===================================================== */}

      <DiseaseTable diseaseCases={filteredCases} />

    </div>
  );
}