/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1 = 5, l2 = 8) {
  return l1 * l2;
}
console.log(area(5, 8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(8, 8));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num4) {
  if (num4 > 19) {
    return Math.abs(num4 - 19) * 3;
  } else {
    return Math.abs(num4 - 19);
  }
}
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(num5) {
  if ((num5 > 20 && num5 < 100) || num5 === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(55));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (name) {
  if (name.toUpperCase().startsWith("EPICODE")) {
    return name;
  } else {
    return (name = "EPICODE" + name);
  }
};
const stringEpify = epify("epicodebla");
console.log(stringEpify);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num6) {
  if (num6 % 3 == 0 && num6 % 7 == 0) {
    return console.log("multiplo di 3 e di 7");
  } else if (num6 % 3 == 0) {
    return console.log("multiplo di 3");
  } else if (num6 % 7 == 0) {
    return console.log("multiplo di 7");
  }
}
console.log(check3and7(28));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (phrase) {
  const letters = phrase.split("");
  console.log(letters);
  const reversed = letters.reverse();
  console.log(reversed);
  const joined = reversed.join("");
  console.log(joined);
  return joined;
};
const stringReverse = reverseString("EPICODE");
console.log(stringReverse);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (words) {
  const stringWord = words.split(" ");
  console.log(stringWord);
  const sentence = [];

  for (let i = 0; i < stringWord.length; i++) {
    const singleWord = stringWord[i];
    const firstLetter = singleWord.charAt(0);
    const remainLetter = singleWord.slice(1);
    const fullWord = firstLetter.concat(remainLetter);

    sentence.push(fullWord);
  }
  return sentence.join(" ");
};
stringFirst = upperFirst("rendere maiuscola la prima lettera di ogni parola");
console.log(stringFirst);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
