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
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/scan/${address}?chain=${chain}`);
    return await res.json();
  } catch (err) {
    return { found: false, message: 'Unable to reach server' };
  }
}
