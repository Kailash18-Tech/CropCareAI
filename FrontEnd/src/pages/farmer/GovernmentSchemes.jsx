import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SchemeCard from "../../components/farmer/schemes/SchemeCard";
import "../../styles/farmer/GovernmentSchemes.css";

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

const GovernmentSchemes = () => {
  const [bookmarkedSchemes, setBookmarkedSchemes] =
    useState(() => {
      try {
        const saved = localStorage.getItem(
          "cropcare-bookmarked-schemes"
        );

        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    });

  useEffect(() => {
    localStorage.setItem(
      "cropcare-bookmarked-schemes",
      JSON.stringify(bookmarkedSchemes)
    );
  }, [bookmarkedSchemes]);

  const handleBookmark = (schemeId) => {
    setBookmarkedSchemes((current) => {
      if (current.includes(schemeId)) {
        return current.filter((id) => id !== schemeId);
      }

      return [...current, schemeId];
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

  return (
    <div className="government-schemes-page">

      {/* Page Header */}
      <div className="schemes-header">

        <div>
          <p className="schemes-eyebrow">
            CROPCARE AI
          </p>

          <h1>Government Schemes</h1>

          <p className="schemes-subtitle">
            Explore government schemes and support programs
            available for farmers.
          </p>
        </div>

        {/* SAVED SCHEMES CLICKABLE BOX */}
        <Link
          to="/farmer/savedschemes"
          className="schemes-saved-count"
          aria-label="Open saved schemes"
        >
          <span>🔖</span>

          <div>
            <strong>
              {bookmarkedSchemes.length}
            </strong>

            <small>
              Saved Schemes
            </small>
          </div>
        </Link>

      </div>

      {/* Information Banner */}
      <div className="schemes-info-banner">

        <div className="schemes-info-icon">
          🏛️
        </div>

        <div>
          <h2>
            Farmer Welfare Schemes
          </h2>

          <p>
            Find financial assistance, crop insurance,
            irrigation support, agricultural credit, and
            other government benefits in one place.
          </p>
        </div>

      </div>

      {/* Schemes */}
      <section className="schemes-section">

        <div className="schemes-section-header">

          <div>
            <h2>
              Available Schemes
            </h2>

            <p>
              Browse schemes and save the ones you may need
              later.
            </p>
          </div>

          <span className="schemes-count">
            {SCHEMES.length} Schemes
          </span>

        </div>

        <div className="schemes-grid">

          {SCHEMES.map((scheme) => (
            <SchemeCard
              key={scheme.id}
              scheme={scheme}
              isBookmarked={bookmarkedSchemes.includes(
                scheme.id
              )}
              onBookmark={handleBookmark}
              onApply={handleApply}
            />
          ))}

        </div>

      </section>

      {/* Official Portal Notice */}
      <div className="schemes-portal-notice">

        <span>ℹ️</span>

        <p>
          Applications are completed through the respective
          official government portals. CropCare AI does not
          submit applications on your behalf.
        </p>

      </div>

    </div>
  );
};

export default GovernmentSchemes;