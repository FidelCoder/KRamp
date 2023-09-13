// pages/history.tsx
import BottomNav from '../components/BottomNav';

type Transaction = {
    id: number;
    type: 'sent' | 'received';
    amount: number;
    token: string;
    date: string;
  };
  
  const mockTransactions: Transaction[] = [
    { id: 1, type: 'sent', amount: 0.2, token: 'BTC', date: '2023-09-10' },
    { id: 2, type: 'received', amount: 0.5, token: 'ETH', date: '2023-09-05' },
    // ... (Add more mock transactions as desired)
  ];
  
  const HistoryPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-indigo-900 p-4">
        <h1 className="text-3xl text-white mb-4">Transaction History</h1>
  
        <div className="space-y-4">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className={`bg-gray-800 p-4 rounded-md`}>
              <h2 className={`text-xl ${transaction.type === 'sent' ? 'text-red-500' : 'text-green-500'}`}>
                {transaction.type === 'sent' ? '-' : '+'}{transaction.amount} {transaction.token}
              </h2>
              <p className="text-gray-500">Date: {transaction.date}</p>
            </div>
          ))}
        </div>
        <BottomNav />

      </div>
    );
  }
  
  export default HistoryPage;
  