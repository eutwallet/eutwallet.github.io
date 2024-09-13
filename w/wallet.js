const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button');
const readerDiv = document.getElementById('reader');
const walletGrid = document.getElementById('wallet-grid');
const detailsView = document.getElementById('details');
const detailsTitle = document.getElementById('details-title');
const detailsContent = document.getElementById('details-content');
const closeDetailsBtn = document.getElementById('close-details');
const deleteDetailsBtn = document.getElementById('delete-details');
const shareQuestionModal = document.getElementById('share-question-modal');
const shareQuestionText = document.getElementById('share-question-text');
const shareDetails = document.getElementById('share-details');
const yesShareBtn = document.getElementById('yes-share-btn');
const noShareBtn = document.getElementById('no-share-btn');

let html5QrCode = null; 
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
  credentials.forEach((cred, index) => {
    if (!cred.isShareAction) { // We tonen alleen normale kaartjes, geen deelacties
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${cred.name}</h3>
      <button class="view-card">Bekijk <span class="arrow">→</span></button>`;
      card.addEventListener('click', () => showDetails(cred, index));
      walletGrid.appendChild(card);
    }
  });
}

// Functie om details van een kaartje te tonen
function showDetails(credential, index) {
  detailsTitle.textContent = credential.name;
  let detailsHTML = '';
  for (const key in credential.data) {
    if (credential.data.hasOwnProperty(key)) {
      detailsHTML += `<p><strong>${key}:</strong> ${credential.data[key]}</p>`;
    }
  }
  detailsContent.innerHTML = detailsHTML;
  detailsView.style.display = 'block';
  closeDetailsBtn.onclick = () => {
    detailsView.style.display = 'none';
  };
  deleteDetailsBtn.onclick = () => {
    credentials.splice(index, 1);
    saveCredentials();
    displayCredentials();
    detailsView.style.display = 'none';
  };
}

// QR-code scan starten
scanButton.addEventListener('click', () => {
  scanButton.style.display = 'none';
  closeScanButton.style.display = 'block';
  readerDiv.style.display = 'block';
  if (!html5QrCode) {
    console.log("About to initialize Html5QrCode...");
    html5QrCode = new Html5QrCode("reader");
  }

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      try {
        const data = JSON.parse(decodedText);
        
        // Controleer of het een verifier QR-code is
        if (data.verifier && data.requestedCard && data.requester && data.purpose) {
          const requestedCard = data.requestedCard;
          const requester = data.requester;
          const purpose = data.purpose;

          // Dynamische vraag in de modal
          shareQuestionText.innerText = `Wilt u onderstaande gegevens delen met ${requester} voor ${purpose}?`;
          shareDetails.innerText = `Gevraagde gegevens: ${requestedCard}`;
          shareQuestionModal.style.display = 'flex';

          // Verwerk het antwoord
          yesShareBtn.onclick = () => {
            const timestamp = new Date().toLocaleString();
            credentials.push({
              name: `Gegevens gedeeld met ${requester}`,
              validUntil: timestamp,
              isShareAction: true // Markeer als deelactie
            });
            saveCredentials();
            shareQuestionModal.style.display = 'none';
          };

          noShareBtn.onclick = () => {
            shareQuestionModal.style.display = 'none'; // Verberg de modal
          };
        } else {
          // Verwerk issuer QR-code
          credentials.push({
            name: data.name || "Unknown",
            data: data
          });
          saveCredentials();
          displayCredentials();
        }

        // Sluit camera na succesvolle scan
        html5QrCode.stop().then(() => {
          readerDiv.style.display = 'none';
          closeScanButton.style.display = 'none';
          scanButton.style.display = 'block';
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
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      scanButton.style.display = 'block';
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  }
});

// Laad bestaande kaartjes bij het opstarten
loadCredentials();
displayCredentials();
