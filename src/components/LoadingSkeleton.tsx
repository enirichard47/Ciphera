export default function LoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-pulse">
      <div className="mb-8">
        <div className="h-8 w-48 bg-slate-700/50 rounded mb-2"></div>
        <div className="h-4 w-96 bg-slate-700/30 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
            <div className="flex justify-between mb-6">
              <div>
                <div className="h-8 w-48 bg-slate-700/50 rounded mb-2"></div>
                <div className="h-4 w-24 bg-slate-700/30 rounded"></div>
              </div>
              <div className="text-right">
                <div className="h-10 w-32 bg-slate-700/50 rounded mb-2"></div>
                <div className="h-4 w-16 bg-slate-700/30 rounded ml-auto"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                  <div className="h-4 w-20 bg-slate-700/30 rounded mb-2"></div>
                  <div className="h-6 w-16 bg-slate-700/50 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
            <div className="h-6 w-48 bg-slate-700/50 rounded mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-slate-900/50 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
            <div className="h-6 w-40 bg-slate-700/50 rounded mb-4"></div>
            <div className="w-40 h-40 mx-auto mb-6 bg-slate-700/30 rounded-full"></div>
            <div className="h-10 w-full bg-slate-700/50 rounded"></div>
          </div>

          {[1, 2].map((i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
              <div className="h-6 w-32 bg-slate-700/50 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-700/30 rounded"></div>
                <div className="h-4 w-full bg-slate-700/30 rounded"></div>
                <div className="h-4 w-3/4 bg-slate-700/30 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
