import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import scanRoutes from './routes/scan.js'; // compiled JS

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/scan', scanRoutes);

// Serve frontend (React build)
const __dirname = path.resolve();
// Path to your frontend build folder
const frontendDist = path.join(__dirname, 'dist'); 

// ✅ Console logs for debugging
console.log('Frontend dist folder path:', frontendDist);

try {
  const files = fs.readdirSync(frontendDist);
  console.log('Files in frontendDist:', files); // should include index.html
} catch (err) {
  console.error('Error reading frontendDist folder:', err);
}

app.use(express.static(frontendDist));

// SPA catch-all for React Router
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    const indexPath = path.join(frontendDist, 'index.html');
    console.log('Serving index.html from:', indexPath);
    return res.sendFile(indexPath);
  }
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
