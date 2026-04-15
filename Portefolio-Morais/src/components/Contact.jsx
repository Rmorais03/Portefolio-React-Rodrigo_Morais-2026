import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#f3f0ff' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="bg-white p-5 rounded-4 shadow-sm text-start">
              <h2 className="mb-4 fw-bold">Vamos falar!</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-semibold text-secondary">Nome</Form.Label>
                  <Form.Control type="text" placeholder="O teu nome" className="p-3 bg-light border-0" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold text-secondary">Email</Form.Label>
                  <Form.Control type="email" placeholder="nome@exemplo.com" className="p-3 bg-light border-0" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-semibold text-secondary">Mensagem</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Como te posso ajudar?" className="p-3 bg-light border-0" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 rounded-pill py-3 fw-bold" style={{ backgroundColor: '#2563eb', border: 'none' }}>
                  Enviar Mensagem
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}