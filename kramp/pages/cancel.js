// pages/cancel.js
import Link from 'next/link';

export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        
        <h1 className="text-2xl font-bold mb-4">Transaction Cancelled</h1>
        <p className="text-gray-600 mb-8">Your payment did not go through. Please try again or contact support if you continue to experience issues.</p>

        <Link href="/dashboard">
          <span className="text-indigo-600 hover:text-indigo-800 hover:underline">Go back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
