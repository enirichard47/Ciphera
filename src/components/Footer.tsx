import React from 'react';
import { Twitter, MessageCircle, Send, FileText, Shield } from 'lucide-react';
import logoImport from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-cyan-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={logoImport}
                alt="Ciphera"
                className="w-10 h-20 rounded-md object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.png';
                  (e.currentTarget as HTMLImageElement).onerror = null;
                }}
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Ciphera
            </span>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#scanner" className="hover:text-cyan-400 transition-colors">Scanner</a></li>
              <li><a href="#docs" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-cyan-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div id="community">
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-cyan-400 transition-colors">Terms</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Ciphera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
