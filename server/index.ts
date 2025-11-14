import express from 'express';
import cors from 'cors';
import path from 'path';
import scanRoutes from './routes/scan.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/scan', scanRoutes);

// ---- Serve Frontend Build ----

// Important: works both locally & on Render
const __dirname = path.resolve();
const frontendDist = path.join(__dirname, '../dist');

// Serve static files
app.use(express.static(frontendDist));

// Catch-all for React Router (Express 5 safe)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(frontendDist, 'index.html'));
  }
  next();
});

// 404 handler for API only (no wildcard!)
app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
