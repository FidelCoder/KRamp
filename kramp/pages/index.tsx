
// import Layout from '../components/Layout';
// import Header from '../components/Header';
// import InstantBuyButton from '../components/InstantBuyButton';
// import CryptoCard from '../components/CryptoCard';
// import CryptoDetail from '../components/CryptoDetail';
// import Checkout from '../components/Checkout';
// import UserProfile from '../components/UserProfile';
// import { useUser } from '@/contexts/UserContext';
// import TransactionHistory from '../components/TransactionHistory';
// import DarkModeToggle from '../components/DarkModeToggle';


// const mockTransactions = [
//   { id: 1, cryptoName: 'Bitcoin', amount: 0.12, date: new Date('2023-04-20T10:20:30Z') },
//   { id: 2, cryptoName: 'Ethereum', amount: 2.5, date: new Date('2023-04-18T14:15:10Z') },
//   // ... more mock transactions
// ];



// // Sample data for cryptocurrencies. In a real app, this might come from an API.
// const cryptocurrencies = [
//   { name: "Bitcoin", logoUrl: "/icon-192x192.png", ticker: "BTC", currentPrice: 7888 },
//   { name: "Ethereum", logoUrl: "/icon-192x192.png", ticker: "ETH", currentPrice: 1888 },
//   // ... more cryptocurrencies
// ];

// const selectedCrypto = cryptocurrencies[0]; // This would ideally be dynamically selected by the user.


// const HomePage: React.FC = () => {
//   const { user, login } = useUser();

//   return (
//     <Layout>
//       <Header />
//       {/* <DarkModeToggle /> */}

//       {!user ? (
//         <button onClick={login} className="bg-green-500 p-4 rounded-md text-white m-4">Login</button>
//       ) : (
//         <UserProfile />
//       )}
//       {/* Other components/content as needed */}
//       <div className="flex overflow-x-scroll hide-scrollbar">
//         {cryptocurrencies.map((crypto, idx) => (
//           <CryptoCard key={idx} {...crypto} />
//         ))}
//       </div>
//       <InstantBuyButton />
//       <CryptoDetail crypto={selectedCrypto} />
//       <Checkout />

//       <TransactionHistory transactions={mockTransactions} />
//     </Layout>
//   );
// }



// export default HomePage;


import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // In a real-world application, you'd have logic here to send
    // the email and password to your backend for verification.
    // For now, we'll just simulate a successful login:

    if (email && password) {
      handleSuccess();
    } else {
      // Handle the error (like showing a notification)
      console.error('Email or password missing');
    }
  };

  const handleSuccess = () => {
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="mb-6 text-3xl text-white font-bold">Login / Signup</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <button onClick={handleLogin} className="p-2 bg-green-500 hover:bg-green-600 rounded text-white">
        Login
      </button>
    </div>
  );
}

export default LoginSignup;

