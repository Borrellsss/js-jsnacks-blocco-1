// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

const numbers = [1, 4, 6, 44, 49, 33, 58, 35, 11, 33, 22, 29, 100];
let evenNumbers = [];
let oddNumbers = [];

const redBox = document.getElementById("box-text-red");
const greenBox = document.getElementById("box-text-green");

for (let i = 0; i < numbers.length; i++) {

    let thisNumber = numbers[i];

    if (thisNumber % 2 !== 0) {
        oddNumbers.push(thisNumber);
    } else {
        evenNumbers.push(thisNumber);
    }
}

redBox.innerHTML = oddNumbers;
greenBox.innerHTML = evenNumbers;