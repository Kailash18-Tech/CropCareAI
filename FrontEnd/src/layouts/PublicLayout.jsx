import React from "react";
import { Outlet } from "react-router-dom";

import PublicHeader from "../components/public/PublicHeader";
import PublicFooter from "../components/public/PublicFooter";

export default function PublicLayout() {
  return (
    <div className="public-layout">

      <PublicHeader />

      <main className="public-layout-content">
        <Outlet />
      </main>

      <PublicFooter />

    </div>
  );
}