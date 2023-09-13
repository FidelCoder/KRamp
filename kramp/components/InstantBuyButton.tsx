// components/InstantBuyButton.tsx

import React from 'react';

const InstantBuyButton: React.FC = () => {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center my-10 mx-auto transition-transform transform hover:scale-105">
      <i className="fas fa-rocket mr-2"></i>
      <span>Instant Buy</span>
    </button>
  );
}

export default InstantBuyButton;
