'use strict';

//1) definisco una variabile parola1 e mostro un prompt all'utente;

const parola1 = prompt('Inserisci la prima parola');

//2) definisco una variabile parola2 e mostro un prompt all'utente;

const parola2 = prompt('Inserisci la seconda parola');

//3) salvo in una variabile il numero di caratteri della parola 1 - lunghezza1;

const lunghezzaParola1 = parola1.length;

//4) salvo in una variabile il numero di caratteri della parola 2 - lunghezza2;

const lunghezzaParola2 = parola2.length;

/*
5) istruzione condizionale
    - SE lunghezza1 > lunghezza2
        - stampo "Parola 1 più lunga di Parola2"
    - ALTRIMENTI SE lunghezza2 > lunghezza1
        - stampo "Parola 2 più lunga di Parola1"
    - ALTRIMENTI
        - stampo "Le parole hanno la stessa lunghezza"
*/

if (lunghezzaParola1 > lunghezzaParola2) {
  //eseguo questo codice
  console.log(
    'Caso 1: ',
    `${parola1} (${lunghezzaParola1} caratteri) è più lunga di ${parola2} (${lunghezzaParola2} caratteri)`
  );
} else if (lunghezzaParola2 > lunghezzaParola1) {
  //eseguo questo codice
  console.log(
    'Caso 2: ',
    `${parola2} (${lunghezzaParola2} caratteri) è più lunga di ${parola1} (${lunghezzaParola1} caratteri)`
  );
} else {
  //eseguo questo codice
  console.log(
    'Caso 3: ',
    `${parola1} (${lunghezzaParola1} caratteri) è lunga come ${parola2} (${lunghezzaParola2} caratteri)`
  );
}

console.log('Sono alla fine del programma');
