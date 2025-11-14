import React from 'react';
import logoImport from '../assets/logo.png';

export default function Header() {
  const handleNavToScanForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('scan-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 relative">
            <div className="relative">
              <img
                src={logoImport}
                alt="Ciphera"
                className="w-10 h-20 rounded-md object-cover"
                onError={(e) => {
                  // fallback to public file if import fails
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                  (e.currentTarget as HTMLImageElement).onerror = null;
                }}
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Ciphera
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#scan-form" onClick={handleNavToScanForm} className="text-slate-300 hover:text-white transition-colors">
              Scanner
            </a>
            <a href="#docs" className="text-slate-300 hover:text-cyan-400 transition-colors">Docs</a>
            <a href="#community" className="text-slate-300 hover:text-cyan-400 transition-colors">Community</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
