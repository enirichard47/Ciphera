import fetch from 'node-fetch';

interface DexScreenerToken {
  symbol: string;
  name: string;
  priceUsd: string;
  liquidityUsd: number;
  volumeUsd: number;
  marketCapUsd: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange5m: number;
  pairAddress: string;
  chain: string;
  transactions: number;
  dexUrl: string;
}

interface ScanResult {
  found: boolean;
  result?: DexScreenerToken;
  analysis?: {
    riskScore: number;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Unknown';
    verdict: string;
  };
  message?: string;
}

/**
 * Scan token by address. Chain detection is automatic.
 */
export async function scanToken(address: string): Promise<ScanResult> {
  const supportedChains = ['ethereum', 'bsc', 'polygon', 'avalanche', 'fantom'];

  for (const chain of supportedChains) {
    // Query by token address first
    const url = `https://api.dexscreener.com/latest/dex/tokens/${address}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.pairs && data.pairs.length > 0) {
        // Find the pair with highest liquidity
        const pair = data.pairs.reduce((best: any, current: any) => 
          (current.liquidity?.usd || 0) > (best.liquidity?.usd || 0) ? current : best
        );

        const token: DexScreenerToken = {
          symbol: pair.baseToken?.symbol || 'Unknown',
          name: pair.baseToken?.name || 'Unknown',
          priceUsd: pair.priceUsd || '0',
          liquidityUsd: pair.liquidity?.usd || 0,
          volumeUsd: pair.volume?.h24 || 0,
          marketCapUsd: pair.fdv || pair.marketCap || 0,
          priceChange1h: pair.priceChange?.h1 || 0,
          priceChange24h: pair.priceChange?.h24 || 0,
          priceChange5m: pair.priceChange?.m5 || 0,
          pairAddress: pair.pairAddress,
          chain: pair.chainId,
          transactions: pair.txns?.h24?.buys + pair.txns?.h24?.sells || 0,
          dexUrl: `https://dexscreener.com/${pair.chainId}/${pair.pairAddress}`,
        };

        const { riskScore, riskLevel, verdict } = analyzeToken(token);

        return { found: true, result: token, analysis: { riskScore, riskLevel, verdict } };
      }
    } catch (err) {
      console.error(`Error fetching for token ${address}:`, err);
    }
  }

  return { found: false, message: "Token has no trading pair. It might be new or not listed on supported DEXs." };
}

/**
 * Simple AI Risk Analysis
 */
function analyzeToken(token: DexScreenerToken) {
  let score = 100;
  
  // Liquidity check - most important
  if (token.liquidityUsd < 1000) score -= 50;
  else if (token.liquidityUsd < 5000) score -= 40;
  else if (token.liquidityUsd < 10000) score -= 20;
  else if (token.liquidityUsd < 50000) score -= 10;
  
  // Volume check
  if (token.volumeUsd < 1000) score -= 30;
  else if (token.volumeUsd < 5000) score -= 20;
  else if (token.volumeUsd < 20000) score -= 10;
  
  // Transaction activity
  if (token.transactions < 10) score -= 40;
  else if (token.transactions < 50) score -= 30;
  else if (token.transactions < 100) score -= 15;
  
  // Market cap check
  if (token.marketCapUsd < 10000) score -= 20;
  else if (token.marketCapUsd < 100000) score -= 10;
  
  // Price stability (smaller changes = more stable)
  const priceVolatility = Math.abs(token.priceChange24h);
  if (priceVolatility > 50) score -= 20;
  else if (priceVolatility > 30) score -= 15;
  else if (priceVolatility > 15) score -= 10;
  
  score = Math.max(score, 0);
  score = Math.min(score, 100);

  let riskLevel: 'Low' | 'Medium' | 'High' | 'Unknown' = 'Unknown';
  if (score >= 70) riskLevel = 'Low';
  else if (score >= 40) riskLevel = 'Medium';
  else riskLevel = 'High';

  let verdict = '';
  switch (riskLevel) {
    case 'Low':
      verdict = 'Safe to trade. Good liquidity, volume, and stable price action.';
      break;
    case 'Medium':
      verdict = 'Moderate risk. Decent metrics but monitor volatility. Trade with caution.';
      break;
    case 'High':
      verdict = 'High risk. Low liquidity, volume, or transactions. High chance of slippage and price manipulation.';
      break;
    default:
      verdict = 'Risk unknown.';
      break;
  }

  return { riskScore: score, riskLevel, verdict };
}
