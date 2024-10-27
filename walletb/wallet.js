// *** QR Code Scanner Elementen ***
const scanButton = document.getElementById('scan-button');
const closeScanButton = document.getElementById('close-scan-button');
const readerDiv = document.getElementById('reader');
const floatingQrButton = document.getElementById('qr-scan-button');
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
const machtigingSection = document.getElementById('machtiging-section');

// *** Activiteiten Elementen ***
const activitiesOption = document.getElementById('activities-option');
const activitiesSection = document.getElementById('activities-section');
const activitiesList = document.getElementById('activities-list');
const backActivitiesBtn = document.getElementById('back-activities-btn');
const activityScreen = document.getElementById('activities-section');

// *** Pincode Bevestiging Elementen ***
const pinConfirmationScreenVerifier = document.getElementById('pin-confirmation-screen-verifier');
const confirmPinBtnVerifier = document.getElementById('confirm-pin-verifier');

// *** Successcherm Elementen ***
const successScreen = document.getElementById('verifier-success-screen');
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
const confirmPinIssuerBtn = document.getElementById('confirm-pin-issuer');
const pinConfirmationScreenIssuer = document.getElementById('pin-confirmation-screen-issuer');

// *** RDFCV Modal Elementen ***
const rdfcvModal = document.getElementById('rdfcv-modal');
const rdfcvReason = document.getElementById('rdfcv-reason');
const rdfcvDetailsContainer = document.getElementById('rdfcv-details-container');
const rdfcvAgreement = document.getElementById('rdfcv-agreement');
const rdfcvAcceptButton = document.getElementById('rdfcv-accept-button');
const rdfcvStopButton = document.getElementById('rdfcv-stop-button');

// *** CSAS Elementen ***
const csasModal = document.getElementById('csas-modal');
const csasRequester = document.getElementById('csas-requester');
const csasDetailsContainer = document.getElementById('csas-details-container');
const csasAgreement = document.getElementById('csas-agreement');
const csasAcceptButton = document.getElementById('csas-accept-button');
const csasStopButton = document.getElementById('csas-stop-button');
const csasPinConfirmationScreen = document.getElementById('csas-pin-confirmation-screen');

const csasSuccessScreen = document.getElementById('csas-success-screen');
const csasSuccessRequester = document.getElementById('csas-success-requester');
const csasSuccessCardContainer = document.getElementById('csas-success-card-container');
const closeCsasSuccessBtn = document.getElementById('close-csas-success-btn');


// *** Mandate Elementen ***
const mandateModal = document.getElementById('mandate-modal');
const mandateRequester = document.getElementById('mandate-requester');
const mandateReason = document.getElementById('mandate-reason');
const mandateDataContainer = document.getElementById('mandate-data-container');
const mandateAgreement = document.getElementById('mandate-agreement');
const mandateRequesterAgreement = document.getElementById('mandate-requester-agreement');
const mandateStopButton = document.getElementById('mandate-stop-button');
const mandateAcceptButton = document.getElementById('mandate-accept-button');

const mandatePinConfirmationScreen = document.getElementById('mandate-pin-confirmation-screen');
const confirmPinMandateBtn = document.getElementById('confirm-pin-mandate');

const mandateSuccessScreen = document.getElementById('mandate-success-screen');
const mandateSuccessRequester = document.getElementById('mandate-success-requester');
const viewMandateButton = document.getElementById('view-mandate-button');
const closeMandateSuccessButton = document.getElementById('close-mandate-success-button');

// *** Trusted Contacts Elementen ***
const contactsNavbarItem = document.getElementById('contacts-navbar-item');
const trustedContactsSection = document.getElementById('trusted-contacts-section');
const messagesGrid = document.getElementById('messages-grid');
const backTrustedContactsBtn = document.getElementById('back-trusted-contacts');

// Elementen voor het bericht details scherm
const messageDetailsScreen = document.getElementById('message-details-screen');
const closeMessageDetailsBtn = document.getElementById('close-message-details');
const contactNameElement = document.getElementById('contact-name');
const messageDatetimeElement = document.getElementById('message-datetime');
const messageTextElement = document.getElementById('message-text');

// Elementen voor het notificatiebolletje
const notificationBadge = document.getElementById('notification-badge');

// Elementen voor het instellingen knop en scherm
const settingsButton = document.getElementById('settings-button');
const instellingenSection = document.getElementById('instellingen-section');
const closeSettingsBtn = document.getElementById('close-settings');


// *** Elementen card catalogue ***
const openCardCatalogueBtn = document.getElementById('open-card-catalogue');
const cardCatalogue = document.getElementById('card-catalogue');
const closeCardCatalogueBtn = document.getElementById('close-card-catalogue');


// Elementen current cards
const openCurrentCardsBtn = document.getElementById('open-current-cards');
const currentCardsSection = document.getElementById('current-cards');
const closeCurrentCardsBtn = document.getElementById('close-current-cards');


const fieldMapping = {
  gn: 'Voornaam',
  sn: 'Achternaam',
  bd: 'Geboortedatum',
  bsn: 'Burgerservicenummer (BSN)',
  omv: 'Organisatiemachtiging VOG',
  vog: 'Verklaring Omtrent Gedrag (VOG)',
  nat: 'Nationaliteit',
  val: 'Geldigheid paspoort',
  UWV: 'Uitvoeringsinstituut Werknemersverzekeringen (UWV)',
  BKR: 'Bureau Krediet Registratie (BKR)',
  BD: 'Belastingdienst',
  SVB: 'Sociale Verzekeringsbank (SVB)',
  ln: 'Lengte',          
  ph: 'Foto',   
  LEID: 'Legal entity nummer',
  Issued_Date: 'Uitgiftedatum',
  Issued_to_subject: 'Uitgegeven aan',
  Algemeen_profiel: 'Algemeen profiel',
  Specifiek_profiel: 'Specifiek profiel',
  Attestation_Trust_Type: 'Type attestatie',
  a: {
    '12t': 'opslag: 12 maanden, gedeeld met derden: nee',
    '60t': 'opslag: 60 maanden, gedeeld met derden: nee',
    'w': 'Bewaarplicht en datadeling met derden volgens wettelijke richtlijn'
  }
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
  console.log("Machtiging-section getoond");
   // Roep de functie aan om de machtigingen weer te geven
   displayMachtigingen();

   
});

function convertToStandardDate(dateString) {
  // Converteer 'DD-MM-YYYY, HH:mm:ss' naar 'YYYY-MM-DDTHH:mm:ss'
  let [datePart, timePart] = dateString.split(', ');
  let [day, month, year] = datePart.split('-'); // Gebruik '-' als scheidingsteken
  return `${year}-${month}-${day}T${timePart}`;
}



function showActivities() {
  activitiesList.innerHTML = ''; // Leeg de lijst

  // Filter credentials voor activiteiten:
  // - Share actions (isShareAction: true)
  // - Mandate activities (isActivity: true)
  // - Issuer actions (cred.issuedBy aanwezig en type niet 'mandate')
  const filteredActivities = credentials.filter(cred => {
      if (!cred.actionTimestamp) return false;

      // Share actions en Mandate activiteiten
      if (cred.isShareAction || cred.isActivity) return true;

      // Issuer acties: heeft 'issuedBy' en is geen 'mandate'
      if (cred.issuedBy && cred.type !== 'mandate') return true;

      return false;
  });

  // Sorteer de activiteiten op datum en tijd (meest recente eerst)
  filteredActivities.sort((a, b) => {
      let dateA = Date.parse(convertToStandardDate(a.actionTimestamp));
      let dateB = Date.parse(convertToStandardDate(b.actionTimestamp));
      return dateB - dateA;
  });

  // Voeg activiteiten toe aan de lijst
  filteredActivities.forEach((cred) => {
      let activityItem = document.createElement('li');

      if (cred.isShareAction) {
          // Verifier-actie
          activityItem.innerHTML = `
              <strong style="color: #152A62;">${cred.name}</strong><br>
              <span style="color: #152A62;">Gegevens gedeeld</span><br>
              <span style="color: #152A62;">${cred.actionTimestamp}</span>
          `;
      } else if (cred.isActivity) {
          // Machtiging-actie
          activityItem.innerHTML = `
              <strong style="color: #152A62;">Machtiging aan ${cred.requester}</strong><br>
              <span style="color: #152A62;">Reden: ${cred.reason}</span><br>
              <span style="color: #152A62;">${cred.actionTimestamp}</span>
          `;
      } else if (cred.issuedBy && cred.type !== 'mandate') {
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
   /*  iconClass: 'fas fa-id-card',
    iconColor: '#D6E6F2', */
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'woonadres': {
   /*  iconClass: 'fas fa-home',
    iconColor: '#DAEEDC', */
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85'
  },
  'foto': {
/*     iconClass: 'fas fa-camera', // Gebruik het gewenste FontAwesome icoon
    iconColor: '#FFD700', // Gouden kleur voor het icoon */
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#4A6C85' // Tekstkleur
  },
  'organisatiemachtiging vog': {
    iconClass: 'fas fa-file-signature',
    iconColor: '#D4A5D7',
    textColor: '#7A3E9D'
  },
  'inkomensverklaring': {
    imagePath: 'bdlogo.svg',
    iconColor: null,
    textColor: '#2681cc' // Nieuwe kleur passend bij het logo
  },
  'kredietregistratie': {
    imagePath: 'bkrlogo.svg',
    iconColor: null,
    textColor: '#FDC830' // Kleur aangepast op basis van het logo
  },
  'aow-status': {
    imagePath: 'svblogo.svg',
    iconColor: null,
    textColor: '#57C4E5' // Kleur aangepast op basis van het logo
  },
  'verzekeringsgegevens': {
    imagePath: 'uwvlogo.svg',
    iconColor: null,
    textColor: '#00588E' // Kleur aangepast op basis van het logo
  },
  'werkgever': {
    iconClass: 'fas fa-briefcase',
    iconColor: '#FBC4AB',
    textColor: '#D35400'
  },
  'verklaring omtrent gedrag (vog)': {
    imagePath: 'justislogo.svg',
    iconColor: null,
    textColor: '#00588E'
  },

  'rijbewijs': {
    iconClass: 'fas fa-car',
    iconColor: '#e4b6c3',
    textColor: '#52202e'
  },

  'diploma verpleegkunde': {
  imagePath: 'duologo.svg',  // Path naar je diploma-afbeelding
  iconColor: null,
  textColor: '#333'
  },

  // Voeg meer kaartstijlen toe indien nodig
};






function displayCredentials() {
  walletGrid.innerHTML = ''; // Maak de wallet leeg

  credentials.forEach((cred, index) => {
    // Sla share actions, activiteiten en mandates over in de wallet-weergave
    if (cred.isShareAction || cred.isActivity || cred.type === 'mandate') {
      console.log(`Credential at index ${index} has type:`, cred.type);
      return;
    }

    // Controleer of cred.name bestaat en is een string
    if (typeof cred.name !== 'string') {
    //  console.warn(`Credential at index ${index} ontbreekt 'name' property:`, cred);
      return; // Sla deze credential over
    }

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

    // Controleer of er een afbeeldingspad is opgegeven in plaats van een icoon
    let iconHtml = '';
    if (styles.imagePath) {
      iconHtml = `<img src="${styles.imagePath}" alt="${cred.name} logo" style="width: ${iconSize}; height: ${iconSize}; margin-bottom: ${iconMarginBottom};">`;
    } else {
      iconHtml = `<i class="${styles.iconClass}" style="color: ${styles.iconColor}; font-size: ${iconSize}; margin-bottom: ${iconMarginBottom};"></i>`;
    }

    // Voeg de HTML voor het kaartje toe
    card.innerHTML = `
      ${iconHtml}
      <div class="card-text" style="font-size: ${textSize};">
        <h3 style="color: ${styles.textColor}; margin: 0;">${cred.name}</h3>
        ${cred.issuedBy ? `<p style="font-size: ${issuerTextSize}; color: #555; margin: 5px 0 0 0;">${cred.issuedBy}</p>` : ''}
      </div>
    `;

    // Voeg event listener toe voor het bekijken van kaartdetails
    card.addEventListener('click', () => showDetails(cred, index));

    // Voeg de kaart toe aan het wallet-grid
    walletGrid.appendChild(card);
  });
}


// Functie om standaard kaartjes toe te voegen
function loadDefaultCredentials() {
  const defaultCards = [
    {
      name: 'Persoonlijke data',
      issuedBy: 'Nederlandse overheid',
      isShareAction: false,
      data: {
        'Voornaam': 'Willeke Liselotte',
        'Achternaam': 'De Bruijn',
        'Geboortedatum': '10 maart, 1980',
        'Geboorteplaats': 'Delft',
        'Geboorteland': 'Nederland',
        'Geslacht': 'Vrouw',
        'Burgerservicenummer (BSN)': '938391772',
        'Nationaliteit': 'Nederlands',
        'Geldigheid paspoort': '17 juli 2034',
        'Ouder dan 18': 'Ja'
      }
    },
    {
      name: 'Woonadres',
      issuedBy: 'Nederlandse overheid',
      isShareAction: false,
      data: {
        'Straat': 'Wilhelmina van Pruisenweg',
        'Huisnummer': '52',
        'Postcode': '2595 AN',
        'Plaatsnaam': 'Den Haag'
      }
    },
      // Nieuw kaartje "Foto" toevoegen
      {
        name: 'Foto',
        issuedBy: 'Nederlandse overheid',
        isShareAction: false,
        data: {
          'Foto': 'pasfoto.png', // Zorg dat deze afbeelding beschikbaar is in je projectmap
          'Lengte': '1,70 m'
        }
      }
  ];

  defaultCards.forEach(defaultCard => {
    const index = credentials.findIndex(cred => cred.name === defaultCard.name);
    if (index !== -1) {
      // Update het bestaande kaartje
      credentials[index] = defaultCard;
    } else {
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




function showDetails(credential, index) {
  // Verberg het wallet-scherm
  document.getElementById('wallet-screen').style.display = 'none';
  currentCardsSection.style.display = 'none';  
  bottomNav.style.display = 'none';

  // Toon de detailsweergave
  const detailsView = document.getElementById('details');
  detailsView.style.display = 'block';

  // Vul de titel met de naam van het kaartje
  detailsTitle.textContent = credential.name;

  // Leeg de inhoud en vul deze met de gegevens van het kaartje
  detailsContent.innerHTML = '';

   // Als het kaartje "Foto" is, toon de afbeelding
   if (credential.name === 'Foto') {
    detailsContent.innerHTML += `<img src="${credential.data['Foto']}" alt="Pasfoto" style="width: 100%; max-width: 300px; height: auto; margin-bottom: 20px;">`;
    detailsContent.innerHTML += `<div class="details-row">
                                  <div class="details-label">Lengte:</div>
                                  <div class="details-value">${credential.data['Lengte']}</div>
                                </div>`;
  } else if (credential.data) {
    // Voor elk sleutel-waarde paar maak een nieuwe rij in de details sectie
    for (const key in credential.data) {
      if (credential.data.hasOwnProperty(key)) {
        detailsContent.innerHTML += `
          <div class="details-row">
            <div class="details-label">${key}:</div>
            <div class="details-value">${credential.data[key]}</div>
          </div>`;
      }
    }
  } else {
    detailsContent.innerHTML = '<p>Geen details beschikbaar.</p>';
  }


  // Sluit details weergave (Terug-knop)
  closeDetailsBtn.onclick = () => {
    detailsView.style.display = 'none';
    currentCardsSection.style.display = 'flex';  // Toon 'Mijn digitale bewijzen' sectie
    
  };

  // Verwijderknop tonen of verbergen op basis van het type kaartje
  if (credential.name !== 'Persoonlijke data' && credential.name !== 'Woonadres'  && credential.name !== 'Foto') {
    deleteDetailsBtn.style.display = 'block';
    deleteDetailsBtn.onclick = () => {
      credentials.splice(index, 1);
      saveCredentials();
      displayCredentials();
      detailsView.style.display = 'none';
      currentCardsSection.style.display = 'flex';  // Toon 'Mijn digitale bewijzen' sectie
      
    };
  } else {
    deleteDetailsBtn.style.display = 'none';
  }
}


// Bij het laden van de pagina
loadCredentials();
loadDefaultCredentials();
saveCredentials(); // Sla de bijgewerkte credentials op
displayCredentials();
displayMachtigingen();


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
      { fps: 10, 
        qrbox: 250 },
      (decodedText) => {
          console.log("QR code scanned: ", decodedText);
          try {
              const data = JSON.parse(decodedText);
              const timestamp = new Date().toLocaleString();


            // Stap 1: Controleer het type QR-code
            if (data.type === "mandate") {
              console.log("Mandate QR-code herkend.");
              handleMandateQR(data, timestamp);
          }

              // Stap 1: Controleer of het een verifier QR-code is (csas)
             else if (data.type === "verifier" && data.csas) {
                console.log("CSAS QR-code herkend.");
            
                // Sla de CSAS data op voor later gebruik
                window.currentCsasData = data;
            
                // Vul de modal met de gegevens van het CSAS-verzoek
                populateCsasModal(data);
            
                // Toon de CSAS modal
                csasModal.style.display = 'flex';     
            
              }
                  // ** Stap 2 codeblok voor RDFCV**
                  else if (data.type === "verifier" && data.rdfcv) {
                    console.log("RDFCV QR-code herkend.");

                    // Sla de RDFCV data op voor later gebruik
                    window.currentRdfcvData = data;

                    // Vul de modal met de gegevens van het RDFCV-verzoek
                    populateRdfcvModal(data);

                    // Toon de RDFCV modal
                    rdfcvModal.style.display = 'flex';
                  }

              // Stap 3: Controleer of het een issuer QR-code is (rdfci)
               else if (data.issuedBy && data.name) {
                  console.log("Issuer QR-code herkend.");

                  if (data.rdfci) {
                      console.log("Issuer QR-code met rdfci herkend.");

                      // Vul de modal met de nieuwe functie
                      populateRdfciModal(data);

                      // Toon het extra vraagscherm
                      rdfciModal.style.display = 'flex';

                      rdfciAcceptButton.onclick = () => {
                        const timestamp = new Date().toLocaleString();
                      
                        // Maak een nieuw object voor de gemapte data
                        const mappedData = {};
                      
                        // Itereer over de keys in 'data' en map de veldnamen
                        for (let key in data) {
                          if (
                            data.hasOwnProperty(key) &&
                            key !== 'rdfci' &&
                            key !== 'a' &&
                            key !== 't' &&
                            key !== 'name' &&
                            key !== 'reason' &&
                            key !== 'verifier' &&
                            key !== 'issuer' &&
                            key !== 'type' &&
                            key !== 'requester'
                          ) {
                            const fieldName = fieldMapping[key] || key;
                            mappedData[fieldName] = data[key];
                          }
                        }
                      
                        // Sla het kaartje op met de gemapte data
                        credentials.push({
                          name: data.name || 'Onbekend kaartje',
                          issuedBy: data.issuedBy || 'Onbekende uitgever',
                          actionTimestamp: timestamp,
                          isShareAction: false,
                          data: mappedData // Gebruik de gemapte data
                        });
                      
                        saveCredentials();
                      
                          // Toon het issuer success-scherm
                          goToIssuerSuccessScreen(data.name, data.issuedBy);

                          // Sluit het extra vraagscherm
                          rdfciModal.style.display = 'none';
                      };

                      rdfciStopButton.onclick = () => {
                          rdfciModal.style.display = 'none';
                          addCardScreen.style.display = 'none';
                          walletScreen.style.display = 'block';
                          bottomNav.style.display = 'flex';
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



/* // Sluit de scanner handmatig wanneer op "Scannen afsluiten" wordt geklikt
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
}); */

// Event listener voor de bestaande scan-knop, vervangt deze door de nieuwe functie
scanButton.addEventListener('click', () => {
  startQrScan();
});




// Voeg pincode-invoerfunctionaliteit toe
const pinInputs = document.querySelectorAll('.pin-box');
pinInputs.forEach((box, index) => {
    box.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < pinInputs.length - 1) {
            pinInputs[index + 1].focus();
        }
    });
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
  issuerSuccessScreen.style.display = 'flex';

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


function populateRdfciModal(data) {
  // Vul de vaste delen in
  document.getElementById('rdfci-issuedBy').innerText = data.issuedBy || 'Onbekende uitgever';

  // "Wilt u de volgende gegevens delen met" moet dikgedrukt zijn en de naam van de uitgever bevatten
 /*  document.getElementById('rdfci-share-with').innerHTML = `<strong>Wilt u de volgende gegevens delen met ${data.issuedBy}:</strong>`; */

  // Verwijder de oude inhoud van 'rdfci-name' en voeg de nieuw uit te geven kaart toe
  const rdfciNameElement = document.getElementById('rdfci-name');
  rdfciNameElement.innerHTML = ''; // Leeg de inhoud

  // **Nieuw uit te geven kaart tonen op de plaats van 'rdfci-name'**
  // Maak kaart container aan voor de nieuw uit te geven kaart
  const newCardContainer = document.createElement('div');
  newCardContainer.className = 'card-container';

  // Maak kaart header aan
  const newCardHeader = document.createElement('div');
  newCardHeader.className = 'card-header';
  newCardHeader.style.backgroundColor = '#0061A6'; // Stel een kleur in voor de nieuwe kaart

  // Voeg de header toe aan de kaartcontainer
  newCardContainer.appendChild(newCardHeader);

  // Maak kaart content aan
  const newCardContent = document.createElement('div');
  newCardContent.className = 'card-content';

  // Voeg kaart titel toe
  const newCardTitleElement = document.createElement('div');
  newCardTitleElement.className = 'card-title';
  newCardTitleElement.textContent = data.name || 'Onbekend kaartje';
  newCardContent.appendChild(newCardTitleElement);

  // Voeg de details van de uit te geven kaart toe
  const newCardDetails = document.createElement('div');
  newCardDetails.className = 'card-details';

  for (let key in data) {
    if (
      data.hasOwnProperty(key) &&
      key !== 'rdfci' &&
      key !== 'a' &&
      key !== 't' &&
      key !== 'issuedBy' &&
      key !== 'name' &&
      key !== 'reason' &&
      key !== 'verifier' &&
      key !== 'issuer' &&
      key !== 'type' &&
      key !== 'requester'
    ) {
      const fieldName = fieldMapping[key] || key;
      const value = data[key];

      const detailRow = document.createElement('div');
      detailRow.className = 'detail-row';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'label';
      labelDiv.textContent = `${fieldName}:`;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'value';
      if (fieldName === 'Foto') {
        // Als het veld 'Foto' is, voeg dan de afbeelding toe
        const img = document.createElement('img');
        img.src = value;
        img.alt = 'Foto';
        img.style.width = '100%'; // Pas de grootte naar wens aan
        valueDiv.appendChild(img);
      } else {
        // Voor andere velden, toon de tekstwaarde
        valueDiv.textContent = value || 'Niet beschikbaar';
      }

      detailRow.appendChild(labelDiv);
      detailRow.appendChild(valueDiv);

      newCardDetails.appendChild(detailRow);
    }
  }

  newCardContent.appendChild(newCardDetails);
  newCardContainer.appendChild(newCardContent);

  // Voeg de nieuw uit te geven kaart toe aan 'rdfci-name' element
  rdfciNameElement.appendChild(newCardContainer);

  // Verwerk de gevraagde rdfci data (gegevens om te delen)
  const detailsContainer = document.getElementById('rdfci-details-container');
  detailsContainer.innerHTML = ''; // Leeg de container

  // Groepeer velden per kaart
  let fieldsByCard = {};

  data.rdfci.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Map naar leesbare naam

    // Zoek het bijbehorende kaartje in 'credentials'
    const matchingCard = credentials.find(cred => {
      return cred.data && cred.data.hasOwnProperty(fieldName);
    });

    if (matchingCard) {
      if (!fieldsByCard[matchingCard.name]) {
        fieldsByCard[matchingCard.name] = { data: matchingCard.data, fields: [] };
      }
      fieldsByCard[matchingCard.name].fields.push(fieldName);
    } else {
      console.warn(`Veld '${fieldName}' niet gevonden in de credentials.`);
    }
  });

  // Itereer over elk kaartje en maak de kaart elementen aan
  Object.keys(fieldsByCard).forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Maak kaart container aan
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Maak kaart header aan
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Stel de achtergrondkleur in op basis van de kaartnaam indien gewenst
    switch (cardName) {
      case 'Persoonlijke data':
        cardHeader.style.backgroundColor = '#B5DEF4';   
        break;
      case 'Woonadres':
        cardHeader.style.backgroundColor = '#445580'; 
        break;
      default:
        cardHeader.style.backgroundColor = '#0072C6'; // Default kleur
    }

    // Voeg de header toe aan de kaartcontainer
    cardContainer.appendChild(cardHeader);

    // Maak kaart content aan
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Voeg kaart titel toe
    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardName;
    cardContent.appendChild(cardTitleElement);

    // Voeg de gevraagde velden toe
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    cardInfo.fields.forEach(fieldName => {
      const value = cardInfo.data[fieldName];

      const detailRow = document.createElement('div');
      detailRow.className = 'detail-row';

      const labelDiv = document.createElement('div');
      labelDiv.className = 'label';
      labelDiv.textContent = `${fieldName}:`;

      const valueDiv = document.createElement('div');
      valueDiv.className = 'value';
      if (fieldName === 'Foto') {
        // Als het veld 'Foto' is, voeg dan de afbeelding toe
        const img = document.createElement('img');
        img.src = value;
        img.alt = 'Foto';
        img.style.width = '100%'; // Pas de grootte naar wens aan
        valueDiv.appendChild(img);
      } else {
        // Voor andere velden, toon de tekstwaarde
        valueDiv.textContent = value || 'Niet beschikbaar';
      }

      detailRow.appendChild(labelDiv);
      detailRow.appendChild(valueDiv);

      cardDetails.appendChild(detailRow);
    });

    cardContent.appendChild(cardDetails);
    cardContainer.appendChild(cardContent);

    // Voeg de kaart toe aan de detailsContainer
    detailsContainer.appendChild(cardContainer);
  });

  // Verwerk de overeenkomst informatie
  if (data.a) {
    const agreementFields = fieldMapping.a[data.a] || data.a;
    document.getElementById('rdfci-agreement').innerText = agreementFields;
  } else {
    document.getElementById('rdfci-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
}

// rdfci pinconfirmation
confirmPinIssuerBtn.onclick = () => {
  const data = window.currentRdfciData;
  const timestamp = new Date().toLocaleString();

  // Maak een nieuw object voor de gemapte data
  const mappedData = {};

  // Itereer over de keys in 'data' en map de veldnamen
  for (let key in data) {
    if (
      data.hasOwnProperty(key) &&
      key !== 'rdfci' &&
      key !== 'a' &&
      key !== 't' &&
      key !== 'name' &&
    
      key !== 'reason' &&
      key !== 'verifier' &&
      key !== 'issuer' &&
      key !== 'type' &&
      key !== 'requester'
    ) {
      const fieldName = fieldMapping[key] || key;
      mappedData[fieldName] = data[key];
    }
  }

  // Sla het kaartje op met de gemapte data
  credentials.push({
    name: data.name || 'Onbekend kaartje',
    issuedBy: data.issuedBy || 'Onbekende uitgever',
    actionTimestamp: timestamp,
    isShareAction: false,
    data: mappedData // Gebruik de gemapte data
  });

  saveCredentials();

  // Toon het issuer success-scherm
  goToIssuerSuccessScreen(data.name, data.issuedBy);

  // Sluit het pincode bevestigingsscherm
  pinConfirmationScreenIssuer.style.display = 'none';

  // Reset de QR scanner als deze actief is
  resetQrScanner();
};



// RDFCV vraagscherm vullen
function populateRdfcvModal(data) {
  // Vul de reden
  document.getElementById('rdfcv-reason').innerText = data.reason || 'Geen reden opgegeven.';

  // Voeg de naam van de verifier toe aan de vraag
  document.getElementById('rdfcv-question-text').innerText = `Wilt u onderstaande gegevens delen met ${data.requester}?`;

  // Verwerk de gevraagde gegevens
  const detailsContainer = document.getElementById('rdfcv-details-container');
  detailsContainer.innerHTML = ''; // Leeg de container

  // Groepeer de velden en toon ze in kaartjes
  let fieldsByCard = {};

  data.rdfcv.forEach((field) => {
    const fieldName = fieldMapping[field] || field; // Gebruik field mapping

    // Zoek of het veld hoort bij een kaartje in credentials
    let matchingCard = credentials.find(cred => {
      // Zoek in cred.data of het veld bestaat
      return cred.data && cred.data.hasOwnProperty(fieldName);
    });

    if (!matchingCard) {
      // Als niet gevonden, controleer of er een kaartje is waarvan de naam overeenkomt met fieldName
      matchingCard = credentials.find(cred => cred.name === fieldName);
    }

    if (matchingCard) {
      const cardName = matchingCard.name;

      if (!fieldsByCard[cardName]) {
        fieldsByCard[cardName] = { data: matchingCard.data, fields: [], showAllFields: false };
      }

      if (matchingCard.name === fieldName) {
        // Als het veld overeenkomt met de kaartnaam, tonen we alle details
        fieldsByCard[cardName].showAllFields = true;
      } else {
        // Voeg het specifieke veld toe
        fieldsByCard[cardName].fields.push(fieldName);
      }
    } else {
      console.warn(`Veld of kaartje '${fieldName}' niet gevonden in de credentials.`);
    }
  });

  // Itereer over elk kaartje en maak de kaart elementen aan
  Object.keys(fieldsByCard).forEach((cardName) => {
    const cardInfo = fieldsByCard[cardName];

    // Maak kaart container aan
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Maak kaart header aan
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Stel de achtergrondkleur in op basis van de kaartnaam
    switch (cardName) {
      case 'Persoonlijke data':
        cardHeader.style.backgroundColor = '#B9E4E2';
        break;
      case 'Woonadres':
        cardHeader.style.backgroundColor = '#445580';
        break;
      case 'Verklaring Omtrent Gedrag (VOG)':
        cardHeader.style.backgroundColor = '#0061A6';
        break;
      default:
        cardHeader.style.backgroundColor = '#0072C6'; // Default kleur
    }

    // Maak kaart content container aan
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Voeg de header en content toe aan de kaartcontainer
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);

    // Maak kaart titel aan
    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardName;
    cardContent.appendChild(cardTitleElement);

    // Maak kaart details aan
    const cardDetails = document.createElement('div');
    cardDetails.className = 'card-details';

    if (cardInfo.showAllFields) {
      // Voeg alle details van het kaartje toe uit cred.data
      for (let key in cardInfo.data) {
        if (cardInfo.data.hasOwnProperty(key)) {
          const detailRow = document.createElement('div');
          detailRow.className = 'detail-row'; // Class for styling

          const labelDiv = document.createElement('div');
          labelDiv.className = 'label';
          labelDiv.textContent = `${key}:`;

          const valueDiv = document.createElement('div');
          valueDiv.className = 'value';

          const value = cardInfo.data[key]; // Definieer 'value' hier

          if (key === 'Foto') {
            // Als het veld 'Foto' is, voeg dan de afbeelding toe
            const img = document.createElement('img');
            img.src = value;
            img.alt = 'Foto';
            img.style.width = '100%'; // Pas de grootte naar wens aan
            valueDiv.appendChild(img);
          } else {
            // Voor andere velden, toon de tekstwaarde
            valueDiv.textContent = value || 'Niet beschikbaar';
          }

          // Voeg label en waarde toe aan de rij
          detailRow.appendChild(labelDiv);
          detailRow.appendChild(valueDiv);

          // Voeg de rij toe aan de kaartdetails
          cardDetails.appendChild(detailRow);
        }
      }
    } else {
      // Voeg alleen de specifieke gevraagde velden toe
      cardInfo.fields.forEach(fieldName => {
        const value = cardInfo.data[fieldName];

        const detailRow = document.createElement('div');
        detailRow.className = 'detail-row';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label';
        labelDiv.textContent = `${fieldName}:`;

        const valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        if (fieldName === 'Foto') {
          // Als het veld 'Foto' is, voeg dan de afbeelding toe
          const img = document.createElement('img');
          img.src = value;
          img.alt = 'Foto';
          img.style.width = '100%'; // Pas de grootte naar wens aan
          valueDiv.appendChild(img);
        } else {
          // Voor andere velden, toon de tekstwaarde
          valueDiv.textContent = value || 'Niet beschikbaar';
        }

        // Voeg label en waarde toe aan de rij
        detailRow.appendChild(labelDiv);
        detailRow.appendChild(valueDiv);

        // Voeg de rij toe aan de kaartdetails
        cardDetails.appendChild(detailRow);
      });
    }

    // Voeg de kaart details toe aan de kaart content
    cardContent.appendChild(cardDetails);

    // Voeg de kaart toe aan de container
    detailsContainer.appendChild(cardContainer);
  });

  // Agreement verwerken
  if (data.a) {
    console.log('Data.a:', data.a);  // Controleer de waarde van data.a
    console.log('Mapped value:', fieldMapping.a[data.a]);  // Controleer de gemapte waarde
    const agreementText = fieldMapping.a[data.a] || data.a;
    document.getElementById('rdfcv-agreement').innerText = agreementText;
  } else {
    document.getElementById('rdfcv-agreement').innerText = 'Geen overeenkomst gevonden.';
  }
}


rdfcvAcceptButton.onclick = () => {
  const timestamp = new Date().toLocaleString();

  // Verwijder eerdere event handler om duplicatie te voorkomen
  confirmPinBtnVerifier.onclick = null;

  // Toon eerst het pincode-bevestigingsscherm
  goToPinConfirmationVerifier();

  confirmPinBtnVerifier.onclick = () => {
    if (window.currentRdfcvData) {
      saveSharedData(window.currentRdfcvData, timestamp);
      goToVerifierSuccessScreen(window.currentRdfcvData);
    } else {
      console.error("Geen RDFCV data beschikbaar om op te slaan.");
    }
    pinConfirmationScreenVerifier.style.display = 'none';
    resetPinInputs();
  };

  rdfcvModal.style.display = 'none';
};

rdfcvStopButton.onclick = () => {
  rdfcvModal.style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';
  resetQrScanner();
};




// Functie om het pincode bevestigingsscherm verifier te tonen
function goToPinConfirmationVerifier() {
  console.log("Navigating to pin confirmation screen...");
  rdfcvModal.style.display = 'none'; // Verberg de vraagmodal
  pinConfirmationScreenVerifier.style.display = 'flex'; // Toon verifier pin bevestigingsscherm
  resetPinInputs(); // Reset pincode-invoervelden
}

// Functie voor het succes-scherm na delen met verifier
function goToVerifierSuccessScreen(data) {
  successScreen.style.display = 'flex';
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
      name: data.requester || 'Onbekende partij',
      reason: data.reason || 'Geen reden opgegeven',
      sharedData: data.rdfcv.map(field => fieldMapping[field] || field),
      agreement: data.a ? data.a.split(', ').map(agreement => fieldMapping.a[agreement] || agreement) : [],
      actionTimestamp: timestamp,
      isShareAction: true // Markeer als deelactie
  });
  saveCredentials();
}

floatingQrButton.addEventListener('click', () => {
  // Verberg de wallet-screen en de navbar
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';

  // Toon het add-card scherm
  addCardScreen.style.display = 'flex';

  // Start direct de QR-scanner
  startQrScan();
});

// Logica voor het sluiten van het add-card scherm


if (closeScanButton) {
  closeScanButton.onclick = () => {
    // Controleer of de QR-scanner actief is
    if (html5QrCode) {
      console.log("Stopping QR scanner...");
      html5QrCode.stop().then(() => {
        console.log("QR scanner stopped.");
        readerDiv.style.display = 'none';
        closeScanButton.style.display = 'none';
        document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
        html5QrCode = null; // Reset de scanner
      }).catch(err => {
        console.error("Failed to stop scanning: ", err);
      });
    }

    // Verberg het add-card scherm
    addCardScreen.style.display = 'none';

    // Toon het wallet-screen opnieuw
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex'; // Toon de navbar onderaan opnieuw
  };
}


document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-view-button');
  const buttonList = document.querySelector('.button-list');
  const sectionHeaders = document.getElementById('section-organisation-headers');

  // Start logica: button-list zichtbaar, section-organisation-headers verborgen
  toggleButton.addEventListener('click', function () {
      const icon = toggleButton.querySelector('i');

      if (buttonList.style.display === 'none') {
          // Toon button-list, verberg de headers
          buttonList.style.display = 'flex';
          sectionHeaders.style.display = 'none';
          icon.className = 'fas fa-building';
          toggleButton.innerHTML = '<i class="fas fa-building"></i> Weergave per organisatie';
      } else {
          // Verberg button-list, toon de headers
          buttonList.style.display = 'none';
          sectionHeaders.style.display = 'block';
          icon.className = 'fas fa-list';
          toggleButton.innerHTML = '<i class="fas fa-list"></i> Weergave per attribuut';
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.header-bar');

  headers.forEach(header => {
    header.addEventListener('click', function () {
      const formButtons = header.nextElementSibling;

      // Wissel de zichtbaarheid van de form-buttons
      if (formButtons.style.display === 'none' || formButtons.style.display === '') {
        formButtons.style.display = 'block';
        header.querySelector('.fa-chevron-down').classList.remove('fa-chevron-down');
        header.querySelector('.header-right i').classList.add('fa-chevron-up');
      } else {
        formButtons.style.display = 'none';
        header.querySelector('.header-right i').classList.remove('fa-chevron-up');
        header.querySelector('.header-right i').classList.add('fa-chevron-down');
      }
    });
  });
});

// Functie om de CSAS Modal te vullen met de juiste gegevens uit de QR-code
function populateCsasModal(data) {
  // Sla de CSAS data op voor later gebruik
  window.currentCsasData = data;

  // Toon de naam van de verifier
  csasRequester.textContent = data.requester;

  // Leeg de details-container zodat oude gegevens worden verwijderd
  csasDetailsContainer.innerHTML = '';

  // Toon de reden waarom de gegevens worden opgevraagd, indien aanwezig
  const reasonElement = document.getElementById('csas-reason');
  if (data.reason) {
    reasonElement.textContent = ` ${data.reason}`;
  } else {
    reasonElement.textContent = '';
  }

  // Vul de details-container met de gegevens die opgevraagd worden
  data.csas.forEach(item => {
    // Controleer of zowel `issuedBy` als `name` aanwezig zijn
    if (item.issuedBy && item.name) {
      const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;  // Gebruik fieldmapping voor leesbare namen van de uitgever
      const cardName = fieldMapping[item.name] || item.name;  // Gebruik fieldmapping voor de kaartnaam

      // Maak een element aan om de informatie weer te geven
      const detail = document.createElement('div');
      detail.className = 'csas-detail';

      // Voeg een gestructureerde weergave toe van de uitgever en het kaartje
      detail.innerHTML = `
        <p>Uitgegeven door:</p>
        <p><strong>${issuerName}</strong></p>
        <p>Gegevens:</p>
        <p><strong>${cardName}</strong></p>
      `;

      // Voeg een divider toe voor nette scheiding
      const divider = document.createElement('div');
      divider.className = 'divider';
      divider.style.borderTop = '1px solid #ccc';
      divider.style.margin = '10px 0';

      // Voeg het detail en de divider toe aan de details-container
      csasDetailsContainer.appendChild(detail);
      csasDetailsContainer.appendChild(divider);
    } else {
      console.error('CSAS item ontbreekt belangrijke gegevens: ', item);
    }
  });

  // Vul de overeenkomst informatie (bijv. opslagduur)
  if (data.a && fieldMapping.a[data.a]) {
    csasAgreement.textContent = fieldMapping.a[data.a];
  } else {
    csasAgreement.textContent = 'Geen overeenkomst gevonden.';
  }
}

function saveCsasCredentials(data) {
  console.log("Start met opslaan van CSAS credentials...");
  data.csas.forEach(item => {
    // Gebruik fieldMapping om leesbare namen te verkrijgen
    const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;
    const cardName = fieldMapping[item.name.toLowerCase()] || item.name;

    console.log(`Opslaan van credential: Issuer: ${issuerName}, Card: ${cardName}`);

    // Controleer of het om de VOG gaat
    if (issuerName === 'Justis' && cardName === 'Verklaring Omtrent Gedrag (VOG)') {
      // Voeg de gedetailleerde VOG-gegevens toe
      const newCredential = {
        name: 'Verklaring Omtrent Gedrag (VOG)',
        issuedBy: 'Justis',
        actionTimestamp: new Date().toLocaleString(),
        isShareAction: false,
        data: {
          "Issuer": true,
          "name": "Verklaring Omtrent Gedrag (VOG)",
          "issuedBy": "Justis",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-09-17",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Algemeen_profiel": "4,5,6,7",
          "Specifiek_profiel": "55",
          "Attestation_Trust_Type": "PuB-EAA",
          "rdfci": ["gn", "sn", "bd", "bsn"],
          "a": "12t",
          "t": "w"
        }
      };
      credentials.push(newCredential);
    } else {
      // Bestaande code voor andere credentials
      const newCredential = {
        name: cardName,
        issuedBy: issuerName,
        actionTimestamp: new Date().toLocaleString(),
        isShareAction: false,
        data: {
          issuedBy: issuerName,
          cardName: cardName
        }
      };
      credentials.push(newCredential);

      console.log("Nieuw credential toegevoegd aan lijst:", newCredential);
    }
  });

  // Sla de credentials op in de local storage
  saveCredentials();
  console.log("Credentials opgeslagen in local storage.");


  // Werk de weergave van de wallet bij
  displayCredentials();
  console.log("Weergave van wallet bijgewerkt met nieuwe credentials.");

    // Optioneel: Log de credentials voor debugging
    console.log("Credentials na opslaan:", credentials);
}

// Aangepaste pincode bevestigingslogica voor CSAS
document.addEventListener('DOMContentLoaded', function() {
  const confirmPinCsas = document.getElementById('confirm-pin-csas');
  
  if (confirmPinCsas) {
    confirmPinCsas.onclick = () => {
      // Bevestig de pincode en sla gegevens op
      if (window.currentCsasData) {
        saveCsasCredentials(window.currentCsasData); // Sla de nieuwe kaartjes op
        saveCsasShareAction(window.currentCsasData); // Sla de deelactie op
        console.log("Credentials en deelactie opgeslagen:", credentials);
      } else {
        console.error("Er is geen CSAS data beschikbaar om op te slaan.");
        return;
      }
 
      goToCsasSuccessScreen();
 
      // Sluit het pincode bevestigingsscherm
      csasPinConfirmationScreen.style.display = 'none';
 
      // Stop de QR-code scanner
      if (html5QrCode) {
        console.log("Stopping QR scanner after CSAS confirmation...");
        html5QrCode.stop().then(() => {
          console.log("QR scanner stopped after CSAS confirmation.");
          readerDiv.style.display = 'none';
          closeScanButton.style.display = 'none';
          document.querySelector('.scan-container').style.display = 'flex';
        }).catch(err => {
          console.error("Failed to stop QR scanner: ", err);
        });
      }
    };
  } else {
    console.error("Element 'confirm-pin-csas' niet gevonden.");
  }
});


// Functie om het CSAS successcherm te tonen
function goToCsasSuccessScreen() {
  // Toon de naam van de verifier in het successcherm
  csasSuccessRequester.textContent = csasRequester.textContent;

  // Leeg de container voor de kaartjes zodat oude gegevens worden verwijderd
  csasSuccessCardContainer.innerHTML = '';

  // Voeg de nieuwe kaartjes toe aan het successcherm
  currentCsasData.csas.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    // Haal stijlen op basis van kaartnaam
    const nameLower = item.name.toLowerCase();
    const styles = cardStyles[nameLower] || {
      imagePath: null,
      iconColor: '#333',
      textColor: '#333'
    };

    // Gebruik fieldMapping voor de leesbare issuer en kaartnaam
    const issuerName = fieldMapping[item.issuedBy] || item.issuedBy;
    const cardName = fieldMapping[item.name.toLowerCase()] || item.name;

    // Creëer een logo element als er een logo beschikbaar is
    let logoElement = '';
    if (styles.imagePath) {
      logoElement = `<img src="${styles.imagePath}" alt="${cardName}" class="card-logo" style="width: 30px; height: 30px; margin-bottom: 10px;">`;
    }

    // Voeg de HTML voor de kaart toe, inclusief logo indien beschikbaar
    card.innerHTML = `
      ${logoElement}
      <div class="card-text" style="color: ${styles.textColor};">
        <h3>${cardName}</h3>
        <p style="font-size: 14px; color: #555; margin: 5px 0 0 0;">${issuerName}</p>
      </div>
    `;

    // Voeg de kaart toe aan de success card container
    csasSuccessCardContainer.appendChild(card);
  });

  // Toon het CSAS successcherm
  csasSuccessScreen.style.display = 'flex';

  // Verberg het add-card scherm
  addCardScreen.style.display = 'none';

  // Close knop logica voor het sluiten van het successcherm
closeCsasSuccessBtn.onclick = () => {
  csasSuccessScreen.style.display = 'none'; // Verberg het successcherm
  addCardScreen.style.display = 'none'; // Verberg het add-card scherm
  walletScreen.style.display = 'block'; // Toon het wallet-scherm
  bottomNav.style.display = 'flex'; // Toon de navigatiebalk onderaan opnieuw

  // **Laad de credentials opnieuw en werk de weergave bij**
  loadCredentials(); // Laad credentials uit de local storage
  displayCredentials(); // Werk de wallet-weergave bij
};
}





// Event listener voor de "Doorgaan"-knop in de CSAS-modal
csasAcceptButton.onclick = () => {
  console.log("CSAS Accept Button clicked.");
  csasPinConfirmationScreen.style.display = 'flex'; // Ga naar pincode bevestigingsscherm
  csasModal.style.display = 'none'; // Verberg de CSAS-modal
};

// Event listener voor de "Stoppen"-knop in de CSAS-modal
csasStopButton.onclick = () => {
  console.log("CSAS Stop Button clicked.");
  // Verberg de CSAS-modal
  csasModal.style.display = 'none';
  addCardScreen.style.display = 'none';
 
  
  // Toon het wallet-scherm
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex'; // Toon de navigatiebalk onderaan opnieuw
  
  // Stop de QR-code scanner
  if (html5QrCode) {
    console.log("Stopping QR scanner after stopping CSAS...");
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped after CSAS cancellation.");
      readerDiv.style.display = 'none';
      closeScanButton.style.display = 'none';
      document.querySelector('.scan-container').style.display = 'flex';
    }).catch(err => {
      console.error("Failed to stop QR scanner: ", err);
    });
  }
};

function saveCsasShareAction(data) {
  const timestamp = new Date().toLocaleString();
  credentials.push({
    name: data.requester || 'Onbekende partij',
    reason: data.reason || 'Geen reden opgegeven',
    sharedData: data.csas.map(item => {
      return {
        issuedBy: fieldMapping[item.issuedBy] || item.issuedBy,
        name: fieldMapping[item.name] || item.name
      };
    }),
    agreement: data.a ? (fieldMapping.a[data.a] || data.a) : 'Geen overeenkomst',
    actionTimestamp: timestamp,
    isShareAction: true // Markeer als deelactie
  });
  saveCredentials();
}

// In de add card catalogus een vog ophalen
document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("VOG")) {
      button.addEventListener('click', function () {
        // VOG gegevens ophalen alsof deze via QR-code zijn gescand
        const vogData = {
          "Issuer": true,
          "name": "Verklaring Omtrent Gedrag (VOG)",
          "issuedBy": "Justis",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-09-17",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Algemeen_profiel": "4,5,6,7",
          "Specifiek_profiel": "55",
          "Attestation_Trust_Type": "PUB-EAA",
          "rdfci": [/* "gn", "sn", "bd", "bsn" */],
          "a": "12t",
          "t": "w"
        };

        // Sla de data op voor later gebruik
        window.currentRdfciData = vogData;

        // Vul het RDFCI modal met de gegevens
        populateRdfciModal(vogData);

        // Toon het RDFCI modal
        rdfciModal.style.display = 'flex';

        // Pas rdfciAcceptButton.onclick aan
        rdfciAcceptButton.onclick = () => {
          // Toon het pincode bevestigingsscherm
          pinConfirmationScreenIssuer.style.display = 'flex';
          // Verberg de RDFCI-modal
          rdfciModal.style.display = 'none';
          // Reset de pincode-invoer
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          // Sluit het RDFCI modal
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});


// In de add card catalogus een diploma ophalen
document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("Diploma")) {
      button.addEventListener('click', function () {
        // Diploma gegevens ophalen alsof deze via QR-code zijn gescand
        const diplomaData = {
          "Issuer": true,
          "name": "Diploma Verpleegkunde",
          "issuedBy": "DUO",
          "LEID": "NL_KVK_27378698",
          "Issued_Date": "2023-06-15",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Diploma_Type": "Bachelor",
          "Institution": "Hogeschool Rotterdam",
          "rdfci": [/* "gn", "sn", "bd", "bsn" */],
          "a": "12t",
          "t": "w"
        };

        // Sla de data op voor later gebruik
        window.currentRdfciData = diplomaData;

        // Vul het RDFCI modal met de gegevens
        populateRdfciModal(diplomaData);

        // Toon het RDFCI modal
        rdfciModal.style.display = 'flex';

        // Pas rdfciAcceptButton.onclick aan
        rdfciAcceptButton.onclick = () => {
          // Toon het pincode bevestigingsscherm
          pinConfirmationScreenIssuer.style.display = 'flex';
          // Verberg de RDFCI-modal
          rdfciModal.style.display = 'none';
          // Reset de pincode-invoer
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          // Sluit het RDFCI modal
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});

// In de add card catalogus een diploma ophalen
document.addEventListener('DOMContentLoaded', function () {
  const cardButtons = document.querySelectorAll('.card-button');

  cardButtons.forEach(button => {
    const buttonTextElement = button.querySelector('.button-text');
    if (buttonTextElement && buttonTextElement.textContent.includes("Rijbewijs")) {
      button.addEventListener('click', function () {
        // Diploma gegevens ophalen alsof deze via QR-code zijn gescand
        const diplomaData = {
          "Issuer": true,
          "name": "Rijbewijs",
          "issuedBy": "RDW",
          "LEID": "NL_KVK_000000",
          "Issued_Date": "2023-06-15",
          "Issued_to_subject": "Willeke Liselotte de Bruijn",
          "Type": "A, B, D1, T",
          "rdfci": [/* "gn", "sn", "bd", "bsn" */],
          "a": "12t",
          "t": "w"
        };

        // Sla de data op voor later gebruik
        window.currentRdfciData = diplomaData;

        // Vul het RDFCI modal met de gegevens
        populateRdfciModal(diplomaData);

        // Toon het RDFCI modal
        rdfciModal.style.display = 'flex';

        // Pas rdfciAcceptButton.onclick aan
        rdfciAcceptButton.onclick = () => {
          // Toon het pincode bevestigingsscherm
          pinConfirmationScreenIssuer.style.display = 'flex';
          // Verberg de RDFCI-modal
          rdfciModal.style.display = 'none';
          // Reset de pincode-invoer
          resetPinInputs();
        };

        rdfciStopButton.onclick = () => {
          // Sluit het RDFCI modal
          rdfciModal.style.display = 'none';
          addCardScreen.style.display = 'none';
          walletScreen.style.display = 'block';
          bottomNav.style.display = 'flex';
        };
      });
    }
  });
});







// Functie om "mandate" QR-code te verwerken
function handleMandateQR(data, timestamp) {
  // Controleer of de benodigde velden aanwezig zijn
  if (!data.requester || !data.reason || !Array.isArray(data.mandate)) {
      console.error("Mandate QR-code mist noodzakelijke velden:", data);
      return;
  }

  // Vul de mandate-modal met gegevens uit de QR-code
  populateMandateModal(data);
}

function populateMandateModal(data) {
  console.log('populateMandateModal aangeroepen met data:', data); // Debugging log

  // Sla de Mandate data op voor later gebruik
  window.currentMandateData = data;

  // Toon de naam van de requester
  const requesterElement = document.getElementById('mandate-requester');
  console.log('Updating mandate-requester:', data.requester || 'Onbekende requester');
  requesterElement.textContent = data.requester || 'Onbekende requester';

  // Toon de reden van het verzoek
  const reasonElement = document.getElementById('mandate-reason');
  if (data.reason) {
    reasonElement.textContent = data.reason;
    console.log('Updating mandate-reason:', data.reason);
  } else {
    reasonElement.textContent = 'Geen reden opgegeven.';
    console.log('Updating mandate-reason: Geen reden opgegeven.');
  }

  // Vul de gegevens-container met de opgehaalde gegevens
  const mandateDataContainer = document.getElementById('mandate-data-container');
  mandateDataContainer.innerHTML = ''; // Maak de container leeg

  data.mandate.forEach((item, idx) => {
    // Gebruik fieldMapping om leesbare namen te verkrijgen
    const mappedIssuedBy = fieldMapping[item.issuedBy] || item.issuedBy;
    const mappedName = fieldMapping[item.name.toLowerCase()] || item.name;

    console.log(`Adding mandate detail for item ${idx}: IssuedBy=${mappedIssuedBy}, Name=${mappedName}`);

    // Maak een element aan om de informatie weer te geven
    const detail = document.createElement('div');
    detail.className = 'mandate-detail';

    // Voeg een gestructureerde weergave toe van de uitgever en het kaartje
    detail.innerHTML = `
      <p>Naam uitgever: ${mappedIssuedBy} </p>
      <p>Gegevens: ${mappedName}</p>
    `;

    // Voeg een divider toe voor nette scheiding, behalve na de laatste item
    if (idx < data.mandate.length - 1) {
      const hr = document.createElement('hr');
      detail.appendChild(hr);
    }

    // Voeg het detail toe aan de container
    mandateDataContainer.appendChild(detail);
  });

  // Vul de overeenkomst informatie (bijv. opslagduur) met fieldMapping
  const agreementElement = document.getElementById('mandate-agreement');
  if (data.a && fieldMapping.a && fieldMapping.a[data.a]) {
    agreementElement.textContent = fieldMapping.a[data.a];
    console.log('Updating mandate-agreement:', fieldMapping.a[data.a]);
  } else {
    agreementElement.textContent = fieldMapping.a ? 'Geen overeenkomst gevonden.' : data.a || 'Geen overeenkomst opgegeven.';
    console.log('Updating mandate-agreement:', fieldMapping.a ? 'Geen overeenkomst gevonden.' : data.a || 'Geen overeenkomst opgegeven.');
  }


  //vul requester in
  const mandateRequesterAgreement = document.getElementById('mandate-requester-agreement');
  mandateRequesterAgreement.textContent = data.requester


  // Toon de Mandate Modal
  document.getElementById('mandate-modal').style.display = 'flex';
}

// Event listener voor de "Stoppen" knop in de mandate-modal
document.getElementById('mandate-stop-button').addEventListener('click', () => {
  console.log("Mandate Stop Button clicked.");

  // Verberg de mandate-modal
  document.getElementById('mandate-modal').style.display = 'none';
  addCardScreen.style.display = 'none';
  walletScreen.style.display = 'block';
  bottomNav.style.display = 'flex';

  // Controleer of de QR-code scanner actief is en stop deze indien nodig
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped.");
    }).catch(err => {
      console.error("Failed to stop scanner: ", err);
    });
  }

  // Herstel de scanner en interface
  resetQrScanner();

  // Toon het wallet-screen, verberg add-card screen, toon bottom-nav
  walletScreen.style.display = 'block';
  addCardScreen.style.display = 'none';
  bottomNav.style.display = 'flex';
});

function resetQrScanner() {
  console.log("Resetting QR scanner...");

  // Verberg de camera- en sluitknoppen
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("QR scanner stopped.");
    }).catch(err => {
      console.error("Failed to stop scanning: ", err);
    });
  }
  
  // Verberg de camera en toon de scan-knop weer
  readerDiv.style.display = 'none';
  closeScanButton.style.display = 'none';
  document.querySelector('.scan-container').style.display = 'flex'; // Toon scan-knop en tekst
}

// Event listener voor de "Akkoord" knop in de mandate-modal
document.getElementById('mandate-accept-button').addEventListener('click', () => {
  console.log("Mandate Accept Button clicked.");

  // Verberg de mandate-modal
  document.getElementById('mandate-modal').style.display = 'none';

  // Toon het pincode bevestigingsscherm
  document.getElementById('mandate-pin-confirmation-screen').style.display = 'flex';
});


// Event listener voor de "Bevestigen" knop in het mandate-pin-confirmation-screen
document.getElementById('confirm-pin-mandate').addEventListener('click', () => {
  console.log("Mandate Confirm Pin Button clicked.");


  // Haal de gegevens uit de currentMandateData
  const currentData = window.currentMandateData;
  if (!currentData) {
      console.error("Er is geen Mandate data beschikbaar om op te slaan.");
      return;
  }

  // Sla de Mandate credentials op
  processMandate(currentData);


  // Toon het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'flex';

  // Verberg het pincode bevestigingsscherm
  document.getElementById('mandate-pin-confirmation-screen').style.display = 'none';

  // Reset de pincode invoervelden
  resetPinInputs();
});


function processMandate(data) {
  const timestamp = new Date().toLocaleString();
  console.log("processMandate functie aangeroepen met data:", data);

  // Creëer een machtiging kaartje voor de machtigingen-sectie
  const machtigingCard = {
      type: 'mandate',
      requester: data.requester || 'Onbekende requester',
      reason: data.reason || 'Geen reden opgegeven',
      mandate: data.mandate.map(item => ({
          issuedBy: fieldMapping[item.issuedBy] || item.issuedBy,
          name: fieldMapping[item.name.toLowerCase()] || item.name
      })),
      a: fieldMapping.a[data.a] || data.a,
      actionTimestamp: timestamp,
      isShareAction: false,
      name: `Machtiging - ${data.requester}` // Nodig voor displayCredentials indien nodig
  };

  credentials.push(machtigingCard);
  saveCredentials();
  displayMachtigingen(); // Functie om machtigingen weer te geven in de machtigingen-section

  // Log de activiteit voor het activiteiten-scherm
  const activity = {
      type: 'mandate', // Type activiteittype: 'machtiging', // Type activiteit
      name: 'Machtiging',
      requester: data.requester || 'Onbekende requester',
      reason: data.reason || 'Geen reden opgegeven',
      actionTimestamp: timestamp, // Gebruik 'actionTimestamp' consistent
      isActivity: true // Markeer als activiteit
  };

  credentials.push(activity);
  saveCredentials();

  // Toon het mandate-success-screen
  showMandateSuccessScreen(data.requester, timestamp);
}






// Functie om een activiteit te loggen
function logActivity(type, requester, timestamp) {
  const activity = {
      type: type, // 'machtiging' of 'share'
      requester: requester,
      timestamp: timestamp,
      isActivity: true // Markeer als activiteit
  };
  // Voeg de activiteit toe aan credentials
  credentials.push(activity);
  saveCredentials();
}

// Functie om het mandate-success-screen te tonen
function showMandateSuccessScreen(requester, timestamp) {
  // Vul de requester naam in het success-screen
  document.getElementById('mandate-success-requester').innerText = requester || 'Onbekende requester';

  // Toon het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'flex';
}

// Event listener voor de "Bekijk Machtiging" knop in het mandate-success-screen
document.getElementById('view-mandate-button').addEventListener('click', () => {
  console.log("Bekijk Machtiging Button clicked.");

  // Verberg het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'none';

  // Verberg het add-card screen
  addCardScreen.style.display = 'none';

   // Toon het wallet-screen
   walletScreen.style.display = 'none';

  // Toon de bottom-nav
  bottomNav.style.display = 'flex';

  // Toon de machtiging-section
  document.getElementById('machtiging-section').style.display = 'flex';

  // Activeer het machtigingen navbar-item
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  machtigingNavbarItem.classList.add('active');

 // Roep de functie aan om de machtigingen weer te geven
 displayMachtigingen();


  console.log("Machtiging-section getoond");
});


// Event listener voor de "Sluiten" knop in het mandate-success-screen
document.getElementById('close-mandate-success-button').addEventListener('click', () => {
  console.log("Sluiten Button clicked.");

  // Verberg het mandate-success-screen
  document.getElementById('mandate-success-screen').style.display = 'none';

  // Verberg het add-card screen
  addCardScreen.style.display = 'none';

  // Toon de bottom-nav
  bottomNav.style.display = 'flex';

  // Toon het wallet-screen
  walletScreen.style.display = 'block';

  console.log("Terug naar wallet-screen.");
});


// Functie om een mock QR-code te verwerken
function scanMockQRCode(mockData) {
  try {
      const data = JSON.parse(mockData);
      const timestamp = new Date().toLocaleString();

      // Stap 1: Controleer het type QR-code
      if (data.type === "mandate") {
          console.log("Mandate Mock QR-code herkend.");
          handleMandateQR(data, timestamp);
      }
      // Bestaande condities voor andere types (CSAS, RDFCV, RDFCI, Issuer)
      else if (data.type === "verifier" && data.csas) {
          // ... bestaande RDFCV en CSAS handling ...
      }
      else if (data.issuedBy && data.name) {
          // ... bestaande Issuer handling ...
      } else {
          console.log("Onbekende QR-code structuur.");
      }

  } catch (error) {
      console.error("Mock QR-code parse error: ", error);
  }
}

// Voeg een event listener toe voor het tonen van machtiging details
function showMandateDetails(mandate) {
 

  // Verberg andere secties
  document.getElementById('wallet-screen').style.display = 'none';
  machtigingSection.style.display = 'none';
   // Verberg de bottom-nav
   bottomNav.style.display = 'none';

  // Toon de machtigingsdetails
  const mandateDetailsView = document.getElementById('mandate-details');
  mandateDetailsView.style.display = 'block';

  // Vul de titel en de content
  document.getElementById('mandate-details-title').textContent = `Machtiging aan ${mandate.requester}`;
  
  let detailsHTML = `
    <p><strong>Aanvrager:</strong> ${mandate.requester}</p>
    <p><strong>Machtiging afgegeven op:</strong> ${mandate.actionTimestamp}</p> <!-- Voeg datum en tijd toe -->
    <p><strong>Reden verzoek:</strong> ${mandate.reason}</p>
    <div class="divider"></div>
    <p><strong>Gegevens die ${mandate.requester} mag ophalen:</strong></p>
    
  `;

  mandate.mandate.forEach(item => {
    detailsHTML += `
      <p>Naam uitgever: ${fieldMapping[item.issuedBy] || item.issuedBy}</p>
      <p>Gegevens: ${fieldMapping[item.name.toLowerCase()] || item.name}</p>
      
    `;
  });

  // Voeg gevraagde gegevens toe onder een nieuw kopje
  detailsHTML += `
    <div class="divider"></div>
    <p><strong>Gevraagde gegevens voor ophalen:</strong></p>
    <p>Voornaam: Willeke Liselotte</p>
    <p>Achternaam: De Bruijn</p>
    <p>Geboortedatum: 10 maart 1980</p>
    <p>Burgerservicenummer (BSN): 938391772</p>
   
  `;

  detailsHTML += `
    <div class="divider"></div>
    <p><strong>Overeenkomst:</strong></p>
    <p>${fieldMapping.a[mandate.a] || mandate.a}</p>
  `;

  document.getElementById('mandate-details-content').innerHTML = detailsHTML;

  // Voeg de functionaliteit toe voor de terugknop van de details
  document.getElementById('close-details-mandate').onclick = () => {
    mandateDetailsView.style.display = 'none';
    machtigingSection.style.display = 'flex'; // Ga terug naar de machtigingensectie
    bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
  };
}


  // Voeg de functionaliteit toe voor de terugknop van de machtiging sectie
  document.getElementById('close-machtiging-section').onclick = () => {
   
    machtigingSection.style.display = 'none'; // 
    walletScreen.style.display = 'block';
    bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
    overviewNavbarItem.classList.add('active');
  };



    // Voeg de functionaliteit toe voor de terugknop van de contacten sectie
    document.getElementById('close-trusted-contacts-section').onclick = () => {
   
      trustedContactsSection.style.display = 'none';
      walletScreen.style.display = 'block';
      bottomNav.style.display = 'flex'; // Toon de bottom-nav weer
      overviewNavbarItem.classList.add('active');
    };
  
  


// Gecombineerde displayMachtigingen functie
function displayMachtigingen() {
  console.log("displayMachtigingen functie aangeroepen");

  const machtigingGrid = document.getElementById('machtiging-grid');
  machtigingGrid.innerHTML = '';

  // Filter en toon alleen machtiging kaartjes die geen activiteit zijn
  const machtigingen = credentials.filter(cred => cred.type === 'mandate' && !cred.isActivity);


  // Sorteer de machtigingen op datum (meest recente eerst)
  machtigingen.sort((a, b) => {
      let dateA = Date.parse(convertToStandardDate(a.actionTimestamp));
      let dateB = Date.parse(convertToStandardDate(b.actionTimestamp));
      return dateB - dateA;
  });
  console.log("Gesorteerde machtigingen:", machtigingen);

  // Doorloop de gesorteerde machtigingen en voeg ze toe aan de weergave
  machtigingen.forEach((mandate, index) => {
    const card = document.createElement('div');
    card.className = 'card';

      card.innerHTML = `
          <div class="card-text">
              <h3>${mandate.requester}</h3>
              <p>Reden: ${mandate.reason}</p>
              <p>Datum: ${mandate.actionTimestamp}</p>
          </div>
      `;

      // Gebruik showMandateDetails voor het weergeven van details
      card.addEventListener('click', () => showMandateDetails(mandate));

      // Voeg kaart toe aan de grid
      machtigingGrid.appendChild(card);
  });
}

// Event listener voor het klikken op de overzicht-knop in de navbar
overviewNavbarItem.addEventListener('click', () => {
  // Verberg andere secties
  walletScreen.style.display = 'block';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
});

// Event listener voor het klikken op de activiteiten-knop in de navbar
activitiesNavbarItem.addEventListener('click', () => {
  // Verberg andere secties
  walletScreen.style.display = 'none';
  activitiesSection.style.display = 'flex';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het activiteiten-item actief in de navbar
  activitiesNavbarItem.classList.add('active');
});

// Event listener voor het klikken op de contacten-knop in de navbar
contactsNavbarItem.addEventListener('click', () => {
  // Verberg andere secties
  walletScreen.style.display = 'none';
  activitiesSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';
  bottomNav.style.display = 'none';

  // Toon het trusted contacts scherm
  trustedContactsSection.style.display = 'block';

  // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Zet het contacten-item actief in de navbar
  contactsNavbarItem.classList.add('active');
});




settingsButton.addEventListener('click', () => {
  // Verberg het wallet-overzicht
  walletScreen.style.display = 'none';
  bottomNav.style.display = 'none';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Toon het instellingen-scherm
  instellingenSection.style.display = 'flex';
});

closeSettingsBtn.addEventListener('click', () => {
  // Verberg het instellingen-scherm
  instellingenSection.style.display = 'none';
  activitiesSection.style.display = 'none';
  trustedContactsSection.style.display = 'none';
  instellingenSection.style.display = 'none';
  machtigingSection.style.display = 'none';

  // Toon het wallet-scherm
  bottomNav.style.display = 'flex';
  walletScreen.style.display = 'block';
});



// Functie om een bericht te openen
function openMessageDetails(sender, message, datetime) {
  // Vul de gegevens in het detailscherm
  contactNameElement.textContent = sender;
  messageDatetimeElement.textContent = datetime;
  messageTextElement.textContent = message;

  // Verberg de Trusted Contacts sectie en toon het bericht details scherm
  trustedContactsSection.style.display = 'none';
   // Verberg de bottom-nav
   bottomNav.style.display = 'none';
  messageDetailsScreen.style.display = 'block';
}




// Event listener voor het sluiten van het berichtdetailscherm
closeMessageDetailsBtn.addEventListener('click', () => {
  messageDetailsScreen.style.display = 'none';
  
  trustedContactsSection.style.display = 'block'; // Keer terug naar de Trusted Contacts sectie


});

const messageTexts = {
  ipa5: 'IPA-5 Deel uw diploma met ons voor het aanmeldingsproces. Haal uw diploma op bij DUO.',
  ipa6: 'IPA-6 Wij willen graag dat u uw diploma met ons deelt voor het aanmeldingsproces. Klik op de volgende link: <a href="#" id="share-link">Diploma ophalen</a> om uw diploma op te halen in de catalogus van de wallet',
  ipa7: 'IPA-7 Deel uw diploma met ons voor het aanmeldingsproces. Klik op de volgende link: <a href="#" id="ipa7-share-link">Diploma delen</a>',
  ipa8: 'IPA-8 Woningcorporatie Leijendakje heeft een machtiging aangevraagd om namens u gegevens éénmalig op te halen voor een financiële check. Klik op de volgende link: <a href="#" id="ipa8-mandate-link">Eénmalige machtiging ophalen gegevens bekijken</a>'
};


const IPA5MessageButton = document.getElementById('IPA-5-message-button');

IPA5MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Werkgever IPA 5', messageTexts.ipa5, 'ipa5'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';

     // Toon de bottom-nav weer
    bottomNav.style.display = 'flex';
});

const IPA6MessageButton = document.getElementById('IPA-6-message-button');

IPA6MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Werkgever IPA 6', messageTexts.ipa6, 'ipa6'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

 // Toon de bottom-nav weer
 bottomNav.style.display = 'flex';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';
});

const IPA7MessageButton = document.getElementById('IPA-7-message-button');

IPA7MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Werkgever IPA 7', messageTexts.ipa7, 'ipa7'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

 // Toon de bottom-nav weer
 bottomNav.style.display = 'flex';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';
});


const IPA8MessageButton = document.getElementById('IPA-8-message-button');

IPA8MessageButton.addEventListener('click', () => {
    // Voeg het mock-bericht toe en gebruik de tekst vanuit het object
    addMockMessageToTrustedContacts('Woningcorporatie Leijendakje', messageTexts.ipa8, 'ipa8'); 

    // Verberg het instellingen-scherm
    instellingenSection.style.display = 'none';

    // Toon de bottom-nav weer
    bottomNav.style.display = 'flex';

    // Toon het wallet-scherm
    walletScreen.style.display = 'block';
});

function openMessageDetails(sender, message, datetime, messageType) {

  bottomNav.style.display = 'none';  // Dit zorgt ervoor dat de bottom navigation wordt verborgen
  // Zet het overzicht-item actief in de navbar
  
  const messageDetailsScreen = document.getElementById('message-details-screen');
  messageDetailsScreen.style.display = 'block';
  trustedContactsSection.style.display = 'none';

  const messageSenderElement = document.getElementById('contact-name');
  const messageDatetimeElement = document.getElementById('message-datetime');
  const messageTextElement = document.getElementById('message-text');

  messageSenderElement.textContent = sender;
  messageDatetimeElement.textContent = datetime;
  messageTextElement.innerHTML = message;

  // Voeg de juiste event listener toe voor de link, afhankelijk van het berichttype
  if (messageType === 'ipa6') {
      const shareLink = document.getElementById('share-link');
      if (shareLink) {
          shareLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';
              cardCatalogue.style.display = 'block'; 
               // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
          });
      }
  } else if (messageType === 'ipa7') {
      const shareLink = document.getElementById('ipa7-share-link');
      if (shareLink) {
          shareLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';
              const mockVerifierData = {
                  type: "verifier",
                  requester: "Werkgever IPA-7",
                  reason: "Diploma delen voor aanmeldingsproces",
                  csas: [{ issuedBy: "DUO", name: "Diploma Verpleegkunde" }],
                  a: "12t"
              };
              window.currentCsasData = mockVerifierData;
              populateCsasModal(mockVerifierData);
              csasModal.style.display = 'flex';
               // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
          });
      }
  } else if (messageType === 'ipa8') {
      const mandateLink = document.getElementById('ipa8-mandate-link');
      if (mandateLink) {
          mandateLink.addEventListener('click', function(e) {
              e.preventDefault();
              messageDetailsScreen.style.display = 'none';
              trustedContactsSection.style.display = 'none';

              // Mock mandate QR data
              const mockMandateData = {
                  type: "mandate",
                  requester: "Woningcorporatie Leijendakje",
                  reason: "financiële check",
                  mandate: [{ issuedBy: "BD", name: "Inkomensverklaring" }],
                  a: "12t"
              };

              // Simuleer de invoer van de mock mandate QR-code
              handleMandateQR(mockMandateData, new Date().toLocaleString());
              mandateModal.style.display = 'flex';
               // Zorg ervoor dat de andere navbar-items niet meer actief zijn
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
              // Zet het overzicht-item actief in de navbar
  overviewNavbarItem.classList.add('active');
          });
      }
  }
}



function addMockMessageToTrustedContacts(sender, message, messageType) {
  const messagesGrid = document.getElementById('messages-grid');
  if (messagesGrid) {
      const datetime = new Date().toLocaleString(); // Voeg datum en tijd toe aan het bericht
      const messageItem = document.createElement('li');
      messageItem.classList.add('message-item');

      // Truncate afzendernaam tot 10 tekens
      const truncatedSender = sender.length > 10 ? sender.substring(0, 10) + '...' : sender;

      // Voeg dynamisch het juiste logo toe op basis van de afzender
      let logoHTML = '';
      switch (sender.toLowerCase()) {
          case 'duo':
              logoHTML = '<img src="duologo.svg" alt="DUO logo" class="logo-icon">';
              break;
          case 'belastingdienst':
              logoHTML = '<img src="belastingdienstlogo.svg" alt="Belastingdienst logo" class="logo-icon">';
              break;
          case 'woningcorporatie leijendakje':
              logoHTML = '<img src="woningcorporatielogo.svg" alt="Leijendakje logo" class="logo-icon">';
              break;
          case 'werkgever ipa 5':
              logoHTML = '<img src="ipa5logo.svg" alt="IPA 5 logo" class="logo-icon">';
              break;
          case 'werkgever ipa 6':
              logoHTML = '<img src="ipa6logo.svg" alt="IPA 6 logo" class="logo-icon">';
              break;
          case 'werkgever ipa 7':
              logoHTML = '<img src="ipa7logo.svg" alt="IPA 7 logo" class="logo-icon">';
              break;
          default:
              logoHTML = '';
              break;
      }

      // Beperk de lengte van het bericht en voeg "..." toe als het langer is
      const truncatedMessage = message.length > 50 ? message.substring(0, 50) + '...' : message;

      // Stel de HTML van het bericht samen
      messageItem.innerHTML = `
          <div class="message-item-container">
              <div class="message-logo">
                  ${logoHTML}
              </div>
              <div class="message-content">
                  <div class="message-header">
                      <strong class="message-sender">${truncatedSender}</strong>
                      <span class="message-datetime">${datetime}</span>
                  </div>
                  <div class="message-body">
                      <span>${truncatedMessage}</span>
                  </div>
              </div>
          </div>
      `;

      // Voeg event listener toe aan het bericht om details te openen
      messageItem.addEventListener('click', () => {
          openMessageDetails(sender, message, datetime, messageType);

          // Verberg het notificatiebolletje zodra op het bericht wordt geklikt
          const notificationBadge = document.getElementById('notification-badge');
          if (notificationBadge) {
              notificationBadge.style.display = 'none';
          }
      });

      // Voeg het nieuwe bericht toe aan het grid
      messagesGrid.appendChild(messageItem);

      // Voeg loggings toe om de datums te controleren tijdens sorteren
   /*    console.log("Berichten voor sortering:", Array.from(messagesGrid.children).map(msg => msg.querySelector('.message-datetime').textContent));

       */
// Sorteer de berichten in `messages-grid` op datum in aflopende volgorde (nieuwste eerst)
const sortedMessages = Array.from(messagesGrid.children)
    .sort((a, b) => {
        const dateStrA = a.querySelector('.message-datetime').textContent;
        const dateStrB = b.querySelector('.message-datetime').textContent;
       /*  console.log("Oorspronkelijke datum A:", dateStrA, "Geconverteerde datum A:", convertToStandardDate(dateStrA));
        console.log("Oorspronkelijke datum B:", dateStrB, "Geconverteerde datum B:", convertToStandardDate(dateStrB));
 */
        const dateA = new Date(convertToStandardDate(dateStrA));
        const dateB = new Date(convertToStandardDate(dateStrB));
        return dateB - dateA; // Aflopende volgorde (nieuwste eerst)
    });

/* console.log("Berichten na sortering:", sortedMessages.map(msg => msg.querySelector('.message-datetime').textContent));
 */

      // Leeg het grid en voeg de gesorteerde berichten toe zonder reverse
      messagesGrid.innerHTML = '';
      sortedMessages.forEach(msg => messagesGrid.appendChild(msg));

      // Toon het notificatiebolletje
      const notificationBadge = document.getElementById('notification-badge');
      notificationBadge.style.display = 'flex';
      notificationBadge.textContent = '1'; // Aantal berichten, kan worden aangepast
  } else {
      console.error("Trusted Contacts sectie niet gevonden.");
  }
}


// Functie om de card-catalogue te openen en de wallet te verbergen
openCardCatalogueBtn.addEventListener('click', () => {
  walletScreen.style.display = 'none';     // Verberg het wallet-scherm
  cardCatalogue.style.display = 'block';   // Toon het card-catalogue scherm
  bottomNav.style.display = 'none';        // Verberg de bottom-nav
});

// Functie om terug te gaan van card-catalogue naar het wallet-scherm
closeCardCatalogueBtn.addEventListener('click', () => {
  cardCatalogue.style.display = 'none';    // Verberg het card-catalogue scherm
  walletScreen.style.display = 'block';    // Toon het wallet-scherm opnieuw
  bottomNav.style.display = 'flex';        // Toon de bottom-nav opnieuw
});

// Event listener om 'Mijn digitale bewijzen' te openen
openCurrentCardsBtn.addEventListener('click', function() {
  currentCardsSection.style.display = 'flex';  // Toon 'Mijn digitale bewijzen' sectie
  walletScreen.style.display = 'none';  // Verberg het wallet-scherm
  bottomNav.style.display = 'none';  // Verberg de bottom-nav
});

// Event listener voor de terug-knop
closeCurrentCardsBtn.addEventListener('click', function() {
  currentCardsSection.style.display = 'none';  // Verberg de 'Mijn digitale bewijzen' sectie
  walletScreen.style.display = 'block';  // Toon het wallet-scherm
  bottomNav.style.display = 'flex';  // Toon de bottom-nav
});

// Zoekbalk functionaliteit bij demostarten
const searchInput = document.getElementById('search-input');
const demoLinks = document.querySelectorAll('.demo-button');

searchInput.addEventListener('input', function() {
  const filter = searchInput.value.toLowerCase();

  demoLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes(filter)) {
      link.style.display = 'block';
    } else {
      link.style.display = 'none';
    }
  });
});





function showMessage() {
  alert("Functie wordt later toegevoegd");
}