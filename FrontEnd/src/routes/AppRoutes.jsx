
import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Features from "../pages/public/Features";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";
import Signup from "../pages/public/Signup";

import FarmerLayout from "../components/farmer/layout/FarmerLayout";
import FarmerDashboard from "../pages/farmer/FarmerDashboard";
import DiseaseDetection from "../pages/farmer/DiseaseDetection";
import SoilAdvice from "../pages/farmer/SoilAdvice";
import MandiPrices from "../pages/farmer/MandiPrices";
import SeedLabs from "../pages/farmer/SeedLabs";
import Weather from "../pages/farmer/Weather";
import GovernmentSchemes from "../pages/farmer/GovernmentSchemes";
import SavedSchemes from "../pages/farmer/SavedSchemes";
import Reports from "../pages/farmer/Reports";
import Profile from "../pages/farmer/Profile";
import Settings from "../pages/farmer/Settings";
import Notifications from "../pages/farmer/Notifications";

// Officer
import OfficerLayout from "../components/officer/layout/OfficerLayout";
import OfficerDashboard from "../pages/officer/OfficerDashboard";
import FarmerManagement from "../pages/officer/FarmerManagement";
import DiseaseMonitoring from "../pages/officer/DiseaseMonitoring";
import SoilInformation from "../pages/officer/SoilInformation";
import MandiMonitoring from "../pages/officer/MandiMonitoring";
import SchemeManagement from "../pages/officer/SchemeManagement";
import OfficerReports from "../pages/officer/OfficerReports";
import OfficerProfile from "../pages/officer/OfficerProfile";
import OfficerNotifications from "../pages/officer/OfficerNotifications";
import OfficerSettings from "../pages/officer/OfficerSettings";

export default function AppRoutes() {
  return (
    <Routes>

      {/* =========================
          PUBLIC PAGES
      ========================= */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />


      {/* =========================
          FARMER PAGES
      ========================= */}
      <Route path="/farmer" element={<FarmerLayout />}>

        <Route index element={<FarmerDashboard />} />

        <Route path="disease" element={<DiseaseDetection />} />
        <Route path="soil" element={<SoilAdvice />} />
        <Route path="mandi" element={<MandiPrices />} />
        <Route path="seedlabs" element={<SeedLabs />} />
        <Route path="weather" element={<Weather />} />
        <Route path="schemes" element={<GovernmentSchemes />} />
        <Route path="savedschemes" element={<SavedSchemes />} />
        <Route path="reports" element={<Reports />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="notifications" element={<Notifications />} />

      </Route>


      {/* =========================
          DISTRICT OFFICER PAGES
      ========================= */}
      <Route path="/officer" element={<OfficerLayout />}>

        <Route index element={<OfficerDashboard />} />
        <Route path="farmers" element={<FarmerManagement />} />
        <Route path="diseasereports" element={<DiseaseMonitoring />} />
          <Route path="soilinfo" element={<SoilInformation />} />
           <Route path="mandi" element={<MandiMonitoring />} />
            <Route path="schemes" element={<SchemeManagement />} />
             <Route path="reports" element={<OfficerReports />} />
             <Route path="profile" element={<OfficerProfile />} />
            <Route path="notifications" element={<OfficerNotifications />} />
             <Route path="settings" element={<OfficerSettings />} />
      </Route>

    </Routes>
  );
}

