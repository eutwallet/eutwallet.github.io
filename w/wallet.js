const scanButton = document.getElementById('scan-button');
const walletGrid = document.getElementById('wallet-grid');
const readerDiv = document.getElementById('reader');
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
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${cred.name}</h3>`;
    card.addEventListener('click', () => showDetails(cred, index)); 
    walletGrid.appendChild(card);
  });
}

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

scanButton.addEventListener('click', () => {
  readerDiv.style.display = 'block';
  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      try {
        const data = JSON.parse(decodedText);

        html5QrCode.stop().then(() => {
          readerDiv.style.display = 'none'; 
        }).catch(err => {
          console.error("Failed to stop scanning: ", err);
        });

        credentials.push({ name: data.name || "Unknown", validUntil: 'N/A', data: data });
        saveCredentials();
        displayCredentials();

      } catch (error) {
        console.error(`QR-code parse error: ${error}`);
      }
    },
    (errorMessage) => {
      console.error(`QR scan failed: ${errorMessage}`);
    }
  );
});

loadCredentials();
displayCredentials();
