// Configurazione Firebase
const firebaseConfig = {
    apiKey: "LA_TUA_API_KEY",
    authDomain: "IL_TUO_DOMINIO.firebaseapp.com",
    projectId: "IL_TUO_PROJECT_ID",
    storageBucket: "IL_TUO_BUCKET.appspot.com",
    messagingSenderId: "IL_TUO_SENDER_ID",
    appId: "LA_TUA_APP_ID"
};

// Inizializza Firebase
const app = firebase.initializeApp(firebaseConfig);
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

// Funzione per visualizzare i pronostici
function visualizzaPronostici() {
    db.collection("pronostici").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().nomeGiocatore} - ${doc.data().pronostico}`);
        });
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
