import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
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
const frontendDist = path.resolve(__dirname, '../'); // <-- points to dist folder

// ✅ Console logs
console.log('Frontend dist folder absolute path:', frontendDist);

try {
  const files = fs.readdirSync(frontendDist);
  console.log('Files in frontendDist:', files); // Should include index.html
} catch (err) {
  console.error('Error reading frontendDist folder:', err);
}

app.use(express.static(frontendDist));

// SPA catch-all route
app.get(/^\/(?!api).*/, (req, res) => {
  const indexPath = path.join(frontendDist, 'index.html');
  console.log('Serving index.html from:', indexPath); // ✅ log the index.html path
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
