import React from 'react';


function Hero() {
    return (
        <section className="hero-section py-5 d-flex align-items-center">
            <div className="container mt-5">
                <div className="row align-items-center">
                    {/* TEXTO (Esquerda) */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="display-3 fw-bold text-white mb-0">
                            Crafting Seamless
                        </h1>
                        <h1 className="display-3 fw-bold text-neon mb-4 glow-text">
                            Digital Experiences
                        </h1>
                        <p className="lead text-secondary mb-5 pe-lg-5">
                            Hi, I'm a <span className="text-white fw-semibold">UI/UX Designer</span> & <span className="text-white fw-semibold">Full Stack Developer</span> passionate about code and aesthetics.
                        </p>

                        <div className="d-flex gap-3">
                            <button className="btn btn-outline-neon px-4 py-2 fw-semibold">
                                View Projects
                            </button>
                            <button className="btn btn-outline-neon px-4 py-2 fw-semibold">
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    {/* VISUAL (Direita) */}
                    <div className="col-lg-6 d-flex justify-content-center">
                        {/* Placeholder para o teu Cubo 3D que vamos animar a seguir */}
                        <div className="cube-container">
                            <div className="cube-placeholder shadow-neon">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;