import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import About from './components/About';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}