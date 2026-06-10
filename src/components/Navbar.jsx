import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 10px',
    color: isActive ? '#ffcc00' : '#8a99ad',
    backgroundColor: isActive ? 'rgba(255, 69, 0, 0.15)' : 'transparent',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    borderLeft: isActive ? '4px solid #ff4500' : '4px solid transparent',
    transition: 'all 0.2s ease',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
  });

  return (
    <div className="d-flex flex-column h-100 justify-content-between text-center" 
         style={{ width: '110px', backgroundColor: '#020714', borderRight: '2px solid #0d2046', flexShrink: 0 }}>
      
      <div>
        {/* LOGO SIMULADO */}
        <div className="py-4 border-bottom border-dark">
          <i className="fas fa-fire-alt text-danger fa-2x"></i>
          <div className="text-warning fw-black mt-1" style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>HW GARAGE</div>
        </div>

        {/* LINKS */}
        <div className="d-flex flex-column">
          <NavLink to="/" style={linkStyle}>
            <i className="fas fa-tachometer-alt fa-lg mb-2"></i>Panel
          </NavLink>
          <NavLink to="/coleccion" style={linkStyle}>
            <i className="fas fa-car fa-lg mb-2"></i>Garaje
          </NavLink>
          <NavLink to="/categorias" style={linkStyle}>
            <i className="fas fa-road fa-lg mb-2"></i>Pistas
          </NavLink>
        </div>
      </div>

      {/* ESTADO DEL MAESTRO */}
      <div className="pb-4 small text-muted" style={{ fontSize: '0.65rem' }}>
        <i className="fas fa-circle text-success me-1"></i> ONLINE
      </div>
    </div>
  );
}