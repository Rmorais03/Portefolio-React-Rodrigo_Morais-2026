import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (id) => {
    return activeSection === id 
      ? "navbar__link navbar__link--active" 
      : "navbar__link";
  };

  return (
    <>
      {/* Usamos fixed-top e shadow-sm do Bootstrap diretamente aqui! */}
      <nav className="navbar fixed-top bg-white shadow-sm" style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div className="container d-flex justify-content-between align-items-center h-100">
          
          <a href="#home" className="navbar__logo">RM</a>
          
          <div className="navbar__menu d-none d-md-flex align-items-center gap-2">
            <a href="#home" className={getLinkClass('home')}>Home</a>
            <a href="#sobre" className={getLinkClass('sobre')}>Sobre Mim</a>
            <a href="#projects" className={getLinkClass('projects')}>Projetos</a>
            <a href="#contact" className={getLinkClass('contact')}>Contacto</a>
          </div>

          <button onClick={toggleMenu} className="navbar__toggle d-md-none border-0 bg-transparent" aria-label="Open menu">
             {/* Ícone Hamburguer */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu__backdrop" onClick={toggleMenu}></div>
        <div className="mobile-menu__panel">
          <div className="mobile-menu__header">
            <span className="mobile-menu__title">Menu</span>
            <button onClick={toggleMenu} className="mobile-menu__close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="mobile-menu__nav">
            <a href="#home" className="mobile-menu__link" onClick={toggleMenu}>Home</a>
            <a href="#sobre" className="mobile-menu__link" onClick={toggleMenu}>Sobre Mim</a>
            <a href="#projects" className="mobile-menu__link" onClick={toggleMenu}>Projetos</a>
            <a href="#contact" className="mobile-menu__link" onClick={toggleMenu}>Contacto</a>
          </nav>
        </div>
      </div>
    </>
  );
}