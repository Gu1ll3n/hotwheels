import React, { useState } from 'react';

export default function Categorias({ vehicles }) {
  const listaCategorias = ["Deportivos", "Muscle", "Clásicos", "Todoterreno", "Competencia"];
  const [selectedCat, setSelectedCat] = useState("Muscle");
  const [selectedCar, setSelectedCar] = useState(null);

  const autosFiltrados = vehicles.filter(v => v.category === selectedCat);
  const totalCategoria = autosFiltrados.length;
  const obtenidos = autosFiltrados.filter(v => v.owned).length;
  const faltantes = totalCategoria - obtenidos;
  const porcentaje = totalCategoria > 0 ? Math.round((obtenidos / totalCategoria) * 100) : 0;

  return (
    <div className="container-fluid h-100 p-0 m-0 text-white">
      <div className="row g-3 h-100 m-0">
        
        {/* SECTOR IZQUIERDO: SELECCIÓN */}
        <div className="col-12 col-md-3 d-flex flex-column">
          <h4 className="fw-black text-uppercase text-white mb-3" style={{ fontStyle: 'italic', textShadow: '2px 2px 0px #ff4500' }}>
            SECTORES
          </h4>
          <div className="list-group rounded-0 w-100 shadow">
            {listaCategorias.map((cat, idx) => (
              <button
                key={idx}
                className="list-group-item list-group-item-action fw-black text-uppercase py-3 text-white border-0 mb-2"
                style={{ 
                  backgroundColor: selectedCat === cat ? '#ff4500' : '#020712', 
                  fontSize: '0.85rem',
                  letterSpacing: '1px',
                  borderLeft: selectedCat === cat ? '5px solid #ffcc00' : '5px solid transparent'
                }}
                onClick={() => setSelectedCat(cat)}
              >
                <i className="fas fa-road me-2 text-warning"></i> 
                {cat === "Muscle" ? "Coches Musculosos" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* SECTOR DERECHO EXPANDIDO */}
        <div className="col-12 col-md-9 h-100 d-flex flex-column">
          <div className="p-4 flex-grow-1 rounded d-flex flex-column" 
               style={{ backgroundColor: '#091c3d', border: '2px solid #ff4500', overflow: 'hidden' }}>
            
            <h2 className="fw-black text-uppercase text-warning text-center mb-3" style={{ fontStyle: 'italic', textShadow: '3px 3px 0px #000' }}>
              {selectedCat === "Muscle" ? "Coches Musculosos" : selectedCat}
            </h2>
            
            {/* BARRA DE PROGRESO */}
            <div className="mb-2 d-flex justify-content-between align-items-center px-1">
              <span className="fw-black text-white-50 small tracking-widest">COMPETICIÓN COMPLETADA</span>
              <span className="text-success fw-black fs-5">{porcentaje}%</span>
            </div>
            <div className="progress mb-4 bg-dark" style={{ height: "14px", borderRadius: '0' }}>
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${porcentaje}%` }}></div>
            </div>

            {/* MARCADORES */}
            <div className="row g-2 mb-4">
              <div className="col-4">
                <div className="p-3 text-center rounded bg-dark border border-secondary">
                  <small className="text-white-50 d-block fw-bold mb-1" style={{ fontSize: '0.7rem' }}>EN LA PISTA</small>
                  <span className="fw-black text-white fs-3">{totalCategoria}</span>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 text-center rounded bg-dark border border-success">
                  <small className="text-success d-block fw-bold mb-1" style={{ fontSize: '0.7rem' }}>OBTENIDOS</small>
                  <span className="fw-black text-success fs-3">{obtenidos}</span>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 text-center rounded bg-dark border border-danger">
                  <small className="text-danger d-block fw-bold mb-1" style={{ fontSize: '0.7rem' }}>FALTANTES</small>
                  <span className="fw-black text-danger fs-3">{faltantes}</span>
                </div>
              </div>
            </div>

            <h5 className="fw-black text-white-50 text-uppercase mb-3 small tracking-widest" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '5px' }}>
              MODELOS DEL SECTOR (HAZ CLIC PARA VER FICHA TÉCNICA)
            </h5>
            
            {/* TARJETAS CON FONDO NEGRO Y TEXTO EN ALTO CONTRASTE */}
            <div className="flex-grow-1 overflow-y-auto pe-2" style={{ maxHeight: 'calc(100vh - 360px)' }}>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3 pb-2">
                {autosFiltrados.map(car => (
                  <div className="col" key={car.id} onClick={() => setSelectedCar(car)} style={{ cursor: 'pointer' }}>
                    <div className="card h-100 border-0 p-2 text-center bg-black shadow" style={{ borderTop: car.owned ? '4px solid #00ff66' : '4px solid #ff3333' }}>
                      <div className="rounded p-2 bg-dark mb-2 d-flex align-items-center justify-content-center" style={{ height: '110px' }}>
                        <img src={car.img} alt={car.name} className="img-fluid rounded" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                      </div>
                      <div className="p-2">
                        <div className="fw-black text-white text-uppercase fs-6">{car.name}</div>
                        <div className="mt-2">
                          <span className={`badge px-3 py-1.5 ${car.owned ? 'bg-success' : 'bg-secondary'}`}>
                            {car.owned ? "✓ POSEÍDO" : "❌ FALTA"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* MODAL INTERACTIVO DE INFORMACIÓN DETALLES */}
      {selectedCar && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-white" style={{ backgroundColor: '#091c3d', border: '3px solid #ff4500', borderRadius: '0' }}>
              <div className="modal-header bg-dark border-0">
                <h5 className="modal-title fw-black text-warning"><i className="fas fa-info-circle me-2"></i>FICHA TÉCNICA</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedCar(null)}></button>
              </div>
              <div className="modal-body text-center p-4">
                <div className="p-3 rounded bg-dark mb-3 d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                  <img src={selectedCar.img} alt={selectedCar.name} className="img-fluid" style={{ maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="fw-black text-white mb-3">{selectedCar.name}</h3>
                <div className="bg-black p-3 text-start rounded border border-secondary">
                  <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                    <span>Categoría:</span><span className="text-info fw-bold">{selectedCar.category}</span>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom border-dark">
                    <span>Año:</span><span className="text-white fw-bold">{selectedCar.year}</span>
                  </div>
                  <div className="d-flex justify-content-between py-2">
                    <span>Precio:</span><span className="text-warning fw-bold">{selectedCar.price}</span>
                  </div>
                </div>
              </div>
              <div className="modal-footer bg-dark border-0">
                <button type="button" className="btn btn-danger w-100 rounded-0" onClick={() => setSelectedCar(null)}>CERRAR</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}