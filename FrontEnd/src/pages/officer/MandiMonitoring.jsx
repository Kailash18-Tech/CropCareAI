import { useState } from "react";

import MandiDistrictSelect from "../../components/officer/mandi/MandiDistrictSelect";
import MandiStats from "../../components/officer/mandi/MandiStats";
import MandiTable from "../../components/officer/mandi/MandiTable";
import MandiCard from "../../components/officer/mandi/MandiCard";

import "../../styles/officer/MandiMonitoring.css";

const mandiData = {
  Tiruppur: [
    {
      mandi: "Avinashi Mandi",
      crop: "Tomato",
      price: "₹1,840",
      date: "11 Aug 2026",
    },
    {
      mandi: "Avinashi Mandi",
      crop: "Paddy",
      price: "₹2,450",
      date: "11 Aug 2026",
    },
    {
      mandi: "Palladam Mandi",
      crop: "Chilli",
      price: "₹5,200",
      date: "11 Aug 2026",
    },
    {
      mandi: "Sulur Mandi",
      crop: "Maize",
      price: "₹2,180",
      date: "11 Aug 2026",
    },
  ],

  Coimbatore: [
    {
      mandi: "Coimbatore Mandi",
      crop: "Tomato",
      price: "₹1,920",
      date: "11 Aug 2026",
    },
    {
      mandi: "Coimbatore Mandi",
      crop: "Paddy",
      price: "₹2,500",
      date: "11 Aug 2026",
    },
    {
      mandi: "Pollachi Mandi",
      crop: "Coconut",
      price: "₹3,450",
      date: "11 Aug 2026",
    },
  ],

  Erode: [
    {
      mandi: "Erode Mandi",
      crop: "Turmeric",
      price: "₹12,400",
      date: "11 Aug 2026",
    },
    {
      mandi: "Bhavani Mandi",
      crop: "Banana",
      price: "₹2,850",
      date: "11 Aug 2026",
    },
    {
      mandi: "Erode Mandi",
      crop: "Paddy",
      price: "₹2,420",
      date: "11 Aug 2026",
    },
  ],

  Salem: [
    {
      mandi: "Salem Mandi",
      crop: "Tomato",
      price: "₹1,780",
      date: "11 Aug 2026",
    },
    {
      mandi: "Salem Mandi",
      crop: "Maize",
      price: "₹2,100",
      date: "11 Aug 2026",
    },
    {
      mandi: "Attur Mandi",
      crop: "Tapioca",
      price: "₹2,300",
      date: "11 Aug 2026",
    },
  ],

  Namakkal: [
    {
      mandi: "Namakkal Mandi",
      crop: "Paddy",
      price: "₹2,460",
      date: "11 Aug 2026",
    },
    {
      mandi: "Namakkal Mandi",
      crop: "Maize",
      price: "₹2,150",
      date: "11 Aug 2026",
    },
    {
      mandi: "Rasipuram Mandi",
      crop: "Tomato",
      price: "₹1,820",
      date: "11 Aug 2026",
    },
  ],
};

export default function MandiMonitoring() {
  const [selectedDistrict, setSelectedDistrict] =
    useState("Tiruppur");

  const selectedMandiData =
    mandiData[selectedDistrict] || [];

  return (
    <div className="mandi-monitoring-page">

      {/* Page Header */}
      <div className="mandi-page-header">
        <div>
          <p className="mandi-page-label">
            Officer Dashboard
          </p>

          <h1>Mandi Monitoring</h1>

          <p className="mandi-page-description">
            Monitor mandi markets and crop prices
            across districts.
          </p>
        </div>
      </div>

      {/* Mandi Content */}
      <div className="mandi-content">

        {/* District Selection */}
        <div className="mandi-district-wrapper">
          <MandiDistrictSelect
            onDistrictChange={setSelectedDistrict}
          />
        </div>

        {/* Statistics */}
        <div className="mandi-stats-wrapper">
         <MandiStats
  mandiData={selectedMandiData}
/>
        </div>

        {/* Mandi Price Table */}
        <div className="mandi-table-wrapper-section">
          <MandiTable
            selectedDistrict={selectedDistrict}
          />
        </div>

        {/* Mobile Mandi Cards */}
        <div className="mandi-cards-section">

          <div className="mandi-cards-header">
            <h2>Mandi Details</h2>

            <p>
              Prices in {selectedDistrict} district
            </p>
          </div>

          <div className="mandi-cards-grid">
            {selectedMandiData.map((item, index) => (
              <MandiCard
                key={`${item.mandi}-${item.crop}-${index}`}
                mandi={item.mandi}
                crop={item.crop}
                price={item.price}
                date={item.date}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}