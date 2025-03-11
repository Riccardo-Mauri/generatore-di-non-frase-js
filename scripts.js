//il mio codice javascript
console.log("ciao da js");

/* 
Il mio intento è di generare una frase casuale cliccando il bottone nella pagina, successivamente restituirla alla pagina e vederla.
Pensavo di creare una sequenza di array con all'interno varie parole e,
una volta premuto il bottone con una funzione di ascolto caricare da questi array randomicamente le parole al loro interno,
da simulare una generazione casuale di parole,
non mi interessa che abbia o no senso compiuto,il suo fine ultimo è semplicemente quello di creare una frase ogni volta che ci clicchi sopra
*/
//creo quindi i miei array che contengono parole casuali
const primoArray = ["sole", "finestra", "libreria", "gatto", "tavolo"];
const secondoArray = ["montagna", "telefono", "matita", "cuscino", "bicicletta"];
const terzoArray = ["canzone", "fiume", "nuvola", "computer", "scarpa"];

//inizializzo il puslante che andrà a generare la frase senza senso

const mioBottone = document.getElementById("PulsanteGeneraFrase");

//aggiungo un adeventlistener per catturare ogni volta che il pulsante viene premuto

addEventListener("click", function(){
    console.log("bottone premuto");
});