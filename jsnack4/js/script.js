// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

let numbersArray = [];
let userNumbers;

for (let i = 0; i < 6; i++) {

    userNumbers = parseInt( prompt("inserisci un numero") );
    
    if (userNumbers % 2 === 0) {
        numbersArray.push(userNumbers);
    }
}

console.log(numbersArray);