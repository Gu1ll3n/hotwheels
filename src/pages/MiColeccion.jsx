import React, { useState } from 'react';

export default function MiColeccion({ vehicles, setVehicles }) {
  const [search, setSearch] = useState("");

  const toggleOwned = (id) => {
    setVehicles(vehicles.map(v => v.id === id ? { ...v, owned: !v.owned } : v));
  };

  const toggleFavorite = (id) => {
    setVehicles(vehicles.map(v => v.id === id ? { ...v, favorite: !v.favorite } : v));
  };

  const filtered = vehicles.filter(v => v.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="h-100 d-flex flex-column text-white">
      <div className="row align-items-center mb-4 pb-3 border-bottom border-secondary g-2">
        <div className="col-12 col-md-6">
          <h2 className="fw-black text-uppercase m-0" style={{ fontStyle: 'italic', textShadow: '2px 2px 0px #ff4500' }}>
            NUEVAS ADQUISICIONES
          </h2>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group" style={{ border: '2px solid #ff4500' }}>
            <span className="input-group-text bg-dark border-0 text-warning"><i className="fas fa-search"></i></span>
            <input 
              type="text" 
              className="form-control bg-dark text-white fw-bold border-0 py-2" 
              placeholder="Buscar por modelo..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ color: '#ffffff' }}
            />
          </div>
        </div>
      </div>

      <div className="flex-grow-1 overflow-y-auto pe-1">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 pb-4">
          {filtered.map(car => (
            <div className="col" key={car.id}>
              <div className="card h-100 p-2 position-relative" style={{ backgroundColor: '#091c3d', border: '2px solid #0055b3' }}>
                <button className="btn position-absolute top-0 end-0 m-2 z-3" onClick={() => toggleFavorite(car.id)} style={{ border: 'none', background: 'transparent' }}>
                  <i className={`fa-star fs-4 ${car.favorite ? 'fas text-warning' : 'far text-white-50'}`}></i>
                </button>
                
                {/* Contenedor de Imagen con formato consistente */}
                <div className="text-center p-2 rounded mb-2 bg-black d-flex align-items-center justify-content-center" style={{ height: '160px', overflow: 'hidden' }}>
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="img-fluid" 
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                  />
                </div>

                <div className="card-body p-1">
                  <h5 className="fw-black text-white text-uppercase">{car.name}</h5>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="badge bg-primary">{car.category}</span>
                    <span className="fw-black text-warning">{car.price}</span>
                  </div>
                  <button 
                    className={`btn btn-sm w-100 mt-2 ${car.owned ? 'btn-success' : 'btn-danger'}`}
                    onClick={() => toggleOwned(car.id)}
                  >
                    {car.owned ? '✓ EN STOCK' : 'AÑADIR A COLECCIÓN'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}