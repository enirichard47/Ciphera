import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import scanRoutes from './routes/scan.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/scan', scanRoutes);

// Serve frontend
const frontendDist = path.join(__dirname, 'dist'); // adjust if your dist folder is elsewhere
app.use(express.static(frontendDist));

// Catch-all SPA route for React
app.get(/^\/(?!api).*/, (req, res) => {
  const indexPath = path.join(frontendDist, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(500).send('Something went wrong');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
