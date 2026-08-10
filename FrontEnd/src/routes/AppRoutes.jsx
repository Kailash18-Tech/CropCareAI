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

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Farmer Pages */}
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

    </Routes>
  );
}