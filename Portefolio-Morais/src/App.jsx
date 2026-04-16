import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    <div className="bg-dark text-white min-vh-100">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        
        <Contact />
        
        
        <Footer />
        
      </main>
    </div>
    </>
  );
}