'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-blue-500 tracking-wide">
          Meško<span className="text-purple-500">Dev</span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#kontakt" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-2 text-gray-300 text-center">
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-white">Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block hover:text-white">Portfolio</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block hover:text-white">Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-white">Contact</a>
        </div>
      )}
    </header>
  );
}
