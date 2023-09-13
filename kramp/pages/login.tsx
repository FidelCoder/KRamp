// pages/login.tsx

import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-indigo-900">
      <div className="bg-gray-800 p-6 rounded-md w-80 space-y-4">
        <h1 className="text-2xl text-white font-bold">Crypto On-Ramp</h1>
        <p className="text-gray-400">Securely access your crypto journey.</p>
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 bg-gray-700 rounded-md" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 bg-gray-700 rounded-md" 
        />
        <button className="w-full bg-blue-500 p-2 rounded-md text-white">Login</button>
        <div className="text-center">
        <Link href="/signup" passHref>
  <span className="cursor-pointer text-blue-400 hover:underline">Don't have an account? Sign Up</span>
</Link>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
