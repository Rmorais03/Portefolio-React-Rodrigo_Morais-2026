import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container text-start">
        <h1 className="hero__title">
          Hi, I'm <span className="hero__name-gradient">Rodrigo Morais</span>
        </h1>
        <p className="hero__description">
          A 22-year-old student at ESTGV in Viseu, passionate about creating intuitive, 
          user-centered digital experiences that blend thoughtful design with functional code.
        </p>
        
        <div className="hero__cards">
          <div className="skill-card text-start">
            <div className="skill-card__header">
              <span className="skill-card__icon skill-card__icon--tech">⚡</span>
              <h3 className="skill-card__title mb-0">Technical Skills</h3>
            </div>
            <div className="skill-card__tags">
              <span className="skill-card__tag skill-card__tag--blue">React</span>
              <span className="skill-card__tag skill-card__tag--blue">CSS</span>
              <span className="skill-card__tag skill-card__tag--blue">HTML</span>
              <span className="skill-card__tag skill-card__tag--blue">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}