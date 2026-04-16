import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        
        {/* BANNER CTA ANIMADO */}
        <motion.div 
          className="cta-banner text-center mx-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         
          
          <h2 className="display-4 fw-bold text-white mb-2">
            Available for Summer
          </h2>
          <h2 className="display-4 fw-bold text-neon mb-4 glow-text">
            Internship 2026
          </h2>
          
          <p className="text-muted-light mb-5 fs-5">
            Looking for opportunities in <span className="text-white fw-bold">Aveiro, Coimbra, Viseu</span>, or <span className="text-white fw-bold">Remote (PT/EN)</span>
          </p>
          
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
            <a href="mailto:hello@rodrigomorais.pt" className="btn btn-neon px-5 py-3 fw-bold fs-6">
              Get in Touch
            </a>
          </div>
          
        </motion.div>
        
      </div>
    </section>
  );
}

export default Contact;