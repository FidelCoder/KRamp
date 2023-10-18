// pages/purchase.js

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Purchase() {
    const [amount, setAmount] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/";
        // <script src="https://js.stripe.com/v3/"></script>
        document.body.appendChild(script);
    }, []);

    async function handleCheckout(e) {
        e.preventDefault();
        setLoading(true);

        const dataToSend = {
            amount: amount, // This should be a number. Ensure it's parsed as a number.
            walletAddress: walletAddress,
        };

        try {
            // const response = await axios.post("http://localhost:3000/create-checkout-session", { amount, walletAddress });
            const response = await axios.post("https://nexusrampbackend.vercel.app/create-checkout-session", dataToSend);
            const session = response.data;
            console.log(session.sessionId)
            const stripe = window.Stripe('pk_test_51NlyNMAGOm3yDBja9NKHxWAEx7SSiibFogtZ63Vz01LWfD6CtNAMJxfboiUwdxn2NUeDSnWzxkdVULfmjF8sAB7n00ZXTooYZA');
            // const result = await stripe.redirectToCheckout({ sessionId: session.id });
            try {
                // const result = await stripe.redirectToCheckout({ sessionId: session.id });
                const result = await stripe.redirectToCheckout({ sessionId: session.sessionId });

                if (result.error) {
                    throw new Error(result.error.message);
                }
            } catch (stripeError) {
                console.error("Stripe error:", stripeError);
                setError('Error redirecting to Stripe checkout. Please try again.');
            }
            
            if (result.error) {
                setError(result.error.message);
            }
        } catch (err) {
            setError('Error initiating payment. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        // <div className="min-h-screen bg-red-500 flex justify-center items-center">

        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4">Purchase Crypto</h1>
                {error && <div className="bg-red-200 text-red-700 p-2 rounded mb-4">{error}</div>}
                <form onSubmit={handleCheckout}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Amount (USD)</label>
                        <input 
                            type="number" 
                            value={amount} 
                            onChange={e => setAmount(e.target.value)} 
                            className="w-full p-2 border-2 border-gray-300 bg-black rounded" 
                            placeholder="e.g. 100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Wallet Address</label>
                        <input 
                            type="text" 
                            value={walletAddress} 
                            onChange={e => setWalletAddress(e.target.value)} 
                            className="w-full p-2 border-2 border-gray-300 bg-black rounded" 
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={`w-full p-2 bg-blue-600 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Purchase'}
                    </button>
                </form>
            </div>
        </div>
    );
}


// import 'intasend-inlinejs-sdk'

// function MyScreen(){
  
//   new window.IntaSend({
//     publicAPIKey: "ISPubKey_test_7143bc01-44f9-4d57-adbf-71628e2f2092",
//     live: false //or true for live environment
//   })
//   .on("COMPLETE", (response) => { console.log("COMPLETE:", response) })
//   .on("FAILED", (response) => { console.log("FAILED", response) })
//   .on("IN-PROGRESS", () => { console.log("INPROGRESS ...") })
  


// return(
//   <div>
//   	<button className="intaSendPayButton" data-amount="10" data-currency="KES">Pay Now</button>
//   </div>
// )
// }
// export default MyScreen