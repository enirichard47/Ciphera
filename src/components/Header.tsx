import React, { useState } from 'react';
import logoImport from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavToScanForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('scan-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Scanner', href: '#scan-form', onClick: handleNavToScanForm },
    { name: 'Docs', href: '#docs' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      {/* subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-shimmer pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <img
                src={logoImport}
                alt="Ciphera"
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-cyan-500/40 hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                  (e.currentTarget as HTMLImageElement).onerror = null;
                }}
              />
              <div className="absolute inset-0 rounded-lg ring-2 ring-cyan-400/30 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Ciphera
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative z-20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-cyan-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 z-10">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          .animate-shimmer {
            background-size: 2000px 100%;
            animation: shimmer 10s linear infinite;
          }

          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}
      </style>
    </header>
  );
}
