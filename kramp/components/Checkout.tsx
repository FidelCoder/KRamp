// components/Checkout.tsx

import React, { useState } from 'react';
import { useNotification } from '../contexts/NotificationContext';


const Checkout: React.FC = () => {
  const [isPaying, setIsPaying] = useState(false);
  const { setNotification } = useNotification();


  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setNotification({ message: 'Payment successful!', type: 'success' });
    }, 2000);
};

  return (
    <div className="bg-gray-800 p-4 m-4 rounded-md">
      <h2 className="text-lg font-medium mb-4">Payment</h2>
      <button
        className={`w-full p-2 rounded-md ${isPaying ? 'bg-gray-600' : 'bg-green-500'} text-white`}
        onClick={handlePayment}
        disabled={isPaying}
      >
        {isPaying ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
}

export default Checkout;
