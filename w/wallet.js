const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button'); // Nieuwe afsluitknop
const readerDiv = document.getElementById('reader');
const walletGrid = document.getElementById('wallet-grid');

scanButton.addEventListener('click', () => {
  // Verberg de scan-knop en toon de camera en de afsluit-knop
  scanButton.style.display = 'none';
  readerDiv.style.display = 'block';
  closeScanButton.style.display = 'block';

  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      // Verwerk de QR-code
      console.log("QR Code gescand: ", decodedText);

      html5QrCode.stop().then(() => {
        readerDiv.style.display = 'none';
        closeScanButton.style.display = 'none';
        scanButton.style.display = 'block'; // Toon de scan-knop opnieuw
      }).catch(err => {
        console.error("Failed to stop scanning: ", err);
      });
    },
    (errorMessage) => {
      console.error(`QR scan failed: ${errorMessage}`);
    }
  );

  // Sluit de scanner wanneer op "Scannen afsluiten" wordt geklikt
  closeScanButton.addEventListener('click', () => {
    html5QrCode.stop().then(() => {
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      scanButton.style.display = 'block'; // Toon de scan-knop opnieuw
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  });
});
