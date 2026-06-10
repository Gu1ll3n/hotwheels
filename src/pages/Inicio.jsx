import React from 'react';

export default function Inicio({ vehicles }) {
  const total = vehicles.length;
  const obtenidos = vehicles.filter(v => v.owned).length;
  const faltantes = total - obtenidos;

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      {/* HERO BANNER CON IMAGEN DE PISTA DE FONDO */}
      <div className="p-5 rounded position-relative overflow-hidden flex-grow-1 d-flex flex-column justify-content-center mb-3 shadow-lg" 
           style={{ 
             backgroundImage: 'linear-gradient(to bottom, rgba(3, 11, 30, 0.5), rgba(3, 11, 30, 0.85)), url("https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=1200&auto=format&fit=crop&q=80")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             border: '2px solid #ff4500'
           }}>
        
        <div className="position-relative z-1 text-center py-4">
          <h1 className="display-3 fw-black text-white italic mb-3 tracking-wide" 
              style={{ textShadow: '4px 4px 0px #ff4500, 7px 7px 0px #000', fontStyle: 'italic', letterSpacing: '2px' }}>
            REAVIVA <br /> TU PASIÓN.
          </h1>
          <p className="fs-5 text-warning mx-auto mb-4 fw-bold text-uppercase px-3" 
             style={{ maxW: '700px', textShadow: '2px 2px 4px #000', letterSpacing: '1px' }}>
            GESTIONA LA PISTA, REVISA TUS ADQUISICIONES Y COMPLETA EL ÁREA DE ALMACENAMIENTO DIGITAL.
          </p>
          <button className="btn btn-warning btn-lg fw-black text-uppercase px-5 py-3 shadow-lg" 
                  style={{ borderRadius: '0', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)', letterSpacing: '1px' }}>
            VER RESUMEN <i className="fas fa-chevron-right ms-2"></i>
          </button>
        </div>
      </div>

      {/* ARREGLO DE VISIBILIDAD: CONTADORES INFERIORES EN COLORES FUERTES */}
      <div className="row g-2">
        <div className="col-4">
          <div className="p-3 text-center" style={{ backgroundColor: '#091c3d', border: '1px solid #00bcff', borderTop: '4px solid #00bcff' }}>
            <small className="d-block fw-bold mb-1 text-white-50" style={{ letterSpacing: '1px' }}>TOTAL COCHES</small>
            <h2 className="fw-black text-white m-0" style={{ textShadow: '0 0 10px #00bcff' }}>{total}</h2>
          </div>
        </div>
        <div className="col-4">
          <div className="p-3 text-center" style={{ backgroundColor: '#091c3d', border: '1px solid #00ff66', borderTop: '4px solid #00ff66' }}>
            <small className="d-block fw-bold mb-1 text-white-50" style={{ letterSpacing: '1px' }}>OBTENIDOS</small>
            <h2 className="fw-black text-success m-0" style={{ textShadow: '0 0 10px #00ff66' }}>{obtenidos}</h2>
          </div>
        </div>
        <div className="col-4">
          <div className="p-3 text-center" style={{ backgroundColor: '#091c3d', border: '1px solid #ff3333', borderTop: '4px solid #ff3333' }}>
            <small className="d-block fw-bold mb-1 text-white-50" style={{ letterSpacing: '1px' }}>FALTANTES</small>
            <h2 className="fw-black text-danger m-0" style={{ textShadow: '0 0 10px #ff3333' }}>{faltantes}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}