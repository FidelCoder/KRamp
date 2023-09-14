// import { useState, useEffect } from 'react';
// import Transak from "@biconomy/transak";

// declare global {
//   interface Window {
//     TransakSDK: any;
//   }
// }

// export default function Ramp() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth <= 768);
//   }, []); // the empty dependency array ensures this runs only once after component mounts

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
//     <>
//       <button onClick={openTransak}> BUY CRYPTO</button>
//     </>
//   )
// }

import { useState, useEffect } from 'react';
import Transak from "@biconomy/transak";
import BottomNav from '../components/BottomNav';


declare global {
  interface Window {
    TransakSDK: any;
  }
}

export default function Ramp() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-black to-gray-900">
      <button 
        onClick={openTransak} 
        className="py-3 px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl focus:outline-none"
      >
        ON RAMP
      </button>
      <BottomNav />

    </div>
  );
}
