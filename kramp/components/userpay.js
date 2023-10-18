import React, { useState } from 'react';
import { ethers } from 'ethers';

const NFCPaymentComponent = () => {
    const [conductorAddress, setConductorAddress] = useState("");
    const [amount, setAmount] = useState(0);

    // const handleNFCScan = async () => {
    //     if ('NDEFReader' in window) {
    //         const ndef = new NDEFReader();
    //         try {
    //             // Start NFC reading when user clicks button
    //             await ndef.scan();
    //             console.log("> NFC scan started successfully.");

    //             ndef.addEventListener("reading", event => {
    //                 const decoder = new TextDecoder();
    //                 const records = event.message.records;
                    

    //                 for (const record of records) {
    //                     switch (record.recordType) {
    //                         case "text":
    //                             const rawData = decoder.decode(record.data);
                                
    //                             // Check if rawData looks like JSON (starts with '{' or '[')
    //                             if (rawData.trim().startsWith('{') || rawData.trim().startsWith('[')) {
    //                                 try {
    //                                     const data = JSON.parse(rawData);
    //                                     setConductorAddress(data.address);
    //                                     setAmount(data.amount);
    //                                     console.log('Parsed data:', data);
    //                                 } catch (parseError) {
    //                                     console.error('Failed to parse JSON from NFC:', parseError, 'Raw data:', rawData);
    //                                 }
    //                             } else {
    //                                 // Handle non-JSON data
    //                                 console.log('Received plain text data:', rawData);
    //                                 // Here, you can perform operations on the plain text data as needed
    //                             }
    //                             break;
    //                         default:
    //                             console.log("Unknown record type:", record.recordType);
    //                     }
    //                 }
                    
    //             });

    //         } catch (error) {
    //             console.error("Error reading NFC:", error);
    //         }
    //     } else {
    //         alert("Web NFC not supported on this browser/device.");
    //     }
    // };
    const handleNFCScan = async () => {
        if (!('NDEFReader' in window)) {
            return alert("Web NFC not supported on this browser/device.");
        }
    
        const ndef = new NDEFReader();
    
        // Handling reading error
        ndef.onerror = (event) => {
            console.error("Error reading NFC:", event.error);
        };
    
        ndef.onreading = ({ message: { records } }) => {
            for (const record of records) {
                if (record.recordType !== "text") {
                    console.log("Unknown record type:", record.recordType);
                    continue;
                }
    
                const rawData = new TextDecoder().decode(record.data);
                
                if (rawData.trim().startsWith('{') || rawData.trim().startsWith('[')) {
                    try {
                        const data = JSON.parse(rawData);
                        setConductorAddress(data.address);
                        setAmount(data.amount);
                        console.log('Parsed JSON data:', data);
                    } catch (parseError) {
                        console.error('Failed to parse JSON from NFC:', parseError);
                    }
                } else {
                    console.log('Received plain text data:', rawData);
                }
            }
        };
    
        try {
            await ndef.scan();
            console.log("> NFC scan started successfully.");
        } catch (error) {
            console.error("Error initiating NFC scan:", error);
        }
    };
    
    const sendPayment = async () => {
        // if (typeof window.ethereum !== 'undefined') {
            if (window.ethereum && window.ethereum.isMiniPay) {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const transaction = {
                to: conductorAddress,
                value: ethers.utils.parseEther(amount.toString())
            };

            try {
                const tx = await signer.sendTransaction(transaction);
                await tx.wait();
                alert('Transaction successful!');
            } catch (error) {
                console.error('Error sending transaction:', error);
                alert('Transaction failed!');
            }
        } else {
            alert('Ethereum provider (e.g., MetaMask) not detected!');
        }
    };

    return (
        <div>
            <button onClick={handleNFCScan}>Scann NFC</button>
            { conductorAddress && amount && (
                <>
                    <p>Address: {conductorAddress}</p>
                    <p>Amount: {amount} ETH</p>
                    <button onClick={sendPayment}>Confirm Payment</button>
                </>
            )}
        </div>
    );
};

export default NFCPaymentComponent;
