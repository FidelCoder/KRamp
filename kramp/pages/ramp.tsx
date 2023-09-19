
// import { useState, useEffect } from 'react';
// import Transak from "@biconomy/transak";
// import BottomNav from '../components/BottomNav';


// declare global {
//   interface Window {
//     TransakSDK: any;
//   }
// }

// export default function Ramp() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth <= 768);
//   }, []);

//   const openTransak = () => {
//     const transak = new Transak('PRODUCTION', {
//       walletAddress: "",
//       userData: {
//         firstName: '',
//         email: '',
//       },
//       // Adjust the width and height for mobile screens
//       widgetHeight: isMobile ? '400px' : '650px',
//       widgetWidth: isMobile ? '300px' : '450px',
//     });
//     transak.init();
//   }

//   return (
//     <div className="h-screen flex justify-center items-center bg-gradient-to-r from-black to-gray-900">
//       <button 
//         onClick={openTransak} 
//         className="py-3 px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl focus:outline-none"
//       >
//         ON RAMP
//       </button>
//       <BottomNav />

//     </div>
//   );
// }
// import { useState, useEffect } from 'react';
// import BottomNav from '../components/BottomNav';
// import { PrimeSdk } from '@etherspot/prime-sdk';
// import { Wallet } from "ethers";
// const WALLET_PRIVATE_KEY = "7bc659633cd63c6155a7db700ac16caf9c42c469837b3d35505d369a4b76e24c"

// export default function Ramp() {
//   const [isMobile, setIsMobile] = useState(false);
//   const wallet = new Wallet(WALLET_PRIVATE_KEY);


//     async function openOnramper() {

//       const CHAIN_ID = "1";  // this could be a string or a number
//   // initializating sdk...
//   const primeSdk = new PrimeSdk(wallet, { chainId: Number(CHAIN_ID), projectKey: '' })
//   primeSdk.getFiatOnRamp()

//   // get EtherspotWallet address...
//   // const address: string = await primeSdk.getCounterFactualAddress();
//   // console.log('\x1b[33m%s\x1b[0m', `EtherspotWallet address: ${address}`);
//         }  

//   return (
//     <div className="h-screen flex justify-center items-center bg-gradient-to-r from-black to-gray-900">
//       <button 
//         onClick={openOnramper} 
//         className="py-3 px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl focus:outline-none"
//       >
//         ON RAMP
//       </button>
//       <BottomNav />

//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import Transak from "@biconomy/transak";
import BottomNav from '../components/BottomNav';
import { PrimeSdk } from '@etherspot/prime-sdk';
import { Wallet } from "ethers";

const WALLET_PRIVATE_KEY = "7bc659633cd63c6155a7db700ac16caf9c42c469837b3d35505d369a4b76e24c";

declare global {
  interface Window {
    TransakSDK: any;
  }
}

export default function Ramp() {
  const [isMobile, setIsMobile] = useState(false);
  const wallet = new Wallet(WALLET_PRIVATE_KEY);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const openTransak = () => {
    const transak = new Transak('PRODUCTION', {
      walletAddress: "",
      userData: {
        firstName: '',
        email: '',
      },
      // Adjust the width and height for mobile screens
      widgetHeight: isMobile ? '400px' : '650px',
      widgetWidth: isMobile ? '300px' : '450px',
    });
    transak.init();
  }

  async function openOnramper() {
    const CHAIN_ID = "1"; // this could be a string or a number
    // initializating sdk...
    const primeSdk = new PrimeSdk(wallet, { chainId: Number(CHAIN_ID), projectKey: '' });
    primeSdk.getFiatOnRamp();
    // get EtherspotWallet address...
    // const address: string = await primeSdk.getCounterFactualAddress();
    // console.log('\x1b[33m%s\x1b[0m', `EtherspotWallet address: ${address}`);
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-black to-gray-900">
      {/* You can have two buttons here or merge the actions based on some criteria */}
      <button 
        onClick={openTransak}
        className="py-3 px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl focus:outline-none"
      >
        Transak ON RAMP
      </button>
      <button 
        onClick={openOnramper}
        className="py-3 px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl focus:outline-none ml-4" // Added a left margin for separation
      >
        Onramper ON RAMP
      </button>
      <BottomNav />
    </div>
  );
}

