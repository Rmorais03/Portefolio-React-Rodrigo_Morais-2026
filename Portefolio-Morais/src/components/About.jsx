import React from 'react';

// Se já tens alguns destes na pasta assets, podes importá-los assim:
// import figmaIcon from '../assets/figma.svg';
// import reactIcon from '../assets/react.svg';

function About() {
  // Array com os dados das tuas skills para gerar os cartões dinamicamente
  const skillsData = [
    { id: 1, name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 2, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 4, name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { id: 5, name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg' },
    { id: 6, name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* COLUNA ESQUERDA: Texto */}
          <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
            <h2 className="display-5 fw-bold text-white mb-4">
              About <span className="text-neon">Me</span>
            </h2>
            <p className="text-muted-light mb-4">
              Currently studying <span className="text-white fw-bold">Multimedia Technology & Design</span> at ESTGV.
            </p>
            <p className="text-muted-light">
              Bridging the gap between design and development, I create digital experiences that are not only visually stunning but also technically robust and user-centric.
            </p>
          </div>

          {/* COLUNA DIREITA: Grelha de Skills */}
          <div className="col-lg-6 offset-lg-1">
            <h4 className="fw-bold mb-4">
              <span className="text-neon">Skills</span> <span className="text-white">& Tools</span>
            </h4>
            
            {/* Grelha Bootstrap: 3 colunas em ecrãs grandes, 2 em tablets, 2 em telemóveis */}
            <div className="row row-cols-2 row-cols-md-3 g-4">
              {skillsData.map((skill) => (
                <div className="col" key={skill.id}>
                  <div className="skill-card">
                    {/* Aqui podes trocar a tag img src pela tua variável importada dos assets */}
                    <img src={skill.icon} alt={`${skill.name} logo`} className="skill-icon" />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;