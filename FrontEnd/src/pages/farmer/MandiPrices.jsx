import React, { useState } from "react";
import MandiTable from "../../components/farmer/mandi/MandiTable";
import MandiHistory from "../../components/farmer/mandi/MandiHistory";
import "../../styles/farmer/MandiPrices.css";

export default function MandiPrices() {
  const [location, setLocation] = useState("Tiruppur");

  const [selectedMarket, setSelectedMarket] =
    useState("Tiruppur Mandi");

  const [selectedCrop, setSelectedCrop] =
    useState("Tomato");

  return (
    <div className="mandi-page">

      {/* PAGE HEADER */}
      <div className="mandi-page-header">
        <div>
          <h2>Mandi Prices</h2>

          <p>
            Check the latest crop prices from your selected market.
          </p>
        </div>
      </div>

      {/* MARKET PRICES */}
      <MandiTable
        location={location}
        setLocation={setLocation}
        selectedMarket={selectedMarket}
        setSelectedMarket={setSelectedMarket}
        selectedCrop={selectedCrop}
        setSelectedCrop={setSelectedCrop}
      />

      {/* PRICE HISTORY */}
      <MandiHistory
        selectedMarket={selectedMarket}
        selectedCrop={selectedCrop}
      />

    </div>
  );
}