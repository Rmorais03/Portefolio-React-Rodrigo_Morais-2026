import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-4 pb-4">
      <div className="container">
      {/* "Logo" */}
      <a className="navbar-brand fw-bold fs-4" href="#">Rodrigo <span className="text-neon fw-bold fs-4">Morais</span>
      </a>
      {/* BOTAO HAMBURGUER (Para Mobile) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS DE NAVEGAÇÃO */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link nav-custom-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-custom-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-custom-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;