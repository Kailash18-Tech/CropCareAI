import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SchemeCard from "../../components/farmer/schemes/SchemeCard";
import "../../styles/farmer/SavedSchemes.css";

const SCHEMES = [
  {
    id: 1,
    icon: "🌾",
    category: "Financial Support",
    name: "PM-KISAN",
    description:
      "Provides income support to eligible farmer families to help meet agricultural and household needs.",
    benefit: "Up to ₹6,000 per year",
    eligibility: "Eligible landholding farmer families",
    applyUrl: "https://pmkisan.gov.in/",
  },
  {
    id: 2,
    icon: "🌱",
    category: "Crop Insurance",
    name: "Pradhan Mantri Fasal Bima Yojana",
    description:
      "Provides crop insurance protection against losses caused by natural calamities, pests, and diseases.",
    benefit: "Crop insurance coverage",
    eligibility:
      "Farmers growing notified crops in notified areas",
    applyUrl: "https://pmfby.gov.in/",
  },
  {
    id: 3,
    icon: "💧",
    category: "Irrigation",
    name: "Pradhan Mantri Krishi Sinchayee Yojana",
    description:
      "Promotes efficient water use and supports irrigation infrastructure for improved agricultural productivity.",
    benefit: "Irrigation support",
    eligibility:
      "Eligible farmers and agricultural beneficiaries",
    applyUrl: "https://pmksy.gov.in/",
  },
  {
    id: 4,
    icon: "🌿",
    category: "Agriculture",
    name: "Paramparagat Krishi Vikas Yojana",
    description:
      "Supports farmers in adopting organic farming practices and improving soil health through sustainable agriculture.",
    benefit: "Organic farming support",
    eligibility:
      "Farmers participating in eligible organic farming clusters",
    applyUrl: "https://pgsindia-ncof.gov.in/",
  },
  {
    id: 5,
    icon: "🏦",
    category: "Agricultural Credit",
    name: "Kisan Credit Card",
    description:
      "Provides farmers access to timely credit for crop production and other agricultural requirements.",
    benefit: "Accessible agricultural credit",
    eligibility:
      "Eligible farmers and agricultural producers",
    applyUrl: "https://www.myscheme.gov.in/",
  },
  {
    id: 6,
    icon: "🚜",
    category: "Farm Mechanization",
    name: "Sub-Mission on Agricultural Mechanization",
    description:
      "Promotes access to agricultural machinery and equipment to improve farm productivity and reduce manual effort.",
    benefit: "Farm machinery assistance",
    eligibility:
      "Eligible farmers and agricultural groups",
    applyUrl: "https://agrimachinery.nic.in/",
  },
];

const SavedSchemes = () => {
  const [bookmarkedSchemes, setBookmarkedSchemes] =
    useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(
        "cropcare-bookmarked-schemes"
      );

      if (saved) {
        setBookmarkedSchemes(JSON.parse(saved));
      }
    } catch {
      setBookmarkedSchemes([]);
    }
  }, []);

  const handleBookmark = (schemeId) => {
    setBookmarkedSchemes((current) => {
      const updated = current.filter(
        (id) => id !== schemeId
      );

      localStorage.setItem(
        "cropcare-bookmarked-schemes",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const handleApply = (scheme) => {
    if (!scheme.applyUrl) {
      return;
    }

    window.open(
      scheme.applyUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const savedSchemes = SCHEMES.filter((scheme) =>
    bookmarkedSchemes.includes(scheme.id)
  );

  return (
    <div className="saved-schemes-page">

      {/* Header */}
      <div className="saved-schemes-header">

        <div>
          <p className="saved-schemes-eyebrow">
            CROPCARE AI
          </p>

          <h1>Saved Schemes</h1>

          <p className="saved-schemes-subtitle">
            Quickly access the government schemes you have
            bookmarked.
          </p>
        </div>

        <div className="saved-schemes-count">
          🔖 {savedSchemes.length} Saved
        </div>

      </div>

      {/* Back Button */}
      <Link
        to="/farmer/schemes"
        className="saved-schemes-back-btn"
      >
        ← Back to Government Schemes
      </Link>

      {/* Saved Schemes */}
      {savedSchemes.length > 0 ? (
        <section className="saved-schemes-section">

          <div className="saved-schemes-grid">

            {savedSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                isBookmarked={true}
                onBookmark={handleBookmark}
                onApply={handleApply}
              />
            ))}

          </div>

        </section>
      ) : (
        <section className="saved-schemes-empty">

          <div className="saved-schemes-empty-icon">
            🔖
          </div>

          <h2>No Saved Schemes</h2>

          <p>
            You haven't bookmarked any government schemes
            yet.
          </p>

          <p>
            Go to Government Schemes and click the bookmark
            icon to save a scheme here.
          </p>

        </section>
      )}

    </div>
  );
};

export default SavedSchemes;