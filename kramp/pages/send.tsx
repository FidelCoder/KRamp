// pages/send.tsx

const SendPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-indigo-900 p-4">
        <h1 className="text-3xl text-white mb-4">Send Coins</h1>
  
        <div className="bg-gray-800 p-4 rounded-md">
          <label className="block text-white mb-2">Recipient Address</label>
          <input type="text" placeholder="Enter wallet address" className="w-full p-2 rounded-md mb-4" />
  
          <label className="block text-white mb-2">Amount</label>
          <input type="number" placeholder="Enter amount" className="w-full p-2 rounded-md mb-4" />
  
          <label className="block text-white mb-2">Token/Coin</label>
          <select className="w-full p-2 rounded-md mb-4">
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            {/* You can add more coins/tokens as options */}
          </select>
  
          <button className="bg-blue-500 w-full p-4 rounded-md text-white">Send</button>
        </div>
      </div>
    );
  }
  
  export default SendPage;
  