// components/TransactionHistory.tsx

import React from 'react';

interface Transaction {
  id: number;
  cryptoName: string;
  amount: number;
  date: Date;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="bg-gray-800 p-4 m-4 rounded-md">
      <h2 className="text-lg font-medium mb-4">Transaction History</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id} className="mb-3 border-b border-gray-700 pb-2">
            <span className="text-sm text-gray-400">{new Intl.DateTimeFormat('en-US').format(transaction.date)}</span>
            <span className="ml-4">{transaction.cryptoName}</span>
            <span className="ml-4 font-medium">{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
