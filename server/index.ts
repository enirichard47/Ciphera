import express from 'express';
import cors from 'cors';
import path from 'path';
import scanRoutes from './routes/scan.js'; // Make sure .js here if using ES modules

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/scan', scanRoutes);

// Serve frontend (Vite build output)
const __dirname = path.resolve();
const frontendDist = path.join(__dirname, '../dist');
app.use(express.static(frontendDist));

// SPA catch-all for React routes (everything not starting with /api)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendDist, 'index.html'));
  } else {
    next();
  }
});

// Optional: handle 404 for unknown API routes
app.use('/api/', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
