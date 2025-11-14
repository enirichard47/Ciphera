import { CheckCircle, TrendingUp, TrendingDown, Activity } from 'lucide-react';

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
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl animate-pulse"></div>
          </div>
          <p className="mt-6 text-slate-400 text-lg">Analyzing blockchain data...</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  if (!data.found) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-center">
        <p className="text-slate-400 text-lg">{data.message}</p>
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
        return 'bg-green-500/10 border-green-500/30';
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-500/30';
      case 'high':
        return 'bg-red-500/10 border-red-500/30';
      default:
        return 'bg-slate-500/10 border-slate-500/30';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">Token Found!</h2>
        </div>
        <p className="text-slate-400">
          Token Pair Address: <span className="text-cyan-400 font-mono">{token.pairAddress}</span>
        </p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{token.name} ({token.symbol})</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Market Cap</p>
            <p className="text-white font-bold">${token.marketCapUsd.toLocaleString()}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Liquidity</p>
            <p className="text-white font-bold">${token.liquidityUsd.toLocaleString()}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm">24h Volume</p>
            <p className="text-white font-bold">${token.volumeUsd.toLocaleString()}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Transactions</p>
            <p className="text-white font-bold">{token.transactions.toLocaleString()}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Price</p>
            <p className="text-white font-bold">${parseFloat(token.priceUsd).toFixed(6)}</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm">Price Change (24h)</p>
            <p className="text-white font-bold">{token.priceChange24h}%</p>
          </div>
        </div>

        <div className="mt-2">
          <a
            href={token.pairAddress ? `https://dexscreener.com/${token.chain}/${token.pairAddress}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            View on DEX
          </a>
        </div>
      </div>

      {/* AI Risk Analysis */}
      <div className={`bg-slate-800/50 border rounded-2xl p-6 ${getRiskBgColor(analysis.riskLevel || 'unknown')}`}>
        <h3 className="text-xl font-bold text-white mb-2">AI Risk Analysis</h3>
        <p className={`text-white font-bold text-lg`}>
          Risk Level: <span className={getRiskColor(analysis.riskLevel || 'unknown')}>{analysis.riskLevel}</span>
        </p>
        <p className="text-slate-400">Risk Score: {analysis.riskScore ?? 0}</p>
        <div className="mt-4 bg-slate-900/30 p-4 rounded-lg">
          <p className="text-slate-300 font-medium">
            AI Verdict: <span className="text-white">{analysis.verdict || 'No verdict'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
