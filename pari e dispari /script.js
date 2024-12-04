//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


//1.Facciamo scegliere all'utente pari o dispari 
const userEvenOrOdd = prompt("Scegli tra pari o dispari");
console.log(userEvenOrOdd);

//2 Facciamo scegliere all'utente un numero da 1 a 5.
const userNumber = Number(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

//3.Genero un numero anche per il computer usando una funzione.
function cpuChoise() {
    return Math.floor(Math.random() * 5) + 1;
}

let numberCpu = cpuChoise();
console.log('numberCpu', numberCpu);

//4.Sommo i due numeri 
let somma = userNumber + numberCpu;
console.log('Somma', somma);

//5.Stabilisco se la somma mi da pari o dispari e dichiaro il vincitore.

if (userEvenOrOdd === 'pari' && somma % 2 === 0) {
    console.log('The winner is user');

} else if (userEvenOrOdd === 'dispari' && somma % 2 !== 0) {
    console.log('The winner is user');
} else {
    console.log('The winner is Cpu');
}





