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
const stopShareBtn = document.getElementById('stop-share-btn');
const menuScreen = document.getElementById('menu-screen');
const menuButton = document.querySelector('.menu-button');
const backMenuBtn = document.getElementById('back-menu-btn');
const activitiesOption = document.getElementById('activities-option');
const activitiesSection = document.getElementById('activities-section');
const activitiesList = document.getElementById('activities-list');
const backActivitiesBtn = document.getElementById('back-activities-btn');

let html5QrCode = null; // We zullen de QR-code scanner hier initialiseren
let credentials = [];
// Open menu
menuButton.addEventListener('click', () => {
  menuScreen.style.display = 'flex';
});

// Sluit menu
backMenuBtn.addEventListener('click', () => {
  menuScreen.style.display = 'none';
  activitiesSection.style.display = 'none'; // Verberg activiteiten sectie als deze open is
});

// Open activiteiten sectie
activitiesOption.addEventListener('click', () => {
  activitiesSection.style.display = 'block';
  showActivities();
});

// Sluit activiteiten sectie
backActivitiesBtn.addEventListener('click', () => {
  activitiesSection.style.display = 'none';
});

// Functie om opgeslagen deelacties te tonen in activiteitenlijst
function showActivities() {
  activitiesList.innerHTML = ''; // Leeg de lijst
  // Sorteer de activiteiten op datum en tijd (meest recente eerst)
  credentials.sort((a, b) => new Date(b.validUntil) - new Date(a.validUntil));
  credentials.forEach((cred) => {
      if (cred.isShareAction) {
          const activityItem = document.createElement('li');
          activityItem.innerHTML = `${cred.name}<br><small>${cred.validUntil}</small>`;
          activitiesList.appendChild(activityItem);
      }
  });
}

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

// Functie om kaartjes van issuers in de wallet weer te geven en kaartjes van verifiers niet weer te geven
function displayCredentials() {
  walletGrid.innerHTML = ''; // Maak de wallet leeg
  credentials.forEach((cred, index) => {
    // Controleer of het een deelactie is (verifier-kaartje)
    if (!cred.isShareAction) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${cred.name}</h3>
      <button class="view-card">Bekijk <span class="arrow">→</span></button>`;
      card.addEventListener('click', () => showDetails(cred, index)); // Klik op kaartje toont details
      walletGrid.appendChild(card);
    }
  });
}


// Event listener voor de standaardkaartjes
document.querySelectorAll('.default-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    if (index === 0) { // Controleer of het om het eerste kaartje gaat
      showPersonalDataDetails();
    }
  });
});

// Functie om details van een personal data kaartje te tonen
function showPersonalDataDetails() {
  const detailsView = document.getElementById('personal-data-details');
  if (detailsView) { // Controleer of het element bestaat
    detailsView.style.display = 'block';

    // Zorg dat de "Back" knop de details weer verbergt
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
      backBtn.onclick = () => {
        detailsView.style.display = 'none';
      };
    }
  }
}

// Functie om details van een kaartje te tonen
function showDetails(credential, index) {
  // Controleer of het een standaardkaartje is
  if (credential.name === "Personal data") {
    showPersonalDataDetails();
    return;
  }

  // Als het geen standaardkaartje is, toon de details van het kaartje
  detailsTitle.textContent = credential.name;
  let detailsHTML = '';

  // Vul de details van het kaartje, deze zijn altijd aanwezig
  for (const key in credential.data) {
    if (credential.data.hasOwnProperty(key)) {
      detailsHTML += `<p><strong>${key}:</strong> ${credential.data[key]}</p>`;
    }
  }

  detailsContent.innerHTML = detailsHTML;
  
  // Toon de juiste details container voor niet-standaard kaartjes
  const detailsView = document.getElementById('details');
  detailsView.style.display = 'block';

  // Sluit details weergave (Terug-knop)
  closeDetailsBtn.onclick = () => {
    detailsView.style.display = 'none';
  };

  // Verwijder het kaartje (Verwijderen-knop)
  deleteDetailsBtn.onclick = () => {
    credentials.splice(index, 1);
    saveCredentials();
    displayCredentials();
    detailsView.style.display = 'none';
  };
}


// Functie om de QR-code scanner te starten
function startQrScan() {
  document.querySelector('.scan-container').style.display = 'none'; // Verberg scan-knop en tekst
  closeScanButton.style.display = 'block'; // Toon de sluit-knop
  readerDiv.style.display = 'block'; // Toon de camera

  // Check of html5QrCode al bestaat, zo niet, initialiseer het
  if (!html5QrCode) {
    html5QrCode = new Html5Qrcode("reader");
  }

  console.log("Starting QR scanner...");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      console.log("QR code scanned: ", decodedText);
      try {
        const data = JSON.parse(decodedText);

        // Stap 1: Controleer of het een verifier QR-code is
        if (data.verifier && data.requestedCard && data.requester && data.purpose) {
          console.log("Verifier QR-code herkend.");
          console.log("Gevraagde kaart: ", data.requestedCard);
          console.log("Aanvrager: ", data.requester);
        
          // Dynamische vraag in de modal
          document.getElementById('share-question-text').innerText = `Wilt u onderstaande gegevens delen met ${data.requester}?`;
          document.getElementById('share-reason').innerText = `${data.purpose}`; // Reden uit QR-code
          document.getElementById('share-details').innerText = `${data.requestedCard}`; // Gegevens uit QR-code
        
          // Toon de modal
          shareQuestionModal.style.display = 'flex';
        
          // Verwerk het antwoord bij "Delen"
          yesShareBtn.onclick = () => {
            const timestamp = new Date().toLocaleString();
            credentials.push({
              name: `Gegevens gedeeld met ${data.requester}`,
              validUntil: timestamp,
              isShareAction: true // Markeer als deelactie
            });
            saveCredentials();
            shareQuestionModal.style.display = 'none'; // Verberg modal
          
            // Stop de QR-scanner en herstel de knoppen
            html5QrCode.stop().then(() => {
              console.log("QR scanner stopped.");
              readerDiv.style.display = 'none';
              closeScanButton.style.display = 'none';
              document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
            }).catch(err => {
              console.error("Failed to stop scanning: ", err);
            });
          };
        
          // Verwerk het antwoord bij "Stop"
          stopShareBtn.onclick = () => {
            shareQuestionModal.style.display = 'none'; // Verberg modal zonder actie
          
            // Stop de QR-scanner en herstel de knoppen
            html5QrCode.stop().then(() => {
              console.log("QR scanner stopped.");
              readerDiv.style.display = 'none';
              closeScanButton.style.display = 'none';
              document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
            }).catch(err => {
              console.error("Failed to stop scanning: ", err);
            });
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
          document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
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
}

// Sluit de scanner handmatig wanneer op "Scannen afsluiten" wordt geklikt
closeScanButton.addEventListener('click', () => {
  if (html5QrCode) {
    console.log("Stopping QR scanner...");
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped manually.");
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  } else {
    console.error("Cannot stop scanner as it is not running.");
  }
});

// Event listener voor de bestaande scan-knop, vervangt deze door de nieuwe functie
scanButton.addEventListener('click', () => {
  startQrScan();
});

// Laad bestaande kaartjes bij het opstarten
loadCredentials();
displayCredentials();
