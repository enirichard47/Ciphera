import express from 'express';
import { scanToken } from '../services/scanner.js';

const router = express.Router();

// GET /api/scan/:address
router.get('/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const result = await scanToken(address);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Scan failed', error: (err as Error).message });
  }
});

export default router;
