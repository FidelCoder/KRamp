// pages/transactions.tsx

const TransactionHistoryPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-indigo-900 p-4">
        <h1 className="text-3xl text-white mb-4">Transaction History</h1>
  
        {/* Sample Transaction Item */}
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Sent Bitcoin</span>
            <span className="text-white">-0.5 BTC</span>
          </div>
          <div className="text-xs text-gray-500">To: 0x1234...abcd</div>
        </div>
  
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Received Ethereum</span>
            <span className="text-white">+3 ETH</span>
          </div>
          <div className="text-xs text-gray-500">From: 0xabcd...1234</div>
        </div>
  
        {/* More transaction items can be added or dynamically generated */}
  
      </div>
    );
  }
  
  export default TransactionHistoryPage;
  