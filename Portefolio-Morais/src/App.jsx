import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}