import { Search, Zap } from "lucide-react";

interface HeroProps {
  onScan: (address: string) => void;
}

export default function Hero({ onScan }: HeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const address = formData.get("address") as string;
    if (address.trim()) {
      onScan(address.trim());
    }
  };

  return (
    <section className="relative overflow-hidden py-32 px-4 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Floating gradient blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-500/40 rounded-full filter blur-3xl animate-float-slow opacity-50 mix-blend-lighten"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-float-slower opacity-40 mix-blend-lighten"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-yellow-400/30 rounded-full filter blur-3xl animate-float-medium opacity-30 mix-blend-lighten"></div>

      {/* Sparkle particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-particle`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Animated gradient waves behind title */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-20 rounded-full blur-2xl animate-wave-slow"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 opacity-15 rounded-full blur-3xl animate-wave-medium"></div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-pink-600/30 backdrop-blur-md rounded-full mb-8 transform transition-all hover:scale-105">
          <Zap className="w-5 h-5 text-yellow-300" />
          <span className="text-sm text-yellow-200 font-semibold">
            AI-Powered Blockchain Intelligence
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight animate-fade-up">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Scan Any Token
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            Instantly
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-yellow-100/80 mb-16 max-w-2xl mx-auto animate-fade-up delay-150">
          Paste a token address and get real-time insights: risk analysis, trading volume, liquidity, and AI-powered analytics.
        </p>

        {/* Scan Form */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto animate-fade-up delay-300">
          <div className="relative group">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

            {/* Input + Button */}
            <div className="relative flex flex-col sm:flex-row items-stretch bg-black/60 backdrop-blur-xl border border-pink-500/40 rounded-3xl overflow-hidden shadow-xl shadow-pink-500/30 gap-4 transition-all group-hover:shadow-pink-500/50">
              {/* Input */}
              <div className="relative flex items-center flex-1">
                <Search className="w-6 h-6 text-pink-300 ml-6 absolute left-0" />
                <input
                  type="text"
                  name="address"
                  placeholder="Paste token address..."
                  className="flex-1 w-full bg-transparent pl-14 py-5 text-white placeholder:text-pink-200 outline-none text-lg"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 hover:from-yellow-300 hover:via-pink-300 hover:to-purple-400 text-white font-bold rounded-2xl transition-transform duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-pink-500/50"
              >
                Scan Now
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes float-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)} }
          @keyframes float-slower { 0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)} }
          @keyframes float-medium { 0%,100%{transform:translateY(0)}50%{transform:translateY(-25px)} }
          .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
          .animate-float-slower { animation: float-slower 12s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }

          @keyframes fadeUp { 0%{opacity:0;transform:translateY(20px);}100%{opacity:1;transform:translateY(0);} }
          .animate-fade-up { animation: fadeUp 1s ease forwards; opacity:0; }
          .animate-fade-up.delay-150 { animation-delay:0.15s; }
          .animate-fade-up.delay-300 { animation-delay:0.3s; }

          @keyframes particleMove {
            0% { transform: translateY(0) translateX(0); opacity: 0.7; }
            50% { transform: translateY(-15px) translateX(10px); opacity: 0.5; }
            100% { transform: translateY(0) translateX(0); opacity: 0.7; }
          }
          .animate-particle { animation: particleMove linear infinite; }

          @keyframes wave-slow { 0%,100% { transform: translateX(0); } 50% { transform: translateX(-20px); } }
          @keyframes wave-medium { 0%,100% { transform: translateX(0); } 50% { transform: translateX(15px); } }
          .animate-wave-slow { animation: wave-slow 15s ease-in-out infinite; }
          .animate-wave-medium { animation: wave-medium 20s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}
