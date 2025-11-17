import { CheckCircle } from 'lucide-react';

interface ScanResultsProps {
  data: any;
  loading: boolean;
}

export default function ScanResults({ data, loading }: ScanResultsProps) {
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl animate-pulse rounded-full"></div>
          </div>
          <p className="mt-6 text-cyan-400 text-lg animate-pulse font-semibold">Analyzing blockchain data...</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  if (!data.found) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-tr from-purple-900/70 via-pink-900/50 to-cyan-900/70 border border-cyan-500/30 rounded-3xl text-center shadow-lg shadow-cyan-500/30 animate-fade-up">
        <p className="text-pink-400 text-lg font-semibold animate-pulse">{data.message}</p>
      </div>
    );
  }

  const token = data.result;
  const analysis = data.analysis || {};

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'text-green-400';
      case 'medium':
        return 'text-yellow-400';
      case 'high':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'bg-green-500/10 border-green-400/30 animate-pulse-green';
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-400/30 animate-pulse-yellow';
      case 'high':
        return 'bg-red-500/10 border-red-400/30 animate-pulse-red';
      default:
        return 'bg-slate-700/20 border-slate-500/30';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {/* Token Header */}
      <div className="mb-4 animate-fade-up">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="w-6 h-6 text-cyan-400 animate-pulse" />
<h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
  Token Found!
</h2>
        </div>
        <p className="text-slate-400">
          Token Pair Address: <span className="text-cyan-400 font-mono">{token.pairAddress}</span>
        </p>
      </div>

      {/* Token Stats */}
      <div className="bg-gradient-to-tr from-purple-900/60 via-pink-900/40 to-cyan-900/60 border border-cyan-500/20 rounded-3xl p-6 space-y-4 shadow-lg shadow-cyan-500/30 animate-fade-up">
        <h3 className="text-2xl font-bold text-white">{token.name} ({token.symbol})</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Market Cap', value: `$${token.marketCapUsd.toLocaleString()}` },
            { label: 'Liquidity', value: `$${token.liquidityUsd.toLocaleString()}` },
            { label: '24h Volume', value: `$${token.volumeUsd.toLocaleString()}` },
            { label: 'Transactions', value: `${token.transactions.toLocaleString()}` },
            { label: 'Price', value: `$${parseFloat(token.priceUsd).toFixed(6)}` },
            { label: 'Price Change (24h)', value: `${token.priceChange24h}%` },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/50 rounded-xl p-4 border border-cyan-500/20 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition-transform duration-300 animate-fade-up"
            >
              <p className="text-slate-400 text-sm">{item.label}</p>
              <p className="text-white font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <a
            href={token.pairAddress ? `https://dexscreener.com/${token.chain}/${token.pairAddress}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white hover:underline font-semibold transition-colors duration-300 animate-pulse"
          >
            View on DEX
          </a>
        </div>
      </div>

      {/* AI Risk Analysis */}
      <div className={`border rounded-3xl p-6 shadow-md shadow-cyan-500/20 ${getRiskBgColor(analysis.riskLevel || 'unknown')} animate-fade-up`}>
        <h3 className="text-2xl font-bold text-white mb-2">AI Risk Analysis</h3>
        <p className={`text-white font-bold text-lg`}>
          Risk Level: <span className={getRiskColor(analysis.riskLevel || 'unknown')}>{analysis.riskLevel}</span>
        </p>
        <p className="text-slate-400">Risk Score: {analysis.riskScore ?? 0}</p>
        <div className="mt-4 bg-slate-900/30 p-4 rounded-lg border border-cyan-500/10 shadow-inner animate-pulse">
          <p className="text-slate-300 font-medium">
            AI Verdict: <span className="text-white">{analysis.verdict || 'No verdict'}</span>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp { 
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { animation: fadeUp 0.8s ease forwards; opacity:0; }

          @keyframes pulseGreen {
            0%,100% { box-shadow: 0 0 10px rgba(34,197,94,0.3); }
            50% { box-shadow: 0 0 20px rgba(34,197,94,0.6); }
          }
          .animate-pulse-green { animation: pulseGreen 2s infinite; }

          @keyframes pulseYellow {
            0%,100% { box-shadow: 0 0 10px rgba(245,158,11,0.3); }
            50% { box-shadow: 0 0 20px rgba(245,158,11,0.6); }
          }
          .animate-pulse-yellow { animation: pulseYellow 2s infinite; }

          @keyframes pulseRed {
            0%,100% { box-shadow: 0 0 10px rgba(239,68,68,0.3); }
            50% { box-shadow: 0 0 20px rgba(239,68,68,0.6); }
          }
          .animate-pulse-red { animation: pulseRed 2s infinite; }

          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradientText 5s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </div>
  );
}
