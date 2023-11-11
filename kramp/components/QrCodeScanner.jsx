

import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QrCodeScanner = ({ onScanSuccess, onScanFailure, onScanComplete }) => {
    const qrRef = useRef(null);

    useEffect(() => {
        if (!qrRef.current) return;

        let html5QrCode;
        const config = {
            fps: 10,
            qrbox: 250,
            aspectRatio: 1.7777778
        };

        Html5Qrcode.getCameras().then(cameras => {
            if (cameras && cameras.length) {
                // Attempt to select the back camera based on the device and browser specifics
                const backCamera = cameras.find(camera => camera.label.toLowerCase().includes("back"));
                const cameraId = backCamera ? backCamera.id : cameras[0].id;

                html5QrCode = new Html5Qrcode("qr-reader");
                // html5QrCode.start(cameraId, config, onScanSuccess, onScanFailure)
                //     .catch(err => {
                //         console.error("Failed to start the QR code scanner", err);
                //     });
                html5QrCode.start(cameraId, config, handleScanSuccess, onScanFailure)
    .catch(err => {
        console.error("Failed to start the QR code scanner", err);
    });

            }
        }).catch(err => {
            console.error("Error getting cameras", err);
        });

        return () => {
            if (html5QrCode) {
                html5QrCode.stop().catch(err => {
                    console.error("Failed to stop the QR code scanner", err);
                });
            }
        };
    }, []);

    const handleScanSuccess = (decodedText, decodedResult) => {
        onScanSuccess(decodedText, decodedResult);

        // Stop scanning after a successful scan
        if (html5QrCode) {
            html5QrCode.stop().then(() => {
                onScanComplete();
            }).catch(err => {
                console.error("Failed to stop the QR code scanner", err);
            });
        }
    };
    return <div id="qr-reader" ref={qrRef} />;
};

export default QrCodeScanner;
