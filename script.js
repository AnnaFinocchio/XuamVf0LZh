// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCm_cgBqQz7rvxtlsC4WhUXLLKVkT0uPY8",
    authDomain: "pick-em-e7f28.firebaseapp.com",
    projectId: "pick-em-e7f28",
    storageBucket: "pick-em-e7f28.appspot.com",
    messagingSenderId: "970548870322",
    appId: "1:970548870322:web:814f99f15ce364c8e89dab",
    measurementId: "G-4XLTPFHHRQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


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
