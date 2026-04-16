import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const skillsData = [
    { id: 1, name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 2, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 4, name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { id: 5, name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' },
    { id: 6, name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
  ];

  // 1. Variantes do Contentor (A Grelha)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Variantes dos Itens (Cada Cartão)
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4, duration: 0.8 }, 
    },
  };

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* COLUNA ESQUERDA: Texto */}
          <motion.div 
            className="col-lg-5 mb-5 mb-lg-0 pe-lg-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-5 fw-bold text-white mb-4">
              About <span className="text-neon">Me</span>
            </h2>
            <p className="text-white mb-4">
              Currently pursuing a BSc in <span className="text-white fw-bold">"Multimedia Technology & Design"</span> at ESTGV.
            </p>
            <p className="text-white mb-4">
              Bridging the gap between design and development, I create digital experiences that are not only visually stunning but also technically robust and user-centric.
            </p>
          </motion.div>

          {/* COLUNA DIREITA: Grelha de Skills */}
          <div className="col-lg-6 offset-lg-1">
            <motion.h4 
              className="fw-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-neon">Skills</span> <span className="text-white">& Tools</span>
            </motion.h4>
            
            <motion.div 
              className="row row-cols-2 row-cols-md-3 g-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skillsData.map((skill) => (
                <motion.div className="col" key={skill.id} variants={itemVariants}>
                  <div className="skill-card">
                    {/* Classes Bootstrap mb-3 (margin-bottom) e m-0 (margin zero) adicionadas aqui! */}
                    <img src={skill.icon} alt={`${skill.name} logo`} className="skill-icon mb-3" />
                    <p className="skill-name m-0">{skill.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;