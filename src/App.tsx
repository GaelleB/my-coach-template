import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Offers from './components/Offers';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <main className="space-y-16 pt-20">
        <Hero />
        <About />
        <Offers />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        Site fictif réalisé par Gaëlle – GB WebAssist
      </footer>
    </div>
  );
}