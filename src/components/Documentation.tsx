import { Brain, Shield, Zap, Database, Code, Lock } from "lucide-react";

export default function Documentation() {
  const features = [
    {
      icon: Brain,
      title: "AI Analysis Engine",
      color: "from-pink-500 via-purple-500 to-indigo-500",
      points: [
        "Multi-factor risk scoring algorithm",
        "Pattern recognition for scam detection",
        "Real-time threat intelligence integration",
      ],
      description:
        "Our AI engine evaluates smart contracts using multiple data points including contract verification status, ownership patterns, liquidity locks, and transaction behavior.",
    },
    {
      icon: Database,
      title: "Blockchain Data Collection",
      color: "from-teal-500 via-cyan-500 to-blue-500",
      points: [
        "Direct blockchain node integration",
        "Multi-chain support (Ethereum, BSC, Polygon)",
        "Historical transaction analysis",
      ],
      description:
        "We aggregate data from multiple blockchain explorers and on-chain sources to provide comprehensive token and wallet analysis.",
    },
    {
      icon: Shield,
      title: "Security Verification",
      color: "from-purple-500 via-pink-500 to-indigo-500",
      points: [
        "Honeypot and scam detection",
        "Contract feature analysis",
        "Ownership and mint function checks",
      ],
      description:
        "Every token undergoes rigorous security checks including honeypot detection, contract audit verification, and ownership analysis.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      color: "from-orange-500 via-pink-500 to-yellow-500",
      points: [
        "Live price and volume tracking",
        "Transaction flow monitoring",
        "Instant alert notifications",
      ],
      description:
        "Live monitoring of blockchain activity ensures you always have the most current information about tokens and wallets.",
    },
  ];

  return (
    <div id="docs" className="max-w-6xl mx-auto px-4 py-20 space-y-16">
      <div className="text-center mb-16 animate-fade-up">
        <h2 className="text-4xl font-bold text-white mb-4">How Ciphera Works</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Understanding our AI-powered scan engine and blockchain analysis methodology
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className={`bg-gradient-to-tr ${feature.color} bg-opacity-10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-${feature.color.replace(/\s/g, "")}/40 transition-transform duration-300 animate-fade-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-4 backdrop-blur-md">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">{feature.description}</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Risk Scoring */}
     <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-3xl p-10 animate-fade-up">
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
    <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-md">
      <Lock className="w-6 h-6 text-cyan-400" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-white mb-3">Risk Scoring Methodology</h3>
      <p className="text-slate-300 leading-relaxed mb-6">
        Our proprietary risk scoring system evaluates tokens on a 100-point scale, considering multiple security factors:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Low Risk (75-100)",
            gradient: "from-green-400 to-green-600",
            desc: "Verified contracts with locked liquidity and no major red flags",
          },
          {
            label: "Medium Risk (50-74)",
            gradient: "from-yellow-400 to-yellow-600",
            desc: "Some concerns present but manageable with caution",
          },
          {
            label: "High Risk (0-49)",
            gradient: "from-red-400 to-red-600",
            desc: "Multiple critical issues detected, not recommended",
          },
        ].map((risk, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-3xl p-6 bg-gradient-to-tr ${risk.gradient} text-white shadow-lg hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full bg-white/50`}></div>
              <span className="font-semibold">{risk.label}</span>
            </div>
            <p className="text-white/90 text-sm">{risk.desc}</p>
            {/* subtle glow */}
            <div
              className={`absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-white/10 blur-3xl`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      {/* Developer API Section */}
      <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 border border-white/20 rounded-3xl p-8 animate-fade-up">
        <div className="flex items-start gap-4">
          <Code className="w-8 h-8 text-white flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">For Developers</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Integrate Ciphera's scanning capabilities into your own applications using our RESTful API.
            </p>
            <div className="bg-white/10 rounded-lg p-4 font-mono text-sm text-slate-200 overflow-x-auto backdrop-blur-md">
              <div className="text-slate-400">// Example API request</div>
              <div className="mt-2">
                <span className="text-cyan-400">POST</span> /api/scan/token
              </div>
              <div className="mt-2 text-slate-400">{"{"}</div>
              <div className="ml-4">
                <span className="text-purple-400">"address"</span>: <span className="text-green-400">"0x..."</span>,
              </div>
              <div className="ml-4">
                <span className="text-purple-400">"chain"</span>: <span className="text-green-400">"ethereum"</span>
              </div>
              <div className="text-slate-400">{"}"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp { 0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);} }
          .animate-fade-up { animation: fadeUp 0.8s ease forwards; opacity:0; }
        `}
      </style>
    </div>
  );
}
