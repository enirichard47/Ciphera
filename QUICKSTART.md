# Ciphera - Quick Start Guide

Get Ciphera up and running in 5 minutes!

## Prerequisites
- Node.js 18 or higher
- npm or yarn
- Supabase account (free tier works)

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:3001/api
PORT=3001
```

**Get your Supabase credentials:**
1. Go to [supabase.com](https://supabase.com)
2. Create a new project (or use existing)
3. Go to Project Settings > API
4. Copy the Project URL and anon/public key

### 3. Database Setup

The database migration has already been applied through the Supabase MCP integration. Verify by checking your Supabase dashboard for the `scans` table.

If you need to manually verify, the table should have:
- id (uuid, primary key)
- address (text)
- chain (text)
- type (text)
- data (jsonb)
- analysis (jsonb)
- timestamp (timestamptz)
- created_at (timestamptz)

### 4. Start the Application

#### Option A: Use the convenience script (Linux/Mac)
```bash
./start.sh
```

#### Option B: Manual start (all platforms)

**Terminal 1 - Backend:**
```bash
npm run dev:server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 5. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **API Health**: http://localhost:3001/api/health

## Testing the Scanner

1. Open http://localhost:5173 in your browser
2. Enter a sample Ethereum address in the search bar:
   ```
   0x1234567890123456789012345678901234567890
   ```
3. Click "Scan Now"
4. View the AI-powered analysis results

## Project Structure Overview

```
ciphera/
├── server/              # Express.js backend
│   ├── index.ts        # Server entry point
│   ├── routes/         # API endpoints
│   └── services/       # Business logic
├── src/                # React frontend
│   ├── components/     # UI components
│   ├── services/       # API client
│   └── utils/          # Helper functions
├── .env                # Environment variables
└── package.json        # Dependencies
```

## Common Commands

```bash
# Development
npm run dev              # Start frontend only
npm run dev:server       # Start backend only

# Building
npm run build            # Build both frontend and backend
npm run build:server     # Build backend only

# Other
npm run lint             # Run ESLint
npm run typecheck        # Check TypeScript types
```

## Troubleshooting

### Port Already in Use
If port 3001 or 5173 is busy:
```bash
# Change PORT in .env for backend
PORT=3002

# Or kill the process using the port
# Mac/Linux:
lsof -ti:3001 | xargs kill -9
# Windows:
netstat -ano | findstr :3001
taskkill /PID [PID_NUMBER] /F
```

### Supabase Connection Issues
- Verify your Supabase URL and key are correct
- Check that your Supabase project is active
- Ensure RLS policies are set up correctly
- Check browser console and server logs for errors

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist
npm run build
```

## Next Steps

1. **Customize the Design**: Edit components in `src/components/`
2. **Add Real Blockchain Data**: Update `server/services/blockchain.ts`
3. **Enhance AI Scoring**: Modify `server/services/analyzer.ts`
4. **Deploy**: Follow `DEPLOYMENT.md` for production setup

## Getting Help

- Check `README.md` for detailed documentation
- Review `FEATURES.md` for complete feature list
- See `DEPLOYMENT.md` for deployment instructions
- Join our Discord community for support

## Test Addresses

Use these sample addresses for testing:

**Valid Format Examples:**
- `0x1111111111111111111111111111111111111111`
- `0xaAaAaAaaAaAaAaaAaAAAAAAAAaaaAaAaAaaAaaAa`
- `0x0000000000000000000000000000000000000000`

**Invalid Format Examples:**
- `0x123` (too short)
- `invalid` (not hex)
- `0xGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG` (invalid hex)

---

**You're all set!** 🚀 Start scanning and analyzing crypto tokens with Ciphera!
