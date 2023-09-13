// pages/signup.tsx

import Link from 'next/link';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-indigo-900">
      <div className="bg-gray-800 p-6 rounded-md w-80 space-y-4">
        <h1 className="text-2xl text-white font-bold">Join Crypto On-Ramp</h1>
        <p className="text-gray-400">Start your journey with crypto.</p>
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
        <button className="w-full bg-blue-500 p-2 rounded-md text-white">Sign Up</button>
        <div className="text-center">
        <Link href="/login" passHref>
  <span className="cursor-pointer text-blue-400 hover:underline">Already have an account? Login</span>
</Link>

        </div>
      </div>
    </div>
  );
}

export default SignupPage;
