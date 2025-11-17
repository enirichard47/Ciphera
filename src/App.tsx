import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScanResults from './components/ScanResults';
import Documentation from './components/Documentation';
import Footer from './components/Footer';

interface ScanResult {
  found: boolean;
  result?: any;
  analysis?: any;
  message?: string;
}

function App() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async (address: string) => {
    setScanResult(null);
    setLoading(true);

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBase}/api/scan/${address}`);

      if (!response.ok) {
        throw new Error(`Scan request failed with status ${response.status}`);
      }

      const data = await response.json();
      setScanResult(data);
      console.log('Scan result:', data);
    } catch (err) {
      console.error('Scan failed:', err);
      setScanResult({
        found: false,
        message: 'Failed to scan token. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-x-hidden">
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full -top-16 -left-16 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -bottom-32 -right-32 animate-blob animation-delay-2000"></div>
        <div className="absolute w-56 h-56 bg-pink-500/20 rounded-full top-1/2 left-1/4 animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      <main className="relative z-10">
        <Hero onScan={handleScan} />

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScanResults data={scanResult} loading={loading} />
        </section>

        <Documentation />
      </main>

      <Footer />

      {/* Animations for floating blobs */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 20s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>
    </div>
  );
}

export default App;
