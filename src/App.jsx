import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SolarPage from './pages/Solar';
import HealthcarePage from './pages/Healthcare';
import OilGasPage from './pages/OilGas';
import InsurancePage from './pages/Insurance';
import CommercialRealEstatePage from './pages/CommercialRealEstate';
import IndustrialPage from './pages/Industrial';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solar" element={<SolarPage />} />
      <Route path="/healthcare" element={<HealthcarePage />} />
      <Route path="/oil-gas" element={<OilGasPage />} />
      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/commercial-real-estate" element={<CommercialRealEstatePage />} />
      <Route path="/industrial" element={<IndustrialPage />} />
    </Routes>
  );
}
