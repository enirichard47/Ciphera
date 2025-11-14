import { Brain, Shield, Zap, Database, Code, Lock } from 'lucide-react';

export default function Documentation() {
  return (
    <div id="docs" className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">How Ciphera Works</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Understanding our AI-powered scan engine and blockchain analysis methodology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Analysis Engine</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Our AI engine evaluates smart contracts using multiple data points including contract verification status, ownership patterns, liquidity locks, and transaction behavior.
          </p>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Multi-factor risk scoring algorithm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Pattern recognition for scam detection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Real-time threat intelligence integration</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-teal-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Blockchain Data Collection</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            We aggregate data from multiple blockchain explorers and on-chain sources to provide comprehensive token and wallet analysis.
          </p>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span>Direct blockchain node integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span>Multi-chain support (Ethereum, BSC, Polygon)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-1">•</span>
              <span>Historical transaction analysis</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Security Verification</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Every token undergoes rigorous security checks including honeypot detection, contract audit verification, and ownership analysis.
          </p>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>Honeypot and scam detection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>Contract feature analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">•</span>
              <span>Ownership and mint function checks</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all">
          <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-orange-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Real-time Updates</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Live monitoring of blockchain activity ensures you always have the most current information about tokens and wallets.
          </p>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-1">•</span>
              <span>Live price and volume tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-1">•</span>
              <span>Transaction flow monitoring</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-1">•</span>
              <span>Instant alert notifications</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <Lock className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Risk Scoring Methodology</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our proprietary risk scoring system evaluates tokens on a 100-point scale, considering multiple security factors:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-semibold text-green-400">Low Risk (75-100)</span>
                </div>
                <p className="text-slate-400 text-sm">Verified contracts with locked liquidity and no major red flags</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="font-semibold text-yellow-400">Medium Risk (50-74)</span>
                </div>
                <p className="text-slate-400 text-sm">Some concerns present but manageable with caution</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="font-semibold text-red-400">High Risk (0-49)</span>
                </div>
                <p className="text-slate-400 text-sm">Multiple critical issues detected, not recommended</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <Code className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">For Developers</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Integrate Ciphera's scanning capabilities into your own applications using our RESTful API.
            </p>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto">
              <div className="text-slate-500">// Example API request</div>
              <div className="mt-2">
                <span className="text-cyan-400">POST</span> /api/scan/token
              </div>
              <div className="mt-2 text-slate-500">{"{"}</div>
              <div className="ml-4">
                <span className="text-purple-400">"address"</span>: <span className="text-green-400">"0x..."</span>,
              </div>
              <div className="ml-4">
                <span className="text-purple-400">"chain"</span>: <span className="text-green-400">"ethereum"</span>
              </div>
              <div className="text-slate-500">{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
