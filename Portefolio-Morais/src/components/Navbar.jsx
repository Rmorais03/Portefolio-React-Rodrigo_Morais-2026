import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Novo estado para o menu

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Se o menu mobile estiver aberto, não escondemos a navbar no scroll
    if (latest > 100 && latest > previous && !isExpanded) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const closeMenu = () => setIsExpanded(false);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="navbar navbar-expand-lg navbar-dark fixed-top glass-nav"
    >
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand fw-bold fs-4" href="#" onClick={closeMenu}>
          Rodrigo <span className="text-neon">Morais</span>
        </a>
        
        {/* BOTÃO HAMBURGUER */}
        <button 
          className={`navbar-toggler ${!isExpanded ? 'collapsed' : ''}`}
          type="button" 
          onClick={() => setIsExpanded(!isExpanded)} // Controlado pelo React
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS DE NAVEGAÇÃO */}
        <div className={`collapse navbar-collapse justify-content-end ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav gap-4 ms-auto text-center py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link nav-custom-link" href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-custom-link" href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-custom-link" href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;