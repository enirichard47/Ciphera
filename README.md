# Ciphera - AI-Powered Crypto Scanner

Ciphera is a sophisticated blockchain intelligence platform that uses AI to scan tokens, wallets, and smart contracts — helping users detect scams, fake tokens, and malicious on-chain activity in real time.

## Features

- **Token Scanning**: Analyze any ERC-20 token with comprehensive risk assessment
- **Wallet Analysis**: Examine wallet activity, holdings, and transaction patterns
- **AI Risk Scoring**: Intelligent 100-point safety scoring system
- **Contract Verification**: Check source code verification and ownership
- **Honeypot Detection**: Identify potential scam tokens
- **Real-time Data**: Live blockchain data and transaction monitoring
- **Transaction Visualization**: Interactive charts showing buy/sell activity
- **Downloadable Logo**: High-quality PNG and SVG logos available

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling

### Backend
- Express.js REST API
- TypeScript
- Supabase for data persistence
- Mock blockchain data integration (ready for real API integration)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_API_URL=http://localhost:3001/api
   PORT=3001
   ```

4. Run database migrations:
   The Supabase migration creates the `scans` table automatically

### Running the Application

#### Development Mode

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run dev:server
```

#### Production Build

```bash
npm run build
```

The frontend will be built to `/dist` and the backend to `/dist/server`

## Project Structure

```
├── server/
│   ├── index.ts              # Express server entry point
│   ├── routes/
│   │   ├── scan.ts           # Token/wallet scanning endpoints
│   │   └── analytics.ts      # Analytics and history endpoints
│   └── services/
│       ├── scanner.ts        # Main scanning logic
│       ├── analyzer.ts       # AI risk scoring algorithms
│       ├── blockchain.ts     # Blockchain data fetching
│       ├── database.ts       # Supabase integration
│       └── analytics.ts      # Analytics queries
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation with logo download
│   │   ├── Hero.tsx          # Landing page hero section
│   │   ├── ScanResults.tsx   # Scan results dashboard
│   │   ├── TransactionChart.tsx # Transaction visualization
│   │   ├── Documentation.tsx # How it works section
│   │   └── Footer.tsx        # Footer with social links
│   ├── services/
│   │   └── api.ts            # Frontend API client
│   ├── utils/
│   │   └── addressValidator.ts # Address validation utilities
│   └── App.tsx               # Main application component
```

## API Endpoints

### Scan Token
```
POST /api/scan/token
Body: { "address": "0x...", "chain": "ethereum" }
```

### Scan Wallet
```
POST /api/scan/wallet
Body: { "address": "0x...", "chain": "ethereum" }
```

### Get Recent Scans
```
GET /api/analytics/recent?limit=10
```

### Get Scan History
```
GET /api/analytics/history/:address
```

## AI Risk Scoring

The AI engine evaluates tokens using multiple factors:

- **Contract Verification** (-25 points if unverified)
- **Liquidity Status** (-20 points if unlocked)
- **Honeypot Detection** (-40 points if detected)
- **High Taxes** (-15 points if >10%)
- **Dangerous Features** (-5 to -10 points each):
  - Mintable tokens
  - Blacklist functionality
  - Pausable contracts
  - Proxy/upgradeable contracts
- **Holder Count** (-10 points if <100)
- **Liquidity Amount** (-15 points if <$10k)

### Risk Levels
- **Low Risk** (75-100): Relatively safe with verified contracts
- **Medium Risk** (50-74): Proceed with caution
- **High Risk** (0-49): Multiple red flags, not recommended

## Integrating Real Blockchain APIs

To connect real blockchain data, update `server/services/blockchain.ts` with your preferred provider:

- [Etherscan API](https://etherscan.io/apis)
- [Moralis API](https://moralis.io/)
- [Alchemy API](https://www.alchemy.com/)
- [The Graph](https://thegraph.com/)

Replace the mock data functions with actual API calls.

## Community

- **Twitter/X**: [@CipheraAI](https://twitter.com/CipheraAI)
- **Discord**: [Join Ciphera Community](https://discord.gg/ciphera)
- **Telegram**: [Real-time Alerts](https://t.me/CipheraAlerts)

## License

MIT License - Built with AI-powered blockchain intelligence

## Security Note

Always conduct your own research before making any cryptocurrency investments. Ciphera provides analysis tools but does not constitute financial advice.
"# Ciphera" 
"# Ciphera" 
"# Ciphera" 
"# Ciphera" 
