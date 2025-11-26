import React, { useState } from 'react';
import { Menu, X, GraduationCap, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Programa', href: '#programa' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Comunidad', href: '#comunidad' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md pt-4 pb-2 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-600/20">
                <GraduationCap size={24} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">EducaT</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white px-2 py-1.5 rounded-full border border-slate-200 shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
             <a href="#contacto" className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-900 hover:text-white transition-all uppercase tracking-wide">
                Contáctanos
                <ArrowUpRight size={18} />
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900 p-2 bg-white rounded-xl border border-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-2xl font-black text-slate-800 hover:text-blue-600 px-2 py-3 border-b border-slate-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-8 flex flex-col gap-4">
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg shadow-xl uppercase">
                Iniciar Test Gratuito
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};