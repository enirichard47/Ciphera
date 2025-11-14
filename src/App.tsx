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
      // Use relative path for Render; fallback to env for local dev
      const apiBase = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBase}/api/scan/${address}`);

      if (!response.ok) {
        throw new Error(`Scan request failed with status ${response.status}`);
      }

      const data = await response.json();
      setScanResult(data);
      console.log('Scan result:', data); // ✅ logs result for debugging
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Hero onScan={handleScan} />
      <ScanResults data={scanResult} loading={loading} />
      <Documentation />
      <Footer />
    </div>
  );
}

export default App;
