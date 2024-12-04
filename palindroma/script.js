//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//1.Chiedere all'utente di inserire un numero 
const userWord = prompt("Inserisci una parola");
console.log(userWord)

//2.Creare una funzione per invertire la parola 
function reverseWord(userWord) {
    let reversed = ""; 
    for (let i = userWord.length - 1; i >= 0; i--) {
        reversed += userWord[i]; 
    }
    return reversed; 
}
//3.Verificare la parola invertita
console.log(reverseWord(userWord));

//4.Controllare se la parola invertita è palidroma
function isPalindrome(userWord){
    const wordReverse = reverseWord(userWord);
    if (wordReverse === userWord) {
        return true;
    } else {
        return false;
    }
}

//5.Mostro il risultato all'utente 
if (isPalindrome(userWord)) {
     alert("La parola è palidroma");
} else {
    alert("La parola non è palidroma");
}