// Configurazione Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCm_cgBqQz7rvxtlsC4WhUXLLKVkT0uPY8",
    authDomain: "pick-em-e7f28.firebaseapp.com",
    projectId: "pick-em-e7f28",
    storageBucket: "pick-em-e7f28.appspot.com",
    messagingSenderId: "970548870322",
    appId: "1:970548870322:web:814f99f15ce364c8e89dab",
    measurementId: "G-4XLTPFHHRQ"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Funzione per aggiungere un pronostico
function aggiungiPronostico(nomeGiocatore, pronostico) {
    db.collection("pronostici").add({
        nomeGiocatore: nomeGiocatore,
        pronostico: pronostico,
        punteggio: 0 // Inizialmente impostato a 0
    })
    .then(() => {
        console.log("Pronostico aggiunto con successo!");
    })
    .catch((error) => {
        console.error("Errore nell'aggiunta del pronostico: ", error);
    });
}

// Aggiungi event listener al modulo
document.getElementById('pronosticoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del modulo
    const nomeGiocatore = document.getElementById('nomeGiocatore').value;
    const pronostico = document.getElementById('pronostico').value;
    aggiungiPronostico(nomeGiocatore, pronostico);
    this.reset(); // Resetta il modulo dopo l'invio
});
