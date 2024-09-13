const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button'); // Sluit-knop
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

let html5QrCode = null; // We zullen de QR-code scanner hier initialiseren
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
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${cred.name}</h3>
    <button class="view-card">Bekijk <span class="arrow">→</span></button>` ;
    card.addEventListener('click', () => showDetails(cred, index)); // Klik op kaartje toont details
    walletGrid.appendChild(card);
  });
}

// Functie om details van een kaartje te tonen
function showDetails(credential, index) {
  detailsTitle.textContent = credential.name;
  let detailsHTML = '';

  // Vul de details van het kaartje, deze zijn altijd aanwezig
  for (const key in credential.data) {
    if (credential.data.hasOwnProperty(key)) {
      detailsHTML += `<p><strong>${key}:</strong> ${credential.data[key]}</p>`;
    }
  }

  detailsContent.innerHTML = detailsHTML;
  detailsView.style.display = 'block';

  // Sluit details weergave
  closeDetailsBtn.onclick = () => {
    detailsView.style.display = 'none';
  };

  // Verwijder het kaartje
  deleteDetailsBtn.onclick = () => {
    credentials.splice(index, 1);
    saveCredentials();
    displayCredentials();
    detailsView.style.display = 'none';
  };
}

// QR-code scan starten
scanButton.addEventListener('click', () => {
  scanButton.style.display = 'none'; // Verberg de scan-knop
  closeScanButton.style.display = 'block'; // Toon de sluit-knop
  readerDiv.style.display = 'block'; // Toon de camera

  // Check of html5QrCode al bestaat, zo niet, initialiseer het
  if (!html5QrCode) {
    html5QrCode = new Html5QrCode("reader");
  }

  console.log("Starting QR scanner...");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      console.log("QR code scanned: ", decodedText);
      try {
        const data = JSON.parse(decodedText);

        // Controleer of het een verifier QR-code is
        if (data.verifier && data.requestedCard && data.requester && data.purpose) {
          console.log("Verifier QR-code herkend.");
          console.log("Gevraagde kaart: ", data.requestedCard);
          console.log("Aanvrager: ", data.requester);

          // Dynamische vraag in de modal
          shareQuestionText.innerText = `Wilt u onderstaande gegevens delen met ${data.requester} voor ${data.purpose}?`;
          shareDetails.innerText = `Gevraagde gegevens: ${data.requestedCard}`;
          shareQuestionModal.style.display = 'flex';

          // Verwerk het antwoord bij "Ja"
          yesShareBtn.onclick = () => {
            const timestamp = new Date().toLocaleString();
            
            // Opslaan in local storage met status "Geslaagde datadeling"
            const shareAction = {
              requester: data.requester,
              requestedCard: data.requestedCard,
              purpose: data.purpose,
              timestamp: timestamp,
              status: "Geslaagde datadeling"
            };

            // Haal bestaande deelacties op of maak een nieuwe lijst
            let shareLog = localStorage.getItem('shareLog');
            if (shareLog) {
              shareLog = JSON.parse(shareLog);
            } else {
              shareLog = [];
            }

            // Voeg de nieuwe deelactie toe aan de lijst
            shareLog.push(shareAction);

            // Sla de bijgewerkte lijst op in local storage
            localStorage.setItem('shareLog', JSON.stringify(shareLog));

            // Verberg de modal na succesvolle datadeling
            shareQuestionModal.style.display = 'none';

            console.log("Datadeling opgeslagen:", shareAction);
          };

          // Verwerk het antwoord bij "Nee"
          noShareBtn.onclick = () => {
            const timestamp = new Date().toLocaleString();
            
            // Opslaan in local storage met status "Wel gevraagd, maar gegevens niet gedeeld"
            const shareAction = {
              requester: data.requester,
              requestedCard: data.requestedCard,
              purpose: data.purpose,
              timestamp: timestamp,
              status: "Wel gevraagd, maar gegevens niet gedeeld"
            };

            // Haal bestaande deelacties op of maak een nieuwe lijst
            let shareLog = localStorage.getItem('shareLog');
            if (shareLog) {
              shareLog = JSON.parse(shareLog);
            } else {
              shareLog = [];
            }

            // Voeg de nieuwe deelactie toe aan de lijst
            shareLog.push(shareAction);

            // Sla de bijgewerkte lijst op in local storage
            localStorage.setItem('shareLog', JSON.stringify(shareLog));

            // Verberg de modal na het weigeren van datadeling
            shareQuestionModal.style.display = 'none';

            console.log("Datadeling geweigerd:", shareAction);
          };
        } else {
          // Verwerk issuer QR-code zoals normaal
          credentials.push({
            name: data.name || "Unknown", // Naam uit QR-code
            data: data // Bewaar de details van het kaartje
          });
          saveCredentials();
          displayCredentials();
        }

        // Sluit camera na succesvolle scan
        html5QrCode.stop().then(() => {
          console.log("QR scanner stopped.");
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
  if (html5QrCode) {
    console.log("Stopping QR scanner...");
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped manually.");
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      scanButton.style.display = 'block'; // Herstel scan-knop
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  } else {
    console.error("Cannot stop scanner as it is not running.");
  }
});

// Laad bestaande kaartjes bij het opstarten
loadCredentials();
displayCredentials();
