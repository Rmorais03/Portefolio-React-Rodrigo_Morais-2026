import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <section id="sobre" className="py-5" style={{ backgroundColor: '#f9fafb' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-start">
            <h2 className="mb-4 fw-bold hero__name-gradient d-inline-block">O Meu Percurso</h2>
            <p className="lead text-secondary">
              Sou atualmente estudante da licenciatura de <strong>Tecnologias, Design e Multimédia na ESTGV</strong>. 
              O meu percurso tem sido pautado pela exploração de diferentes meios digitais e visuais.
            </p>
            <p className="lead text-secondary">
              Tenho vindo a acumular experiência prática em diversas áreas, com destaque para a <strong>edição de vídeo</strong> e o design editorial. 
              Recentemente, tive a oportunidade de criar "booklets" (estilo caderneta de cromos) para um evento de ginástica durante o verão, 
              trabalhando em conjunto com uma equipa organizadora de eventos desportivos. Esta experiência permitiu-me aliar a criatividade 
              à funcionalidade, criando um produto interativo e memorável para os participantes.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}