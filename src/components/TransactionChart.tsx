import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface Transaction {
  type: 'buy' | 'sell';
  value: number;
  from?: string;
  timestamp: string | number;
}

interface TransactionChartProps {
  transactions: Transaction[] | any;
}

export default function TransactionChart({ transactions }: TransactionChartProps) {
  // debug incoming prop
  // eslint-disable-next-line no-console
  console.log('TransactionChart - raw transactions prop:', transactions);

  // normalize input into Transaction[]
  const normalizeTransactions = (input: any): Transaction[] => {
    if (!input) return [];

    // if wrapper like { txns: {...} } or { transactions: ... }
    if (input.txns) input = input.txns;
    if (input.transactions) input = input.transactions;

    // DexScreener-like: { h24: { buys: X, sells: Y } } or { buys: X, sells: Y }
    if (typeof input === 'object' && !Array.isArray(input)) {
      const h24 = input.h24 ?? input;
      // try different possible numeric fields
      const buys = Number(h24.buys ?? h24.buy ?? h24.totalBuys ?? h24.buysCount ?? 0) || 0;
      const sells = Number(h24.sells ?? h24.sell ?? h24.totalSells ?? h24.sellsCount ?? 0) || 0;
      const total = Number(h24.total ?? h24.count ?? buys + sells) || (buys + sells);

      // if object actually contains an array of txs (rare)
      if (Array.isArray(h24)) {
        return h24.map((tx: any) => ({
          type: tx.type === 'sell' ? 'sell' : 'buy',
          value: Number(tx.value ?? tx.amount ?? tx.volume ?? 0),
          from: tx.from || tx.fromAddress || tx.sender,
          timestamp: tx.timestamp ?? tx.time ?? Date.now(),
        }));
      }

      // build lightweight pseudo-transactions for chart from counts
      const list: Transaction[] = [];
      const capEach = 100; // cap to avoid huge arrays
      const useBuys = Math.min(buys || 0, capEach);
      const useSells = Math.min(sells || 0, capEach);
      for (let i = 0; i < useBuys; i++) {
        list.push({ type: 'buy', value: 1, timestamp: Date.now() - i * 1000 });
      }
      for (let i = 0; i < useSells; i++) {
        list.push({ type: 'sell', value: 1, timestamp: Date.now() - (i + useBuys) * 1000 });
      }

      // if we couldn't derive buys/sells but have a total number, split half/half
      if (list.length === 0 && total > 0) {
        const half = Math.floor(total / 2);
        for (let i = 0; i < half; i++) list.push({ type: 'buy', value: 1, timestamp: Date.now() - i * 1000 });
        for (let i = 0; i < total - half; i++) list.push({ type: 'sell', value: 1, timestamp: Date.now() - (i + half) * 1000 });
      }

      return list;
    }

    if (Array.isArray(input)) {
      return input.map(tx => ({
        type: (tx.type === 'sell') ? 'sell' : 'buy',
        value: Number(tx.value ?? tx.amount ?? tx.volume ?? 0) || 0,
        from: tx.from || tx.fromAddress || tx.sender,
        timestamp: tx.timestamp ?? tx.time ?? Date.now(),
      }));
    }

    if (typeof input === 'number' || typeof input === 'string') {
      const n = Number(input) || 0;
      const arr: Transaction[] = [];
      const half = Math.floor(n / 2);
      for (let i = 0; i < half; i++) arr.push({ type: 'buy', value: 1, timestamp: Date.now() - i * 1000 });
      for (let i = 0; i < n - half; i++) arr.push({ type: 'sell', value: 1, timestamp: Date.now() - (i + half) * 1000 });
      return arr;
    }

    return [];
  };

  const txs = normalizeTransactions(transactions);
  // eslint-disable-next-line no-console
  console.log('TransactionChart - normalized txs length:', txs.length, txs.slice(0,5));

  if (!txs || txs.length === 0) {
    return (
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-2">Recent Transactions</h3>
        <p className="text-slate-400">No recent transactions available.</p>
      </div>
    );
  }

  const buys = txs.filter(t => t.type === 'buy').length;
  const sells = txs.filter(t => t.type === 'sell').length;
  const total = buys + sells;

  const buyPercentage = total > 0 ? (buys / total) * 100 : 50;
  const sellPercentage = total > 0 ? (sells / total) * 100 : 50;

  const maxValue = Math.max(...txs.map(t => Number(t.value || 0)), 1);

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Recent Transactions</h3>

      {/* Buy Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-slate-300">Buys</span>
          </div>
          <span className="text-green-400 font-semibold">
            {buys} ({buyPercentage.toFixed(0)}%)
          </span>
        </div>
        <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${buyPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Sell Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-red-400" />
            <span className="text-slate-300">Sells</span>
          </div>
          <span className="text-red-400 font-semibold">
            {sells} ({sellPercentage.toFixed(0)}%)
          </span>
        </div>
        <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-500 to-red-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${sellPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Latest Activity */}
      <div className="space-y-2 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-semibold">Latest Activity</span>
        </div>

        {txs.slice(0, 5).map((tx, i) => {
          const value = Number(tx.value ?? 0) || 0;
          const sender = tx.from ? `${String(tx.from).substring(0, 10)}...${String(tx.from).substring(String(tx.from).length - 8)}` : 'unknown';
          const time = tx.timestamp ? new Date(Number(tx.timestamp)).toLocaleTimeString() : 'N/A';
          const barWidth = maxValue > 0 ? (value / maxValue) * 100 : 0;

          return (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900/70 transition-colors"
            >
              <div className={`w-2 h-2 rounded-full ${tx.type === 'buy' ? 'bg-green-400' : 'bg-red-400'}`}></div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-400 truncate font-mono">{sender}</p>
              </div>

              <div className="text-right">
                <p className="text-white font-semibold">{value.toFixed(4)}</p>
                <p className="text-xs text-slate-500">{time}</p>
              </div>

              <div className="w-16">
                <div className="w-full bg-slate-800 rounded h-8 overflow-hidden">
                  <div
                    className={`h-full ${tx.type === 'buy' ? 'bg-green-500/30' : 'bg-red-500/30'}`}
                    style={{ width: `${barWidth}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
