
// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito, infine scrivi sulla pagina nomecognomecolorepreferito23.




// Chiedere nome user
const userName = prompt ("Inserisci il tuo nome");
// console.log(userName);

// Chiedere cognome user
const userLname = prompt ("Inserisci il tuo cognome");
// console.log(userLname);

// Chiedere colore preferito
const userColor = prompt ("Inserisci il tuo colore preferito");
// console.log(userColor);

// Output password
let password = userName + userLname + userColor + "23"
console.log(password);

// Creo il testo
document.getElementById("password").innerHTML = `Questa è la tua password: ` + password;