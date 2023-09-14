// export default HomePage;


// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const LoginSignup: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     // In a real-world application, you'd have logic here to send
//     // the email and password to your backend for verification.
//     // For now, we'll just simulate a successful login:

//     if (email && password) {
//       handleSuccess();
//     } else {
//       // Handle the error (like showing a notification)
//       console.error('Email or password missing');
//     }
//   };

//   const handleSuccess = () => {
//     router.push('/dashboard');
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <h1 className="mb-6 text-3xl text-white font-bold">Login / Signup</h1>
//       <input 
//         type="email" 
//         placeholder="Email" 
//         value={email} 
//         onChange={(e) => setEmail(e.target.value)}
//         className="mb-4 p-2 border rounded"
//       />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="mb-4 p-2 border rounded"
//       />
//       <button onClick={handleLogin} className="p-2 bg-green-500 hover:bg-green-600 rounded text-white">
//         Login
//       </button>
//     </div>
//   );
// }

// export default LoginSignup;

// pages/index.tsx
import { useRouter } from 'next/router';
import React from 'react';

const LoginSignup: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Dummy function for now. Replace with actual authentication logic.
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Form Container */}
      <div className="p-10 rounded-lg bg-white bg-opacity-20 shadow-xl">
        {/* Email Input */}
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full py-2 px-4 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-purple-400 focus:shadow-lg"
          />
        </div>
        
        {/* Password Input */}
        <div className="mb-4">
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full py-2 px-4 bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-purple-400 focus:shadow-lg"
          />
        </div>
        
        {/* Login and Signup Buttons */}
        <button 
          onClick={handleLogin}
          className="w-full mb-2 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:opacity-90 focus:outline-none"
        >
          Login
        </button>
        <button className="w-full py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-500 focus:outline-none">
          Signup?
        </button>
      </div>
    </div>
  );
}

export default LoginSignup;
