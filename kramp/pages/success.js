// pages/success.js
import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your transaction has been completed successfully.</p>

        <Link href="/dashboard">
          <span className="text-indigo-600 hover:text-indigo-800 hover:underline">Go back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
