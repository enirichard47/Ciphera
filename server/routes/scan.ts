import express from 'express';
import { scanToken } from '../services/scanner.js';

const router = express.Router();

// GET /api/scan/:address
router.get('/:address', async (req, res) => {
  const { address } = req.params;
  console.log('Received scan request for address:', address); // ✅ log incoming address

  try {
    const result = await scanToken(address);
    console.log('Scan result:', result); // ✅ log successful scan
    res.json(result);
  } catch (err) {
    console.error('Scan failed for address:', address, 'Error:', err); // ✅ log error
    res.status(500).json({
      message: 'Scan failed',
      error: err instanceof Error ? err.message : String(err), // ensure proper string
    });
  }
});

export default router;
