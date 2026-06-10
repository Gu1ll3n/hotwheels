import React from 'react';

export default function SidebarDerecho() {
  return (
    <div className="h-100 p-3 d-none d-xl-flex flex-column gap-3" 
         style={{ width: '320px', backgroundColor: '#020714', borderLeft: '2px solid #0d2046', flexShrink: 0, overflowY: 'auto' }}>
      
      {/* SECCIÓN TRACK BUILDS */}
      <div className="p-3 rounded position-relative overflow-hidden" 
           style={{ background: 'linear-gradient(180deg, #091c3d 0%, #040e22 100%)', border: '1px solid #ff4500' }}>
        <h6 className="text-uppercase fw-black italic text-white mb-2" style={{ fontStyle: 'italic' }}>TRACK BUILDS</h6>
        <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&auto=format&fit=crop&q=60" 
             className="img-fluid rounded mb-2" alt="Track" style={{ height: '110px', width: '100%', objectFit: 'cover' }} />
        <div className="bg-warning text-dark text-center fw-bold py-1 text-uppercase small" style={{ letterSpacing: '1px' }}>
          BUILD YOUR EPIC TRACK!
        </div>
      </div>

      {/* SECCIÓN GAMING HUB */}
      <div className="p-3 rounded" style={{ background: 'linear-gradient(180deg, #091c3d 0%, #040e22 100%)', border: '1px solid #00bcff' }}>
        <h6 className="text-uppercase fw-black italic text-info mb-2" style={{ fontStyle: 'italic' }}>GAMING HUB</h6>
        <div className="position-relative mb-2">
          <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&auto=format&fit=crop&q=60" 
               className="img-fluid rounded" alt="Game" style={{ height: '90px', width: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center w-100 fw-bold small">
            <i className="fas fa-play-circle fa-2x text-warning"></i> <br /> VER TRAILER
          </div>
        </div>
        <button className="btn btn-info btn-sm w-100 fw-bold text-uppercase rounded-0">PLAY NOW</button>
      </div>

      {/* FOOTER PISTA FLAMANTE */}
      <div className="mt-auto text-center py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <span className="text-muted small">© 2026 MATTEL / HW MASTER</span>
      </div>
    </div>
  );
}