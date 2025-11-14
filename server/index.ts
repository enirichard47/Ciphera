import express from 'express';
import cors from 'cors';
import path from 'path';
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
// Since backend is in dist/server, frontend is in dist/
const frontendDist = path.join(__dirname, '..'); 
app.use(express.static(frontendDist));

// SPA catch-all for React Router
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(frontendDist, 'index.html'));
  }
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
