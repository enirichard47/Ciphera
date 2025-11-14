export interface ScanRequest {
  address: string;
  chain: string;
}

export interface ScanResponse {
  found: boolean;
  message?: string;
  result?: any;
  analysis?: any;
}

export async function scanTokenAPI(address: string, chain: string): Promise<ScanResponse> {
  try {
    const res = await fetch('http://localhost:3001/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, chain }),
    });

    return await res.json();
  } catch (err) {
    return { found: false, message: 'Unable to reach server' };
  }
}
