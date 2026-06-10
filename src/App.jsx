import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { inicialCars } from './data/hotwheelsData';
import Navbar from './components/Navbar';
import SidebarDerecho from './components/SidebarDerecho';
import Inicio from './pages/Inicio';
import MiColeccion from './pages/MiColeccion';
import Categorias from './pages/Categorias';

export default function App() {
  const [vehicles, setVehicles] = useState(inicialCars);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', width: '100vw', backgroundColor: '#020613', color: '#ffcc00' }}>
        <div className="spinner-border text-danger mb-3" style={{ width: '3rem', height: '3rem' }} role="status"></div>
        <h5 className="fw-bold tracking-widest text-uppercase italic" style={{ fontStyle: 'italic' }}>CARGANDO CONFIGURACIÓN EXPERTA...</h5>
      </div>
    );
  }

  return (
    <Router>
      {/* CONTENEDOR MULTI-PANEL EXPERTO */}
      <div className="d-flex w-100 h-100 overflow-hidden" style={{ backgroundColor: '#030b1e' }}>
        
        {/* 1. Navegación Izquierda Estática */}
        <Navbar />

        {/* 2. Cuerpo Central Dinámico */}
        <div className="flex-grow-1 h-100 p-3" style={{ backgroundColor: '#030b1e', overflow: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Inicio vehicles={vehicles} />} />
            <Route path="/coleccion" element={<MiColeccion vehicles={vehicles} setVehicles={setVehicles} />} />
            <Route path="/categorias" element={<Categorias vehicles={vehicles} />} />
          </Routes>
        </div>

        {/* 3. Menú de Novedades Derecho Estático */}
        <SidebarDerecho />

      </div>
    </Router>
  );
}