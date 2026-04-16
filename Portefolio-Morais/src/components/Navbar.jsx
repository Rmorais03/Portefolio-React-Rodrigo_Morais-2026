import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  // Hooks do Framer Motion para controlar o scroll
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Evento que dispara sempre que fazemos scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
        <a className="navbar-brand fw-bold fs-4" href="#">
          Rodrigo <span className="text-neon">Morais</span>
        </a>
        
        {/* BOTÃO HAMBURGUER (Mobile) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
    </motion.nav>
  );
}

export default Navbar;