import express from 'express';
import cors from 'cors';
import path from 'path';
import scanRoutes from './routes/scan.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/scan', scanRoutes);

// Serve frontend build
const __dirname = path.resolve();
const frontendDist = path.join(__dirname, '..', 'dist');
app.use(express.static(frontendDist));

// Catch-all: serve index.html for SPA routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendDist, 'index.html'));
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
