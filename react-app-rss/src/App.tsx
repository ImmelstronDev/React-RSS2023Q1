import React from 'react';
import { Navigate, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import NewForm from './pages/Form/form';
import AboutUs from './pages/About_us/AboutUs';
import Home from './pages/Home/Home';
import NotFound from './pages/Not_found/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/form" element={<NewForm />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
