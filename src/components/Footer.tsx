import React from 'react';
import logoImport from '../assets/logo.png';
import { Twitter, MessageCircle, Send, FileText, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-cyan-500/20 mt-20 relative overflow-hidden">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-shimmer pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
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
              {/* subtle neon ring behind logo */}
              <div className="absolute inset-0 rounded-lg ring-2 ring-cyan-400/30 animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Ciphera
            </span>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#scanner" className="hover:text-cyan-400 hover:scale-105 transition-all duration-300">
                  Scanner
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-cyan-400 hover:scale-105 transition-all duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-cyan-400 hover:scale-105 transition-all duration-300">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div id="community">
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 hover:scale-105 transition-all duration-300">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#privacy" className="hover:text-cyan-400 hover:scale-105 transition-all duration-300">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-cyan-400 hover:scale-105 transition-all duration-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 hover:scale-105 transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Ciphera. All rights reserved.</p>
        </div>
      </div>

      {/* Animations */}
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
    </footer>
  );
}
