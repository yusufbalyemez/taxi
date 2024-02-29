import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import MyBookingsPage from './pages/MyBookingsPage';
import GalleryPage from './pages/GalleryPage';
import PolicyPage from './pages/PolicyPage';
import AdminPage from './pages/AdminPage';
import Bookings from './components/Admin/Bookings';
import TodayBookings from './components/Admin/TodayBookings';
import Settings from './components/Admin/Settings';
import TaxiPricePage from './pages/TaxiPricePage';
import TaxiCityTariffs from './pages/TaxiCityTariffs';
import TaxiPrices from './pages/TaxiPrices';
import './App.css';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/policy" element={<PolicyPage />} />
      <Route path="/taxi-prices" element={<TaxiPricePage/>} />
      <Route path="/city-tariffs" element={<TaxiCityTariffs/>} />
      <Route path="/prices" element={<TaxiPrices/>} />
      <Route path="/bookings/:userId" element={<MyBookingsPage />} />
      <Route path="/admin/*" element={<AdminPage />}>
        <Route index element={<TodayBookings />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      

    </Routes>
  );
}

export default App;
