// pages/receive.tsx

const ReceivePage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-indigo-900 p-4">
        <h1 className="text-3xl text-white mb-4">Receive Coins</h1>
  
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <div className="mb-4 bg-gray-700 p-4 rounded-md">Your QR Code Here</div>
          <span className="text-gray-400 block mb-4">Your Wallet Address: 0x1234...abcd</span>
          <p className="text-gray-500">Share the above address or QR code to receive coins.</p>
        </div>
      </div>
    );
  }
  
  export default ReceivePage;
  