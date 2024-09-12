const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button'); // Nieuwe afsluitknop
const readerDiv = document.getElementById('reader');
const walletGrid = document.getElementById('wallet-grid');

let credentials = [];

// Functie om opgeslagen kaartjes te laden
function loadCredentials() {
  const storedCredentials = localStorage.getItem('credentials');
  if (storedCredentials) {
    credentials = JSON.parse(storedCredentials);
  }
}

// Functie om opgeslagen kaartjes te bewaren
function saveCredentials() {
  localStorage.setItem('credentials', JSON.stringify(credentials));
}

// Functie om alle kaartjes in de wallet weer te geven
function displayCredentials() {
  walletGrid.innerHTML = '';
  credentials.forEach((cred) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${cred.name}</h3>`;
    walletGrid.appendChild(card);
  });
}

// QR-code scan starten
scanButton.addEventListener('click', () => {
  scanButton.style.display = 'none'; // Verberg de scan-knop
  closeScanButton.style.display = 'block'; // Toon de sluit-knop
  readerDiv.style.display = 'block'; // Toon de camera

  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      try {
        const data = JSON.parse(decodedText);
        credentials.push({
          name: data.name || "Unknown", // Naam uit QR-code
        });
        saveCredentials();
        displayCredentials();

        // Sluit camera na succesvolle scan
        html5QrCode.stop().then(() => {
          readerDiv.style.display = 'none';
          closeScanButton.style.display = 'none';
          scanButton.style.display = 'block'; // Herstel scan-knop
        }).catch(err => {
          console.error("Failed to stop scanning: ", err);
        });
      } catch (error) {
        console.error("QR-code parse error: ", error);
      }
    },
    (errorMessage) => {
      console.error(`QR scan failed: ${errorMessage}`);
    }
  );
});

// Sluit de scanner handmatig wanneer op "Scannen afsluiten" wordt geklikt
closeScanButton.addEventListener('click', () => {
  const html5QrCode = new Html5Qrcode("reader");
  html5QrCode.stop().then(() => {
    readerDiv.style.display = 'none';
    closeScanButton.style.display = 'none';
    scanButton.style.display = 'block'; // Herstel scan-knop
  }).catch(err => {
    console.error("Failed to stop scanning: ", err);
  });
});

// Laad bestaande kaartjes bij het opstarten
loadCredentials();
displayCredentials();
