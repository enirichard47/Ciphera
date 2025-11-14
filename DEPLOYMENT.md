# Ciphera Deployment Guide

This guide walks you through deploying Ciphera to production.

## Prerequisites

- Node.js 18+
- Supabase project set up with migrations applied
- Domain name (optional)

## Environment Setup

1. Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_API_URL=https://your-api-domain.com/api
PORT=3001
```

2. For production, use your actual domain for `VITE_API_URL`

## Build Process

```bash
npm install
npm run build
```

This creates:
- Frontend build in `/dist`
- Backend build in `/dist/server`

## Deployment Options

### Option 1: Deploy Backend and Frontend Together

#### Using Railway

1. Install Railway CLI:
```bash
npm i -g @railway/cli
```

2. Login and initialize:
```bash
railway login
railway init
```

3. Add environment variables in Railway dashboard

4. Deploy:
```bash
railway up
```

5. Configure start command in Railway:
```bash
node dist/server/index.js
```

#### Using Render

1. Create a new Web Service on Render
2. Connect your repository
3. Set build command: `npm install && npm run build`
4. Set start command: `node dist/server/index.js`
5. Add environment variables
6. Deploy

### Option 2: Deploy Backend and Frontend Separately

#### Backend (Express API)

Deploy to Railway, Render, or Heroku:

**Build Command:**
```bash
npm install && npm run build:server
```

**Start Command:**
```bash
node dist/server/index.js
```

#### Frontend (Static Site)

Deploy to Vercel, Netlify, or Cloudflare Pages:

**Build Command:**
```bash
npm install && npm run build
```

**Output Directory:**
```
dist
```

**Environment Variables:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_API_URL` (point to your deployed backend)

## Database Setup

1. Log into your Supabase project
2. The migration should already be applied
3. Verify the `scans` table exists with proper RLS policies

## Post-Deployment Checklist

- [ ] Environment variables are set correctly
- [ ] Backend API is accessible at configured URL
- [ ] Frontend can communicate with backend
- [ ] Supabase connection is working
- [ ] CORS is configured properly
- [ ] SSL/HTTPS is enabled
- [ ] API rate limiting is configured (optional)
- [ ] Monitoring is set up (optional)

## Monitoring

Consider adding:
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Uptime monitoring (UptimeRobot)
- Performance monitoring (New Relic, DataDog)

## Scaling Considerations

- Add Redis for caching scan results
- Implement rate limiting
- Add CDN for static assets
- Set up load balancing for backend
- Implement background job processing for intensive scans

## Connecting Real Blockchain APIs

Replace mock data in `server/services/blockchain.ts`:

1. Sign up for blockchain API service (Etherscan, Moralis, Alchemy)
2. Add API keys to environment variables
3. Implement real API calls
4. Add error handling and rate limiting
5. Cache responses to reduce API costs

Example with Etherscan:

```typescript
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const response = await fetch(
  `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=${ETHERSCAN_API_KEY}`
);
```

## Security Best Practices

- Never commit `.env` files
- Use environment-specific configurations
- Implement rate limiting on API endpoints
- Enable CORS only for your frontend domain
- Keep dependencies updated
- Use HTTPS everywhere
- Implement proper error handling without exposing sensitive info
- Add request validation and sanitization

## Support

For issues or questions:
- Check the main README.md
- Open an issue on GitHub
- Join our Discord community
