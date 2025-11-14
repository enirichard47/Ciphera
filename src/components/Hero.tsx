import { Search, Zap } from 'lucide-react';

interface HeroProps {
  onScan: (address: string) => void;
}

export default function Hero({ onScan }: HeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const address = formData.get('address') as string;
    if (address.trim()) {
      onScan(address.trim());
    }
  };

  return (
    <section id="scan-form" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300">AI-Powered Blockchain Intelligence</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
            Scan Any Token
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Instantly
          </span>
        </h1>

        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Paste a token address and get real-time insights, including risk analysis, trading volume, and liquidity.
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative flex items-center bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden transition-all group-hover:border-cyan-500/50">
              <Search className="w-6 h-6 text-slate-500 ml-6" />

              <input
                type="text"
                name="address"
                placeholder="Paste token address..."
                className="flex-1 bg-transparent px-6 py-5 text-white placeholder:text-slate-500 outline-none text-lg"
              />

              <button
                type="submit"
                className="m-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Scan Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
