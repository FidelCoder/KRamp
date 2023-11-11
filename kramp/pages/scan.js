
import React, { useState } from 'react';
import QrCodeScanner from '../components/QrCodeScanner';

const ScanPage = () => {
    const [scannedAddress, setScannedAddress] = useState('');
    const [isScanning, setIsScanning] = useState(true);

    const handleScanSuccess = (decodedText, decodedResult) => {
        console.log(`QR Code detected: ${decodedText}`);
        // Update the state with the scanned address
        setScannedAddress(decodedText);
        // Add any additional logic you might need for the EVM wallet address
    };

    const handleScanFailure = (error) => {
        console.error(`QR Code scan failed: ${error}`);
    };

    const handleScanComplete = () => {
        setIsScanning(false);
    };

    return (
        <div>
            <h1>Scan QR Code</h1>
            {isScanning && (
                <QrCodeScanner
                    onScanSuccess={handleScanSuccess}
                    onScanFailure={handleScanFailure}
                    onScanComplete={handleScanComplete}
                />
            )}
            {scannedAddress && (
                <div>
                    <h2>Scanned Address:</h2>
                    <p>{scannedAddress}</p>
                </div>
            )}
        </div>
    );
};

export default ScanPage;
