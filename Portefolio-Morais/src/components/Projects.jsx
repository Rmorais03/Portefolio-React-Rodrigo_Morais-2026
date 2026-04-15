import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Projects() {
  const projectsData = [
    {
      title: "Booklets de Ginástica",
      desc: "Design de cadernetas de cromos interativas para um evento de ginástica de verão, focadas no engajamento dos atletas.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Edição de Vídeo",
      desc: "Trabalhos de edição de vídeo dinâmicos focados em redes sociais e promoção de eventos.",
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Portefólio Web",
      desc: "Desenvolvimento deste portefólio interativo utilizando React, Bootstrap e CSS customizado.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold hero__name-gradient d-inline-block">Os Meus Projetos</h2>
        </div>
        
        <Row className="g-4">
          {/* Usamos um map para gerar os cartões de forma mais limpa */}
          {projectsData.map((project, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0 text-start">
                <Card.Img variant="top" src={project.img} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold fs-5 mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted" style={{ lineHeight: '1.6' }}>
                    {project.desc}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0 px-4 pb-4 pt-0">
                  <Button variant="outline-primary" size="sm" className="rounded-pill px-4">Ver Detalhes</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}