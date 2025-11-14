import bs58 from 'bs58';

/**
 * Validate if an address is correct for a given chain
 */
export function isValidAddress(
  address: string,
  chain: 'ethereum' | 'bsc' | 'polygon' | 'solana' = 'ethereum'
): boolean {
  if (!address) return false;

  switch (chain) {
    case 'ethereum':
    case 'bsc':
    case 'polygon':
      // EVM chains: 0x + 40 hex chars
      return /^0x[a-fA-F0-9]{40}$/.test(address);

    case 'solana':
      try {
        const decoded = bs58.decode(address);
        return decoded.length === 32; // Solana public keys are 32 bytes
      } catch {
        return false;
      }

    default:
      return false;
  }
}

/**
 * Detect type of address: token or wallet
 */
export function detectAddressType(
  address: string,
  chain: 'ethereum' | 'bsc' | 'polygon' | 'solana'
): 'token' | 'wallet' | 'unknown' {
  if (!address) return 'unknown';

  if (!isValidAddress(address, chain)) return 'unknown';

  switch (chain) {
    case 'ethereum':
    case 'bsc':
    case 'polygon':
      // EVM addresses are considered tokens here
      return 'token';

    case 'solana':
      // Solana addresses are wallets
      return 'wallet';

    default:
      return 'unknown';
  }
}

/**
 * Format address for display: first N and last N chars
 */
export function formatAddress(address: string, chars: number = 6): string {
  if (!address || address.length < chars * 2) return address;
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
}
