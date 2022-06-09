// Chiedi un numero di 4 cifre all’utente nel prompt
// e calcola la somma di tutte le cifre che compongono il numero. 

let userNumber = prompt("scrivi un numero a quattro cifre");

let userNumberSum = 0;

let thisNumber;

for (let i = 0; i < userNumber.length; i++) {
    thisNumber = parseInt(userNumber[i]);

    userNumberSum += thisNumber;
}

if (userNumber.length === 4) {
    alert(`il tuo risultato è: ${userNumberSum}!`);
} else if (userNumber.length > 4) {
    alert("non più di quattro cifre!");
} else {
    alert("non meno di quattro cifre!");
}