import { useState, useEffect } from 'react';
import { getRecentScans } from '../services/api';

export function useRecentScans(limit: number = 6) {
  const [scans, setScans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScans() {
      try {
        const data = await getRecentScans(limit);
        setScans(data);
      } catch (err) {
        setError('Failed to load recent scans');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchScans();
  }, [limit]);

  return { scans, loading, error };
}
