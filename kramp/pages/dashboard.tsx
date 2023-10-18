// pages/dashboard.tsx
import { useState, useEffect, } from 'react';
import Transak from "@biconomy/transak";
import Link from 'next/link';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import NFCPaymentComponent from '../components/userpay';
import NFCConductorComponent from '../components/cond'

declare global {
    interface Window {
      TransakSDK: any;
    }
  }

const DashboardPage: React.FC = () => {
     // State for the wallet address
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');  // redirect to login/signup page
    }
  }, [isAuthenticated, router]);
  const openTransak = () => {
    const isMobile = window.innerWidth <= 768;

    // init the widget
// use this info for transak package
const transak = new Transak('PRODUCTION', {
    walletAddress: "",
    userData: {
      firstName: '',
      email: '',
    },
    // Adjust the width and height for mobile screens
    widgetHeight: isMobile ? '400px' : '650px',
    widgetWidth: isMobile ? '300px' : '450px',  });
  transak.init();
    }

    // Simulate wallet creation
    const createWallet = () => {
        const mockAddress = "0x" + Math.random().toString(16).substr(2, 15);
        setWalletAddress(mockAddress);
      };

    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-indigo-900 p-4">
        <h1 className="text-3xl text-white mb-4">Dashboard</h1>

              {/* Conditional render for wallet address */}
      {walletAddress ? (
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <h2 className="text-xl text-white mb-2">Your Wallet Address</h2>
          <div className="flex items-center space-x-2">
            <div className="bg-gray-700 p-2 rounded-md">QR Code Here</div>
            <span className="text-gray-400 truncate">{walletAddress}</span>
          </div>
        </div>
      ) : (
        <button onClick={createWallet} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
          Create Wallet
        </button>
      )}
  
        {/* Wallet Address Section */}
        {/* <div className="bg-gray-800 p-4 rounded-md mb-4">
          <h2 className="text-xl text-white mb-2">Your Wallet Address</h2>
          <div className="flex items-center space-x-2">
            <div className="bg-gray-700 p-2 rounded-md">QR Code Here</div>
            <span className="text-gray-400 truncate">0x1234...abcd</span>
          </div>
        </div> */}
  
        {/* Balance Section */}
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <h2 className="text-xl text-white mb-2">Your Balance</h2>
          <ul>
            {/* Sample token data, this will later be dynamically generated */}
            <li className="text-gray-400 flex justify-between">
              <span>Bitcoin</span>
              <span>0.5 BTC</span>
            </li>
            <li className="text-gray-400 flex justify-between mt-2">
              <span>Ethereum</span>
              <span>10 ETH</span>
            </li>
          </ul>
        </div>
  
        {/* Send & Receive Section */}
        <div className="grid grid-cols-2 gap-2">
          {/* Send Button */}
          <button className="bg-blue-500 p-4 rounded-md text-white">Send</button>
          
          {/* Receive Button */}
          <button className="bg-green-500 p-4 rounded-md text-white">Receive</button>
          {/* <NFCPaymentComponent/>
          <NFCConductorComponent /> */}
        </div>
        {/* Transak Button */}
        {/* <button onClick={openTransak} className="bg-yellow-500 w-full mt-4 p-4 rounded-md text-white">
        Buy Crypto
      </button> */}

      <div className="mt-4">
  {/* <Link href="/history">
    <span className="text-blue-400 underline">View Transaction History</span>
  </Link> */}
</div>
<BottomNav />

      </div>
    );
  }
  
  export default DashboardPage;
  