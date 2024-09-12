const scanButton = document.getElementById('scan-button');
const walletGrid = document.getElementById('wallet-grid');
const readerDiv = document.getElementById('reader');
const questionScreen = document.getElementById('question-screen');
const shareQuestion = document.getElementById('share-question');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const detailsView = document.getElementById('details');
const detailsTitle = document.getElementById('details-title');
const detailsContent = document.getElementById('details-content');
const closeDetailsBtn = document.getElementById('close-details');
const deleteDetailsBtn = document.getElementById('delete-details');

let credentials = [];

function loadCredentials() {
  const storedCredentials = localStorage.getItem('credentials');
  if (storedCredentials) {
    credentials = JSON.parse(storedCredentials);
  }
}

function saveCredentials() {
  localStorage.setItem('credentials', JSON.stringify(credentials));
}

function displayCredentials() {
  walletGrid.innerHTML = '';
  credentials.forEach((cred, index) => {
    if (!cred.isShareAction) { // Alleen normale kaartjes tonen, geen deelacties
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${cred.name}</h3>`; // Gebruik backticks voor string interpolatie
      card.addEventListener('click', () => showDetails(cred, index)); // Voeg event listener toe om details te bekijken
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

scanButton.addEventListener('click', () => {
  readerDiv.style.display = 'block';
  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      try {
        const data = JSON.parse(decodedText);

        // Stop de QR-scanner direct na een succesvolle scan
        html5QrCode.stop().then(() => {
          readerDiv.style.display = 'none'; // Verberg de QR-scanner
        }).catch(err => {
          console.error("Failed to stop scanning: ", err);
        });

        // Controleer of de QR-code van een verifier komt
        if (data.verifier && data.requestedCard) {
          const requestedCard = data.requestedCard;
          const requester = data.requester;

          // Toon vraag in full screen
          questionScreen.style.display = 'block';
          shareQuestion.innerText = `Wil je het kaartje "${requestedCard}" delen met ${requester}?`;

          // Handle Yes/No response
          yesButton.onclick = () => {
            // Sla de deelactie op in localStorage zonder deze als kaartje te tonen
            const timestamp = new Date().toLocaleString();
            credentials.push({
              name: `Kaartje "${requestedCard}" gedeeld met ${requester}`,
              validUntil: timestamp,
              isShareAction: true // Markeer als deelactie
            });
            saveCredentials();
            questionScreen.style.display = 'none'; // Ga terug naar het hoofscherm zonder de actie te tonen
          };

          noButton.onclick = () => {
            questionScreen.style.display = 'none'; // Ga terug naar het hoofscherm
          };

        } else {
          // Verwerk issuer-QR-code (normaal kaartje opslaan)
          credentials.push({ name: data.name || "Unknown", validUntil: 'N/A', data: data });
          saveCredentials();
          displayCredentials();
        }

      } catch (error) {
        console.error(`QR-code parse error: ${error}`);
      }
    },
    (errorMessage) => {
      console.error(`QR scan failed: ${errorMessage}`);
    }
  );
});

// Laden en weergeven van de opgeslagen kaartjes
loadCredentials();
displayCredentials();
