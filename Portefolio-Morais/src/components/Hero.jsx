import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
    // Variantes para o efeito de "cascata" (Stagger) na entrada do texto
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Atraso de 0.2s entre cada linha aparecer
            },
        },
    };

    // Variantes para cada linha de texto/botão
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="hero-section position-relative d-flex align-items-center justify-content-center overflow-hidden">
            
            {/* BACKGROUND ANIMADO (Camadas) */}
            <div className="hero-bg-layers">
                <div className="hero-grid"></div>
                <div className="hero-orb orb-1"></div>
                <div className="hero-orb orb-2"></div>
                
                {/* Formas Geométricas */}
                <div className="hero-shape shape-square"></div>
                <div className="hero-shape shape-circle"></div>
                <div className="hero-shape shape-triangle"></div>
            </div>

            {/* CONTEÚDO CENTRAL (Animado com Framer Motion) */}
            <div className="container position-relative z-1 text-center">
                <div className="row justify-content-center">
                    <motion.div 
                        className="col-lg-9 col-xl-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible" 
                    >
                        
                        <motion.h1 className="display-3 fw-bold text-white mb-0" variants={itemVariants}>
                            Crafting Seamless
                        </motion.h1>
                        
                        <motion.h1 className="display-3 fw-bold text-neon mb-4 glow-text" variants={itemVariants}>
                            Digital Experiences
                        </motion.h1>
                        
                        
                        <motion.p className="lead text-muted-light mb-5 mx-auto" style={{ maxWidth: '600px' }} variants={itemVariants}>
                            Hi, I'm a <span className="text-white fw-semibold">UI/UX Designer</span> & <span className="text-white fw-semibold">Full Stack Developer</span> passionate about code and aesthetics.
                        </motion.p>

                        <motion.div className="d-flex justify-content-center gap-3" variants={itemVariants}>
                            <button className="btn btn-neon px-4 py-2 fw-semibold">
                                View Projects
                            </button>
                            <button className="btn btn-outline-neon px-4 py-2 fw-semibold">
                                Get in Touch
                            </button>
                        </motion.div>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;