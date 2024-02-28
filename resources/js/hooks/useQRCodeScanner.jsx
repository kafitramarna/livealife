import { useEffect, useState } from 'react';
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats, Html5QrcodeScanType } from 'html5-qrcode';

function useQRCodeScanner() {
  const [qrCodeValue, setQrCodeValue] = useState(null);

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      setQrCodeValue(decodedText);
    }

    let qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
      let minEdgePercentage = 0.7;
      let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
      let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
      return {
        width: qrboxSize,
        height: qrboxSize,
      };
    };

    const formatsToSupport = [
      Html5QrcodeSupportedFormats.QR_CODE,
      Html5QrcodeSupportedFormats.UPC_A,
      Html5QrcodeSupportedFormats.UPC_E,
      Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
    ];

    const html5QrcodeScanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 5,
        qrbox: qrboxFunction,
        aspectRatio: 1,
        formatsToSupport: formatsToSupport,
        showViewFinder: true,
        rememberLastUsedCamera: false,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      },
      false
    );

    html5QrcodeScanner.render(onScanSuccess);

    const scanRegionElement = document.getElementById('reader__scan_region');
    if (scanRegionElement) {
      scanRegionElement.style.display = 'flex';
      scanRegionElement.style.justifyContent = 'center';
    }
    return () => {
      html5QrcodeScanner.clear();
    };
  }, []);

  return qrCodeValue;
}

export default useQRCodeScanner;
