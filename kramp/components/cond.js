import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const NFCConductorComponent = () => {
    const [fare, setFare] = useState("");
    const [conductorAddress, setConductorAddress] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const fetchAddressFromMetaMask = async () => {
            // if (typeof window.ethereum !== 'undefined') {
                if (window.ethereum && window.ethereum.isMiniPay) {

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                try {
                    const accounts = await provider.listAccounts();
                    if (accounts.length > 0) {
                        setConductorAddress(accounts[0]);
                    }
                } catch (error) {
                    console.error("Error fetching address from MetaMask:", error);
                }
            }
        };
        
        fetchAddressFromMetaMask();
    }, []);

    // const handleNFCWrite = async () => {
    //     if ('NDEFWriter' in window) {
    //         const ndef = new NDEFWriter();
    //         const data = {
    //             // address: conductorAddress,
    //             address: "0xe1F4615Afec6801493FB889eDe3A70812c842d05",

    //             amount: fare
    //         };

    //         try {
    //             await ndef.write(JSON.stringify(data));
    //             setStatus("Data written successfully to NFC tag.");
    //         } catch (error) {
    //             console.error("Error writing to NFC:", error);
    //             setStatus("Error writing to NFC tag.");
    //         }
    //     } else {
    //         alert("Web NFC not supported on this browser/device.");
    //     }
    // };

    const handleNFCWrite = async () => {
        if ('NDEFWriter' in window) {
            const ndef = new window.NDEFWriter();
            const data = {
                address: conductorAddress,
                amount: fare
            };
    
            try {
                const permissionStatus = await navigator.permissions.query({ name: "nfc" });
    
                if (permissionStatus.state === "denied") {
                    setStatus("NFC permissions have been denied. Please change this in your browser settings.");
                    return;
                }
    
                if (permissionStatus.state === "prompt") {
                    setStatus("Waiting for NFC permissions...");
                    // Optionally, show a user-friendly prompt here before proceeding.
                }
    
                setStatus("Ready to write. Please hold the NFC tag close to your device...");
                
                await ndef.write(JSON.stringify(data));
                
                setStatus("Data written successfully to NFC tag.");
            } catch (error) {
                console.error("Error writing to NFC:", error);
                setStatus(`Error writing to NFC tag: ${error.message}`);
            }
        } else {
            setStatus("Web NFC not supported on this browser/device.");
        }
    };
    
    // const onWrite = async () => {
    //     try {
    //       const ndef = new window.NDEFReader();
    //       await navigator.permissions.query({ name: "nfc" });

    //       await ndef.write({
    //         records: [{ recordType: "text", data: "Hellow World!" }],
    //       });
    //       console.log(`Value Saved!`);
    //       alert("written")
    //     } catch (error) {
    //       console.log(`'found err'${error}`);
    //     }
    //   };    

    const onWrite = async () => {
        try {
            const ndef = new window.NDEFReader();
            const datai = {
                address: conductorAddress,
                amount: fare
            };
            const permissionStatus = await navigator.permissions.query({ name: "nfc" });
    
            if (permissionStatus.state === "denied") {
                alert("You have denied NFC permissions for this site. Please change this in your browser settings.");
                return;
            }
    
            if (permissionStatus.state === "prompt") {
                // Possibly display a user-friendly message here to let them know what to expect.
            }
            console.log(`1!`);

            await ndef.write({
                records: [{ recordType: "text", data: JSON.stringify(datai) }],
            });
            console.log(`Value Saved!`);
            alert("written");
        } catch (error) {
            console.log(`'found err'${error}`);
        }
    };
    

    return (
        <div>
            <label>
                Set Fare (in ETH): 
                <input 
                    type="text" 
                    value={fare} 
                    onChange={e => setFare(e.target.value)} 
                />
            </label>
            <br />
            <p>
                Conductor's Address (from MetaMask): 
                {/* <strong>{conductorAddress}</strong> */}
            </p>
            <button onClick={onWrite}>Write to NFC</button>
            <p>{status}</p>
        </div>
    );
};

export default NFCConductorComponent;
