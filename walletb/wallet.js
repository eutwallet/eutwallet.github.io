// *** QR Code Scanner Elementen ***
const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button');
const readerDiv = document.getElementById('reader');
const floatingQrButton = document.getElementById('floating-qr-button');
const addCardScreen = document.getElementById('add-card-screen');

// *** Wallet Elementen ***
const walletGrid = document.getElementById('wallet-grid');
const detailsView = document.getElementById('details');
const detailsTitle = document.getElementById('details-title');
const detailsContent = document.getElementById('details-content');
const closeDetailsBtn = document.getElementById('close-details');
const deleteDetailsBtn = document.getElementById('delete-details');
const walletScreen = document.getElementById('wallet-screen');

// *** Menu Elementen ***
const menuScreen = document.getElementById('menu-screen');
const menuButton = document.querySelector('.menu-button');
const backMenuBtn = document.getElementById('back-menu-btn');
const activitiesNavbarItem = document.getElementById('activities-navbar-item');
const overviewNavbarItem = document.getElementById('overview-navbar-item');
const bottomNav = document.querySelector('.bottom-nav');
const machtigingNavbarItem = document.getElementById('machtigingen-navbar-item'); 
const instellingenNavbarItem = document.getElementById('instellingen-navbar-item');
const instellingenSection = document.getElementById('instellingen-section');

// *** Activiteiten Elementen ***
const activitiesOption = document.getElementById('activities-option');
const activitiesSection = document.getElementById('activities-section');
const activitiesList = document.getElementById('activities-list');
const backActivitiesBtn = document.getElementById('back-activities-btn');
const activityScreen = document.getElementById('activities-section');

// *** Pincode Bevestiging Elementen ***
const pinConfirmationScreen = document.getElementById('pin-confirmation-screen');
const confirmPinBtn = document.getElementById('confirm-pin');
const pinConfirmationScreenVerifier = document.getElementById('pin-confirmation-screen-verifier');
const confirmPinBtnVerifier = document.getElementById('confirm-pin-verifier');

// *** Successcherm Elementen ***
const successScreen = document.getElementById('success-screen');
const successMessage = document.getElementById('success-message');
const verifierNameElement = document.getElementById('verifier-name');
const seeActivityBtn = document.getElementById('see-activity-btn');
const closeSuccessBtn = document.getElementById('close-success-btn');

// *** Issuer Elementen ***
const issuerQuestionModal = document.getElementById('issuer-question-modal');
const saveButton = document.getElementById('save-button'); // Opslaan-knop
const stopButtonIssuer = document.getElementById('stop-button-issuer'); // Stop-knop voor issuer
const issuerSuccessScreen = document.getElementById('issuer-success-screen');
const closeIssuerSuccessBtn = document.getElementById('close-issuer-success-btn'); // Sluitknop voor successcherm

// *** Verifier elementen ***
const shareQuestionModal = document.getElementById('share-question-modal');
const shareQuestionText = document.getElementById('share-question-text');
const shareDetails = document.getElementById('share-details');
const yesShareBtn = document.getElementById('yes-share-btn');
const stopShareBtn = document.getElementById('stop-share-btn');


// *** RDFCI Modal Elementen ***
const rdfciModal = document.getElementById('rdfci-modal');
const rdfciAgreement = document.getElementById('rdfci-agreement');
const rdfciData = document.getElementById('rdfci-data');
const rdfciAcceptButton = document.getElementById('rdfci-accept-button');
const rdfciStopButton = document.getElementById('rdfci-stop-button');

// *** RDFCV Modal Elementen ***
const rdfcvModal = document.getElementById('rdfcv-modal');
const rdfcvReason = document.getElementById('rdfcv-reason');
const rdfcvDetailsContainer = document.getElementById('rdfcv-details-container');
const rdfcvAgreement = document.getElementById('rdfcv-agreement');
const rdfcvAcceptButton = document.getElementById('rdfcv-accept-button');
const rdfcvStopButton = document.getElementById('rdfcv-stop-button');


// *** Veldmapping Object ***
const fieldMapping = {
  gn: 'Voornaam',
  sn: 'Achternaam',
  bd: 'Geboortedatum',
  bsn: 'Burgerservicenummer (BSN)',
  omv: 'Organisatiemachtiging VOG',
  vog: 'Verklaring Omtrent Gedrag (VOG)',
  nat: 'Nationaliteit',
  va: 'Geldigheid paspoort',
  a: {
    '12t': 'opslag: 12 maanden, gedeeld met derden: nee',
    '60t': 'opslag: 60 maanden, gedeeld met derden: nee',
    'w': 'Bewaarplicht en datadeling met derden volgens wettelijke richtlijn'
  },
};


let html5QrCode = null; // We zullen de QR-code scanner hier initialiseren
let credentials = [];
let currentVerifierName = ""; // Variabele om de naam van de verifier op te slaan
let isSharingActionInProgress = false; // Houd de status van de deelactie bij

// Logica voor het wisselen van schermen
document.getElementById('next-welcome').addEventListener('click', function() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('pin-inlog-screen').style.display = 'flex';
});

// Zorg ervoor dat de submit-pin knop altijd klikbaar is
document.getElementById('submit-pin').disabled = false;

// Event listener voor het inloggen met de pincode
document.getElementById('submit-pin').addEventListener('click', function() {
  document.getElementById('pin-inlog-screen').style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'block';
});


// Toon de navbar na succesvol inloggen
document.getElementById('submit-pin').addEventListener('click', function() {
  document.getElementById('pin-inlog-screen').style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'block';
  
  // Toon de navbar nu de gebruiker is ingelogd
  bottomNav.style.display = 'flex';
});


// Voeg de event listener toe voor het klikken op de overzicht-knop in de navbar
overviewNavbarItem.addEventListener('click', () => {
  // Verberg het activiteiten-scherm, machtiging-sectie en instellingen-sectie
  activitiesSection.style.display = 'none';
  document.getElementById('machtiging-section').style.display = 'none';
  instellingenSection.style.display = 'none'; // Verberg instellingen-sectie

  // Toon het wallet-overzichtsscherm
  document.getElementById('wallet-screen').style.display = 'block';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
});

// Voeg de event listener toe voor het klikken op de activiteiten-knop in de navbar
activitiesNavbarItem.addEventListener('click', () => {
  // Verberg alle andere secties
  document.getElementById('wallet-screen').style.display = 'none';
  document.getElementById('machtiging-section').style.display = 'none'; // Verberg machtigingen-sectie
  instellingenSection.style.display = 'none'; // Verberg instellingen-sectie

  // Toon het activiteiten-scherm
  activitiesSection.style.display = 'flex';

  // Haal de activiteiten op en toon ze
  showActivities();

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het activiteiten-item actief in de navbar
  activitiesNavbarItem.classList.add('active');
});


// Voeg de event listener toe voor het klikken op de machtingen-knop in de navbar
machtigingNavbarItem.addEventListener('click', () => {
  // Verberg alle andere secties, zoals de wallet-sectie, activiteiten-sectie en instellingen-sectie
  document.getElementById('wallet-screen').style.display = 'none';
  activitiesSection.style.display = 'none'; // Verberg activiteiten-sectie
  instellingenSection.style.display = 'none'; // Verberg instellingen-sectie

  // Toon het machtigingen-scherm
  document.getElementById('machtiging-section').style.display = 'flex';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het machtigingen-item actief in de navbar
  machtigingNavbarItem.classList.add('active');
});

// Voeg de event listener toe voor het klikken op de instellingen-knop in de navbar
instellingenNavbarItem.addEventListener('click', () => {
  // Verberg alle andere secties
  document.getElementById('wallet-screen').style.display = 'none';
  activitiesSection.style.display = 'none'; // Verberg activiteiten-sectie
  document.getElementById('machtiging-section').style.display = 'none'; // Verberg machtigingen-sectie

  // Toon het instellingen-scherm
  instellingenSection.style.display = 'flex';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het instellingen-item actief in de navbar
  instellingenNavbarItem.classList.add('active');
});

function convertToStandardDate(dateString) {
  // Converteer 'DD/MM/YYYY, HH:mm:ss' naar 'YYYY-MM-DDTHH:mm:ss'
  let [datePart, timePart] = dateString.split(', ');
  let [day, month, year] = datePart.split('/');
  return `${year}-${month}-${day}T${timePart}`;
}

function showActivities() {
  activitiesList.innerHTML = ''; // Leeg de lijst

  // Filter activiteiten met geldige tijdstempels
  const filteredCredentials = credentials.filter(cred => cred.actionTimestamp);
  
  // Sorteer de activiteiten op datum en tijd (meest recente eerst)
  filteredCredentials.sort((a, b) => {
    let dateA = Date.parse(convertToStandardDate(a.actionTimestamp));
    let dateB = Date.parse(convertToStandardDate(b.actionTimestamp));
    return dateB - dateA;
  });

  // Voeg activiteiten toe aan de lijst
  filteredCredentials.forEach((cred) => {
    let activityItem = document.createElement('li');
    if (cred.isShareAction) {
      // Verifier-actie
      activityItem.innerHTML = `
        <strong style="color: #152A62;">${cred.name}</strong><br>
        <span style="color: #152A62;">Gegevens gedeeld</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    } else {
      // Issuer-actie
      const issuerInfo = cred.issuedBy ? cred.issuedBy : "Onbekende uitgever";
      activityItem.innerHTML = `
        <strong style="color: #152A62;">${issuerInfo}</strong><br>
        <span style="color: #152A62;">${cred.name} opgehaald</span><br>
        <span style="color: #152A62;">${cred.actionTimestamp}</span>
      `;
    }

    // Voeg scheidingslijn toe
    const divider = document.createElement('div');
    divider.className = 'activity-divider';

    activitiesList.appendChild(activityItem);
    activitiesList.appendChild(divider);
  });
}



// Mapping van kaartnamen naar stijlen
const cardStyles = {
  'persoonlijke data': {
    iconClass: 'fas fa-id-card',
    iconColor: '#D6E6F2',
    textColor: '#4A6C85'
  },
  'woonadres': {
    iconClass: 'fas fa-home',
    iconColor: '#DAEEDC',
    textColor: '#5F7F60'
  },
  'organisatiemachtiging vog': {
    iconClass: 'fas fa-file-signature',
    iconColor: '#D4A5D7',
    textColor: '#7A3E9D'
  },
  'werkgever': {
    iconClass: 'fas fa-briefcase',
    iconColor: '#FBC4AB',
    textColor: '#D35400'
  },
  'verklaring omtrent gedrag (vog)': {
    iconClass: 'fas fa-file-contract',
    iconColor: '#00588E',
    textColor: '#00588E'
  },
  // Voeg meer kaartstijlen toe indien nodig
};


function applyStylesToCards() {
  document.querySelectorAll('.default-card').forEach((card) => {
    const cardName = card.querySelector('.card-text h3').textContent.trim().toLowerCase();
    const styles = cardStyles[cardName] || {
      iconClass: 'far fa-id-badge',
      iconColor: '#333',
      textColor: '#333'
    };

    const iconElement = card.querySelector('i');
    const h3Element = card.querySelector('.card-text h3');

    // Update de icon class
    iconElement.className = styles.iconClass;

    // Pas de kleuren toe
    iconElement.style.color = styles.iconColor;
    h3Element.style.color = styles.textColor;
  });
}

// **Roep de functie hier aan**
applyStylesToCards();

// Functie om kaartjes van issuers in de wallet weer te geven en kaartjes van verifiers niet weer te geven
function displayCredentials() {
  walletGrid.innerHTML = ''; // Maak de wallet leeg

  credentials.forEach((cred, index) => {
    if (!cred.isShareAction) {
      const card = document.createElement('div');
      card.className = 'card';

      // Haal stijlen op basis van kaartnaam
      const nameLower = cred.name.toLowerCase();
      const styles = cardStyles[nameLower] || {
        iconClass: 'far fa-id-badge',
        iconColor: '#333',
        textColor: '#333'
      };

      // Definieer grootte en marges
      const iconSize = '30px';
      const textSize = '18px';
      const issuerTextSize = '14px'; // Kleiner lettertype voor de issuer
      const iconMarginBottom = '10px';

      // Voeg FA-icoon en tekst toe aan de kaart met dynamische kleur en inline styles
      card.innerHTML = `
        <i class="${styles.iconClass}" 
            style="color: ${styles.iconColor}; font-size: ${iconSize}; margin-bottom: ${iconMarginBottom};">
        </i>
        <div class="card-text" style="font-size: ${textSize};">
          <h3 style="color: ${styles.textColor}; margin: 0;">${cred.name}</h3>
          ${cred.issuedBy ? `<p style="font-size: ${issuerTextSize}; color: #555; margin: 5px 0 0 0;">${cred.issuedBy}</p>` : ''}
        </div>
      `;

      // Voeg event listener toe voor het bekijken van kaartdetails
      card.addEventListener('click', () => showDetails(cred, index));

      // Voeg de kaart toe aan het wallet-grid
      walletGrid.appendChild(card);
    }
  });
}

// Functie om standaard kaartjes toe te voegen
function loadDefaultCredentials() {
  const defaultCards = [
    { name: 'Persoonlijke data', issuedBy: 'Nederlandse overheid', isShareAction: false },
    { name: 'Woonadres', issuedBy: 'Nederlandse overheid', isShareAction: false }
  ];
  defaultCards.forEach(defaultCard => {
    const exists = credentials.some(cred => cred.name === defaultCard.name);
    if (!exists) {
      credentials.push(defaultCard);
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

// Event listener voor de standaardkaartjes
document.querySelectorAll('.default-card').forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('light-card')) {
      showPersonalDataDetails();
    } else if (card.classList.contains('dark-card')) {
      showAddressDetails();
    }
  });
});


// Functie om details van het personal data kaartje te tonen
function showPersonalDataDetails() {
  const detailsView = document.getElementById('personal-data-details');
  if (detailsView) {
    detailsView.style.display = 'block';

    // Verberg het wallet-scherm
    document.getElementById('wallet-screen').style.display = 'none';

    // Verberg de bottom-nav
    bottomNav.style.display = 'none';

    // Sluit details weergave (Terug-knop)
    const closeDetailsBtn = document.getElementById('close-details-personal');
    if (closeDetailsBtn) {
      closeDetailsBtn.onclick = () => {
        detailsView.style.display = 'none';
        document.getElementById('wallet-screen').style.display = 'block'; // Toon het wallet-scherm opnieuw
        bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
      };
    }
  }
}

// Functie om details van het tweede kaartje ("Woonadres") te tonen
function showAddressDetails() {
  const addressDetailsView = document.getElementById('address-details');
  if (addressDetailsView) {
    addressDetailsView.style.display = 'block';

    // Verberg het wallet-scherm
    document.getElementById('wallet-screen').style.display = 'none';

    // Verberg de bottom-nav
    bottomNav.style.display = 'none';

    // Sluit details weergave (Terug-knop)
    const closeDetailsBtn = document.getElementById('close-details-address');
    if (closeDetailsBtn) {
      closeDetailsBtn.onclick = () => {
        addressDetailsView.style.display = 'none';
        document.getElementById('wallet-screen').style.display = 'block'; // Toon het wallet-scherm opnieuw
        bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
      };
    }
  }
}

function showDetails(credential, index) {
  // Verberg het wallet-scherm
  document.getElementById('wallet-screen').style.display = 'none';

  // Verberg de bottom-nav
  bottomNav.style.display = 'none';

  // Controleer of het een standaardkaartje is
  if (credential.name === "Personal data") {
    showPersonalDataDetails();
    return;
  } else if (credential.name === "Woonadres") {
    showAddressDetails();
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
    document.getElementById('wallet-screen').style.display = 'block'; // Toon het wallet-scherm opnieuw
    bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
  };

  // Verwijder het kaartje (Verwijderen-knop)
  deleteDetailsBtn.onclick = () => {
    credentials.splice(index, 1); // Verwijder het kaartje uit de lijst
    saveCredentials(); // Sla de wijzigingen op
    displayCredentials(); // Werk de weergave van kaartjes bij
    detailsView.style.display = 'none';
    document.getElementById('wallet-screen').style.display = 'block'; // Toon het wallet-scherm opnieuw
    bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
  };
}


// Bij het laden van de pagina
loadCredentials();
loadDefaultCredentials();
displayCredentials();



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
              const timestamp = new Date().toLocaleString();

              // Stap 1: Controleer of het een verifier QR-code is (rdfcv)
              if (data.rdfcv && data.requester && data.reason) {
                  console.log("Verifier QR-code met rdfcv herkend.");

                  // Vul de rdfcv modal met de juiste gegevens
                  populateRdfcvModal(data);

                  // Toon het rdfcv vraagscherm
                  rdfcvModal.style.display = 'flex';

                  rdfcvAcceptButton.onclick = () => {
                      // Toon eerst het pincode-bevestigingsscherm
                      goToPinConfirmationVerifier();

                      confirmPinBtnVerifier.onclick = () => {  // Gebruik de specifieke verifier-knop
                        credentials.push({
                          name: data.requester || 'Onbekende verifier',  // Verifier naam opslaan
                          reason: data.reason || 'Geen reden opgegeven',  // Reden opslaan
                          sharedData: data.rdfcv.map(field => fieldMapping[field] || field),  // Gegevens opslaan volgens fieldmapping
                          actionTimestamp: timestamp,
                          isShareAction: true  // Markeer als deelactie, zodat het niet in de wallet verschijnt
                        });
                        saveCredentials();
                        goToVerifierSuccessScreen(data);  // Toon het verifier success-scherm
                        pinConfirmationScreenVerifier.style.display = 'none';  // Sluit het pincode bevestigingsscherm
                      };
                    
                      rdfcvModal.style.display = 'none';  // Verberg het rdfcv vraagscherm
                    };

                  rdfcvStopButton.onclick = () => {
                      rdfcvModal.style.display = 'none';
                      resetQrScanner();
                  };

              // Stap 2: Controleer of het een issuer QR-code is (rdfci)
              } else if (data.issuedBy && data.name) {
                  console.log("Issuer QR-code herkend.");

                  // Stap 2: Controleer op 'rdfci' in issuer QR-code
                  if (data.rdfci) {
                    console.log("Issuer QR-code met rdfci herkend.");
                
                    // Vul de modal met de nieuwe functie
                    populateRdfciModal(data);
                
                    // Toon het extra vraagscherm
                    rdfciModal.style.display = 'flex';
                
                    rdfciAcceptButton.onclick = () => {
                        // Voeg hier functionaliteit toe om de issuer-kaartje op te slaan
                        credentials.push({
                            name: data.name || 'Onbekend kaartje',
                            issuedBy: data.issuedBy || 'Onbekende uitgever',
                            actionTimestamp: timestamp,
                            isShareAction: false,
                            data: data // Bewaar alle details van het kaartje
                        });
                
                        saveCredentials();
                
                        // Toon het issuer success-scherm
                        goToIssuerSuccessScreen(data.name, data.issuedBy);
                
                        // Sluit het extra vraagscherm
                        rdfciModal.style.display = 'none';
                    };
                
                    rdfciStopButton.onclick = () => {
                        rdfciModal.style.display = 'none';
                        resetQrScanner();
                    };
                
                  } else {
                      // Toon de bestaande issuer modal
                      issuerQuestionModal.style.display = 'flex';
                      console.log("Issuer modal geopend.");

                      const issuerName = data.issuedBy || 'Onbekende uitgever';
                      const cardName = data.name || 'Onbekend kaartje';
                      document.getElementById('issuer-data').innerText = cardName;
                      document.getElementById('issuer-issuedBy').innerText = issuerName;

                      saveButton.onclick = () => {
                          console.log("Opslaan-knop ingedrukt voor issuer.");
                          credentials.push({
                              name: cardName,
                              issuedBy: issuerName,
                              actionTimestamp: timestamp,
                              isShareAction: false,
                              data: {
                                kaartDetails: data,  // Sla alle kaartdetails op
                                gevraagdeGegevens: data.rdfci.map(field => fieldMapping[field] || field)  // Gebruik fieldmapping om de gevraagde gegevens op te slaan
                            }
                          });
                          saveCredentials();
                          console.log("Issuer gegevens opgeslagen in de wallet.");

                          goToIssuerSuccessScreen(cardName, issuerName);
                          console.log("Issuer success-scherm weergegeven.");

                          issuerQuestionModal.style.display = 'none';
                      };

                      stopButtonIssuer.onclick = () => {
                          console.log("Stop-knop ingedrukt. Issuer actie geannuleerd.");
                          issuerQuestionModal.style.display = 'none';
                          resetQrScanner();
                      };
                  }
              } else {
                  console.log("Onbekende QR-code structuur.");
              }

              // Sluit camera na succesvolle scan
              html5QrCode.stop().then(() => {
                  console.log("QR scanner stopped.");
                  readerDiv.style.display = 'none';
                  closeScanButton.style.display = 'none';
                  document.querySelector('.scan-container').style.display = 'flex';
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

// Voeg pincode-invoerfunctionaliteit toe
const pinInputs = document.querySelectorAll('.pin-box');
pinInputs.forEach((box, index) => {
    box.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < pinInputs.length - 1) {
            pinInputs[index + 1].focus();
        }
    });
});





// Verwerk de bevestiging van de pincode
confirmPinBtn.addEventListener('click', () => {
  goToSuccessScreen(currentVerifierName);
});

// Reset pincode-scherm na gebruik
function resetPinInputs() {
  pinInputs.forEach((input) => {
      input.value = '';
  });
  // Verwijder deze regel, zodat de bevestigingsknop niet wordt uitgeschakeld
  // confirmPinBtn.disabled = true;
}


function goToIssuerSuccessScreen(cardName, issuedBy) {
  issuerSuccessScreen.style.display = 'block';

  // Vul de nieuwe tekstvelden in het successcherm
  document.getElementById('issuer-success-data').innerText = cardName;
  document.getElementById('issuer-success-issuedBy').innerText = issuedBy;

  // Toon een kaartje met de gegevens
  const successCard = document.getElementById('issuer-success-card');

  // Haal stijlen op basis van kaartnaam
  const nameLower = cardName.toLowerCase();
  const styles = cardStyles[nameLower] || {
    iconClass: 'far fa-id-badge',
    iconColor: '#333',
    textColor: '#333'
  };

  // Definieer grootte en marges
  const iconSize = '30px';
  const textSize = '18px';
  const iconMarginBottom = '10px';

  // Voeg FA-icoon en tekst toe aan de kaart met dynamische kleur en inline styles
  successCard.innerHTML = `
    <i class="${styles.iconClass}" 
        style="color: ${styles.iconColor}; font-size: ${iconSize}; margin-bottom: ${iconMarginBottom};">
    </i>
    <div class="card-text" style="font-size: ${textSize};">
      <h3 style="color: ${styles.textColor};">${cardName}</h3>
    </div>
  `;
  successCard.classList.add('card'); // Voeg de kaartstijl toe
}

// Sluitknop voor het issuer success-scherm
closeIssuerSuccessBtn.addEventListener('click', () => {
  issuerSuccessScreen.style.display = 'none';
  displayCredentials(); // Zorg dat het nieuwe kaartje wordt weergegeven

  // Verberg het add-card scherm
  addCardScreen.style.display = 'none';

  // Toon het wallet-screen opnieuw
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
});

// Functie om een waarde op te halen uit het "Personal data" kaartje of local storage
function getFieldValue(field) {
  // Mapping van veldnamen naar specifieke waarden in de HTML van het "Personal data" kaartje
  const fieldMappings = {
      gn: "Voornaam",
      sn: "Achternaam",
      bd: "Geboortedatum",
      bsn: "Burgerservicenummer (BSN)"
  };

  // Haal de waarde uit het "Personal data" kaartje (HTML)
  if (['gn', 'sn', 'bd', 'bsn'].includes(field)) {
      const fieldName = fieldMappings[field];
      const elements = document.querySelectorAll('#personal-data-details p');
      for (let element of elements) {
          if (element.innerText.startsWith(fieldName)) {
              return element.innerText.split(': ')[1];
          }
      }
      return 'Niet gevonden';
  }

  // Haal de waarde uit de opgeslagen gegevens in de local storage voor 'omv'
  if (field === 'omv') {
      for (let credential of credentials) {
          if (credential.name === 'Organisatiemachtiging VOG' && credential.data) {
              // Bouw de uiteindelijke string op met alle sleutel-waarde-paren in het opgeslagen kaartje
              let details = [];
              for (let key in credential.data) {
                  if (credential.data.hasOwnProperty(key)) {
                      details.push(`${key}: ${credential.data[key]}`);
                  }
              }
              return details.join(', ');
          }
      }
  }

  return 'Niet gevonden';
}


// rdfci vullen
function populateRdfciModal(data) {
  // Fill in the fixed parts
  document.getElementById('rdfci-name').innerText = data.name || 'Onbekend kaartje';
  document.getElementById('rdfci-issuedBy').innerText = data.issuedBy || 'Onbekende uitgever';

  // "Wilt u de volgende gegevens delen met" moet dikgedrukt zijn
  document.getElementById('rdfci-share-with').innerHTML = `<strong>Wilt u de volgende gegevens delen met ${data.issuedBy}:</strong>`;

  // Process the requested rdfci data
  const detailsContainer = document.getElementById('rdfci-details-container');
  detailsContainer.innerHTML = ''; // Clear the container before adding new content

  // Group fields by card
  let fieldsByCard = {};

  // Mapping of standard cards to their selectors
  const standardCards = {
    'Persoonsgegevens': '#personal-data-details',
    'Woonadres': '#address-details'
  };

  data.rdfci.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Map to readable name

    // Check if the field belongs to a card in local storage
    const localStorageCard = credentials.find(credential => credential.name === fieldName);
    if (localStorageCard) {
      if (!fieldsByCard[fieldName]) {
        fieldsByCard[fieldName] = { type: 'localStorage', data: localStorageCard };
      }
    } else if (standardCards[fieldName]) {
      if (!fieldsByCard[fieldName]) {
        fieldsByCard[fieldName] = { type: 'standardCard', selector: standardCards[fieldName] };
      }
    } else {
      // Fields that are specific details from standard cards
      const matchingCardName = Object.keys(standardCards).find(cardName => {
        const cardElement = document.querySelector(standardCards[cardName]);
        if (cardElement) {
          const paragraphs = cardElement.querySelectorAll('p');
          return Array.from(paragraphs).some(p => p.textContent.includes(fieldName));
        }
        return false;
      });

      if (matchingCardName) {
        if (!fieldsByCard[matchingCardName]) {
          fieldsByCard[matchingCardName] = { type: 'standardCard', selector: standardCards[matchingCardName], fields: [] };
        }
        if (fieldsByCard[matchingCardName].fields) {
          fieldsByCard[matchingCardName].fields.push(fieldName);
        } else {
          fieldsByCard[matchingCardName].fields = [fieldName];
        }
      }
    }
  });

  // Now iterate over each card and create the card elements
  const cardNames = Object.keys(fieldsByCard);
  cardNames.forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Create card container
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Create card header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Example: Set header color based on card name
    switch (cardName) {
      case 'Persoonsgegevens':
        cardHeader.style.backgroundColor = '#B9E4E2';   
        break;
      case 'Woonadres':
        cardHeader.style.backgroundColor = '#445580'; 
        break;
      case 'Organisatiemachtiging VOG':
        cardHeader.style.backgroundColor = '#5A50ED'; 
        break;
      default:
        cardHeader.style.backgroundColor = '#0072C6'; // Default color
    }

    // Create card content container
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Create card title
    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardName;

    // Create card details container
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    if (cardInfo.type === 'localStorage') {
      // Add all details from local storage card using structured divs for alignment
      for (let key in cardInfo.data.data) {
        if (cardInfo.data.data.hasOwnProperty(key)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row'; // Class for styling

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${key}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';
          valueDiv.textContent = cardInfo.data.data[key];

          // Append label and value divs to the detail row
          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          // Append the row to the card details
          cardDetails.appendChild(detailRow);
        }
      }
    } else if (cardInfo.type === 'standardCard') {
      // Add specified details or all details from standard card
      const elements = document.querySelectorAll(`${cardInfo.selector} p`);
      elements.forEach(element => {
        const fieldLabel = element.innerText.split(':')[0];
        if (!cardInfo.fields || cardInfo.fields.includes(fieldLabel)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row'; // Class for styling

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${fieldLabel}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';
          valueDiv.textContent = element.innerText.split(':')[1].trim();

          // Append label and value divs to the detail row
          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          // Append the row to the card details
          cardDetails.appendChild(detailRow);
        }
      });
    }

    // Assemble card content
    cardContent.appendChild(cardTitleElement);
    cardContent.appendChild(cardDetails);

    // Assemble card container
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);

    // Append card to the details container
    detailsContainer.appendChild(cardContainer);
  });

  // Agreement processing (always add under the heading "Overeenkomst")
  if (data.a) {
    console.log('Data.a:', data.a);  // Controleer de waarde van data.a
    console.log('Mapped value:', fieldMapping.a[data.a]);  // Controleer de gemapte waarde
    const agreementFields = data.a.split(', ').map(agreement => fieldMapping.a[agreement] || agreement).join(', ');
    document.getElementById('rdfci-agreement').innerText = agreementFields;
  } else {
    document.getElementById('rdfci-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
}


// RFCV vraagscherm vullen
// RFCV vraagscherm vullen
function populateRdfcvModal(data) {
  // Vul de reden
  document.getElementById('rdfcv-reason').innerText = data.reason || 'Geen reden opgegeven.';

  // Voeg de naam van de verifier toe aan de vraag
  document.getElementById('rdfcv-question-text').innerText = `Wilt u onderstaande gegevens delen met ${data.requester}?`;

  // Verwerk de gevraagde gegevens
  const detailsContainer = document.getElementById('rdfcv-details-container');
  detailsContainer.innerHTML = ''; // Leeg de container

  // Mapping van standaardkaartjes naar selectors
  const standardCards = {
      'Persoonsgegevens': '#personal-data-details',
      'Woonadres': '#address-details',
      'Verklaring Omtrent het Gedrag (VOG)': '#vog-details' // Voeg VOG-kaartje toe
  };

  // Groepeer de velden en toon ze in kaartjes
  let fieldsByCard = {};

  data.rdfcv.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Gebruik field mapping

    // Zoek of het veld hoort bij een standaardkaartje
    const matchingCardName = Object.keys(standardCards).find(cardName => {
      const cardElement = document.querySelector(standardCards[cardName]);
      if (cardElement) {
          const paragraphs = cardElement.querySelectorAll('p');
          return Array.from(paragraphs).some(p => p.textContent.includes(fieldName));
      }
      return false;
    });

    if (matchingCardName) {
        if (!fieldsByCard[matchingCardName]) {
            fieldsByCard[matchingCardName] = { type: 'standardCard', selector: standardCards[matchingCardName], fields: [] };
        }
        if (fieldsByCard[matchingCardName].fields) {
            fieldsByCard[matchingCardName].fields.push(fieldName);
        } else {
            fieldsByCard[matchingCardName].fields = [fieldName];
        }
    } else {
        // Zoek of het veld hoort bij een kaartje in localStorage (bijv. voor VOG)
        const localStorageCard = credentials.find(credential => credential.name === fieldName);
        if (localStorageCard) {
            fieldsByCard[fieldName] = { type: 'localStorage', data: localStorageCard };
        }
    }
  });

  // Itereer over elk kaartje en maak de kaart elementen aan
  const cardNames = Object.keys(fieldsByCard);
  cardNames.forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Maak kaart container aan
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Maak kaart header aan
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Stel de achtergrondkleur in op basis van de kaartnaam
    switch (cardName) {
      case 'Persoonsgegevens':
        cardHeader.style.backgroundColor = '#B9E4E2';   
        break;
      case 'Woonadres':
        cardHeader.style.backgroundColor = '#445580'; 
        break;
      case 'Verklaring Omtrent het Gedrag (VOG)':
        cardHeader.style.backgroundColor = '#5A50ED'; 
        break;
      default:
        cardHeader.style.backgroundColor = '#0072C6'; // Default kleur
    }

    // Maak kaart content container aan
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Maak kaart titel aan
    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardName;
    cardContent.appendChild(cardTitleElement);

    // Maak kaart details aan
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    if (cardInfo.type === 'localStorage') {
      // Voeg alle details van het kaartje toe uit local storage met gestructureerde divs voor uitlijning
      for (let key in cardInfo.data.data) {
        if (cardInfo.data.data.hasOwnProperty(key)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row'; // Class for styling

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${key}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';
          valueDiv.textContent = cardInfo.data.data[key];

          // Voeg label en waarde toe aan de rij
          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          // Voeg de rij toe aan de kaartdetails
          cardDetails.appendChild(detailRow);
        }
      }
    } else if (cardInfo.type === 'standardCard') {
      // Voeg de specifieke details toe of alle details van het standaardkaartje
      const elements = document.querySelectorAll(`${cardInfo.selector} p`);
      elements.forEach(element => {
        const fieldLabel = element.innerText.split(':')[0];
        if (!cardInfo.fields || cardInfo.fields.includes(fieldLabel)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row'; // Class for styling

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${fieldLabel}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';
          valueDiv.textContent = element.innerText.split(':')[1].trim();

          // Voeg label en waarde toe aan de rij
          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          // Voeg de rij toe aan de kaartdetails
          cardDetails.appendChild(detailRow);
        }
      });
    }

    // Voeg de kaart content en details samen
    cardContent.appendChild(cardDetails);
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);

    // Voeg de kaart toe aan de container
    detailsContainer.appendChild(cardContainer);
  });

  // Agreement verwerken
  if (data.a) {
    console.log('Data.a:', data.a);  // Controleer de waarde van data.a
    console.log('Mapped value:', fieldMapping.a[data.a]);  // Controleer de gemapte waarde
    const agreementFields = data.a.split(', ').map(agreement => fieldMapping.a[agreement] || agreement).join(', ');
    document.getElementById('rdfcv-agreement').innerText = agreementFields;
  } else {
    document.getElementById('rdfcv-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
}



// Functie om het pincode bevestigingsscherm te tonen
function goToPinConfirmationVerifier() {
  console.log("Navigating to pin confirmation screen...");
  rdfcvModal.style.display = 'none'; // Verberg de vraagmodal
  pinConfirmationScreenVerifier.style.display = 'block'; // Toon verifier pin bevestigingsscherm
  resetPinInputs(); // Reset pincode-invoervelden
}

// Functie voor het succes-scherm na delen met verifier
function goToVerifierSuccessScreen(data) {
  successScreen.style.display = 'block';
  successMessage.textContent = "Succes!";
  verifierNameElement.textContent = data.requester || 'Onbekende partij'; // Voeg hier data.requester toe

  // Logging wanneer het succes-scherm wordt weergegeven
  console.log("Succes-scherm geopend voor verifier:", data.requester || 'Onbekende partij');

  // "Zie Activiteit" knop
  seeActivityBtn.onclick = function() {
      console.log("Zie Activiteit knop ingedrukt. Wallet-scherm verbergen, activiteiten-scherm tonen.");

      successScreen.style.display = 'none'; // Verberg het succes-scherm
      addCardScreen.style.display = 'none'; // Verberg het add-card scherm
      walletScreen.style.display = 'none';  // Verberg het wallet-scherm
      bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
      activityScreen.style.display = 'block'; // Toon het activiteiten-scherm
      showActivities(); // Toon de activiteitenlijst

      // Navigatiebalk correct instellen
      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active')); 
      document.querySelector('.nav-item:nth-child(2)').classList.add('active'); // Activeer het activiteiten-item

      console.log("Wallet-scherm verborgen, activiteiten-scherm getoond.");
  };

  // "Sluiten" knop
  closeSuccessBtn.onclick = function() {
      console.log("Sluiten knop ingedrukt. Terug naar het wallet-scherm.");

      successScreen.style.display = 'none'; // Verberg het succes-scherm
      addCardScreen.style.display = 'none'; // Verberg het add-card scherm
      bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
      walletScreen.style.display = 'block'; // Terug naar het wallet-scherm
      resetPinInputs(); // Reset de pincode-invoer

      // Reset de status van de deelactie
      isSharingActionInProgress = false;

      console.log("Succes-scherm verborgen, wallet-scherm getoond, deelactie gereset.");
  };
}


// Functie om gegevens op te slaan in localStorage zonder een kaartje toe te voegen
function saveSharedData(data) {
  const timestamp = new Date().toLocaleString();
  credentials.push({
      name: data.name || 'Onbekende partij',
      reason: data.reason || 'Geen reden opgegeven',
      sharedData: data.rdfcv.map(field => fieldMapping[field] || field),
      agreement: data.a ? data.a.split(', ').map(agreement => fieldMapping.a[agreement] || agreement) : [],
      actionTimestamp: timestamp,
      isShareAction: true // Markeer als deelactie
  });
  saveCredentials();
}

// Zwevende knop opent alleen het add-card scherm
floatingQrButton.addEventListener('click', () => {
  // Verberg de wallet-screen en de navbar
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';

  // Toon het add-card scherm (nog zonder de scanner)
  addCardScreen.style.display = 'flex';
});

// Logica voor het sluiten van het add-card scherm
const closeAddCardBtn = document.getElementById('close-add-card');

if (closeAddCardBtn) {
  closeAddCardBtn.onclick = () => {
    // Verberg het add-card scherm
    addCardScreen.style.display = 'none';

    // Toon het wallet-screen opnieuw
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
  };
}
