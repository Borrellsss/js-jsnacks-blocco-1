// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let numbersArray = [];

let numbersSum = 0;

for (let i = 0; i < 10; i++) {
    let userNumber = parseInt( prompt("dammi un numero") );
    numbersArray.push(userNumber);
}

for (let i = 0; i < numbersArray.length; i++) {
    let thisNuber = numbersArray[i];
    
    numbersSum += thisNuber;
}

alert(`questa è la somma di tutti i tuoi numeri: ${numbersSum}!`);