import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import AboutUs from './pages/About_us/AboutUs';
import Home from './pages/Home/Home';
import NotFound from './pages/Not_found/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
