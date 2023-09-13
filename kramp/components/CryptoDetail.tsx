// components/CryptoDetail.tsx

import React, { useState } from 'react';

interface Crypto {
  name: string;
  logoUrl: string;
  ticker: string;
  currentPrice: number;
}

interface CryptoDetailProps {
  crypto: Crypto;
}

const CryptoDetail: React.FC<CryptoDetailProps> = ({ crypto }) => {
  const [amount, setAmount] = useState<number | null>(null);

  return (
    <div className="bg-gray-800 p-4 m-4 rounded-md">
      <div className="flex items-center">
        <img src={crypto.logoUrl} alt={`${crypto.name} logo`} className="w-16 h-16 mr-4" />
        <div>
          <span className="text-lg font-medium">{crypto.name} ({crypto.ticker})</span>
          <span className="block text-sm text-gray-400">${crypto.currentPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-400" htmlFor="cryptoAmount">Amount to Buy:</label>
        <input 
          type="number"
          id="cryptoAmount"
          placeholder="Enter amount..."
          className="mt-2 p-2 w-full bg-gray-700 rounded-md"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      {amount && (
        <div className="mt-4">
          <span className="text-sm text-gray-400">You&apos;ll get:</span>
          <span className="ml-2 text-lg font-medium">{(amount / crypto.currentPrice).toFixed(4)} {crypto.ticker}</span>
        </div>
      )}
    </div>
  );
}

export default CryptoDetail;
