import React from 'react';

function Footer() {
  // Podes usar as versões oficiais do Devicon para GitHub e LinkedIn
  const githubIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
  const linkedinIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg";

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4 mb-4 align-items-center">
          
          {/* Lado Esquerdo: Branding */}
          <div className="col-lg-5 text-center text-lg-start">
            <h4 className="fw-bold fs-4 mb-2">
              <span className="text-white">Rodrigo</span> <span className="text-neon">Morais</span>
            </h4>
            <p className="text-muted-light mb-1" style={{ fontSize: '0.95rem' }}>
              UI/UX Designer & Full Stack Developer
            </p>
            <p className="text-muted-light m-0" style={{ fontSize: '0.85rem' }}>
              Based in Portugal
            </p>
          </div>

          {/* Lado Direito: Links de Contacto */}
          <div className="col-lg-7">
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-end gap-4">
              <a href="https://www.linkedin.com/in/rodrigo-morais-b69239360/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <div className="footer-icon-wrapper">
                  <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                LinkedIn
              </a>
              <a href="https://github.com/Rmorais03" target="_blank" rel="noopener noreferrer" className="footer-link">
                <div className="footer-icon-wrapper">
                  <img src={githubIcon} alt="GitHub" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                GitHub
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright Line */}
        <div className="text-center pt-4 border-top" style={{ borderColor: '#262c3d !important' }}>
          <p className="text-muted-light mb-0" style={{ fontSize: '0.85rem' }}>
            © 2026 All rights reserved. Built with React & Bootstrap.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;