// components/CryptoCard.tsx

import React from 'react';

interface CryptoCardProps {
  name: string;
  logoUrl: string;
  ticker: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name, logoUrl, ticker }) => {
  return (
    <div className="bg-gray-700 p-4 m-2 rounded-md flex flex-col items-center">
      <img src={logoUrl} alt={`${name} logo`} className="w-16 h-16 mb-2" />
      <span className="font-medium">{name}</span>
      <span className="text-sm text-gray-400">{ticker}</span>
    </div>
  );
}

export default CryptoCard;
