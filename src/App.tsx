import React from 'react';
import { Routes, Route } from "react-router-dom";
import { NonDairyBeverage } from './pages/NonDairyBeverage';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Health Star Ratings Calculator</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/non-dairy-beverage" element={<NonDairyBeverage />} />
      </Routes>
    </div>
  );
}

export default App;
