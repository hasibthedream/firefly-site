import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SolarPage from './pages/Solar';
import HealthcarePage from './pages/Healthcare';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solar" element={<SolarPage />} />
      <Route path="/healthcare" element={<HealthcarePage />} />
    </Routes>
  );
}
