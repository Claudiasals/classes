/* ESTENTERE UN ARRAY 


Quando usi `extends` per estendere una CLASSE stai creando una nuova classe 
che eredita proprietà e metodi da un’altra.

Un array in JavaScript è anch’esso unoggetto costruito da una classe interna (`Array`).
in JavaScript Array è una classe nativa (built-in class). Questo significa che quando crei un array ([1,2,3]), 
stai in realtà creando un oggetto costruito dalla classe Array.

--- Le proprietà della classe nativa "Array" sono:
- LENGHT: il numero di elementi nell'array
- INDICI NUMERICI: ogni elemento è una proprietà con chiave numerica.

--- Metodi principali ereditati dalla classe nativa Array:
- tutti i metodi degli Array. Gli array hanno decine di metodi, 
e tutti sono definiti in Array.prototype.



--- COME SI COLLEGA AL CONCETTO DI CLASSE? ---

Quando scriviamo:
*/

const arr = [1, 2, 3];


/* JavaScript crea un oggetto con:

Proprietà --> 0: 1, 1: 2, 2: 3, length: 3

Prototype --> collegato a Array.prototype, che contiene tutti i metodi sopra.

Dunque gli array funzionano grazie a una combinazione di 
proprietà specifiche: (length, indici) + metodi definiti in Array.prototype.


--- COME FUNZIONA LA RICERCA DI UN METODO ---

-- ESEMPIO: 
*/
arr.push(4);

/*
1) JavaScript guarda se arr ha un metodo push come proprietà --> NO
2) Sale nella prototype chain e in Array.prototype --> trova il metodo push().
3) Lo esegue e modifica arr.
-Il metodo push() serve ad aggiungere uno o più elementi alla fine di un array.



-- ESEMPIO 2:
*/
arr.toString();

/*
1) Cerca in arr --> NO
2) Cerca in Array.prototype --> NO
3) Va in Object.prototype --> trova toString().
4) Lo esegue.
-Il metodo toString() serve a convertire un array (o qualsiasi oggetto) in una stringa.

Il metodo "toString()"" nasce come metodo di tutti gli oggetti, cioè fa parte di Object.prototype.
Gli array ereditano tutti i metodi di Object.prototype, quindi anche toString().
In più, gli array hanno la loro versione personalizzata di toString() definita in Array.prototype 
che sovrascrive quella generica degli oggetti.


Quindi possiamo creare una classe che estende Array:

-- ESEMPIO:
*/
class MiaLista extends Array { //creiamo nuova classe (MiaLista) che eredita tutto ciò che ha Array (metodi come push, map, length, ecc.).
  primo() { //Ma quella classe è vuota finché non aggiungiamo qualcosa: aggiuungiamo il metodo primo() 
    return this[0]; // gli chiediamo: restituisci l'elemento con indice 0 dell'array (il primo elemento)
  }
}

const lista = new MiaLista(10, 20, 30); 
console.log(lista.primo()); // 10 
console.log(lista.length);  // 3 (eredita il comportamento di default dell’array), 
//LENGTH è una proprietà predefinita degli array in JavaScript. 
//Questo significa che ogni array ha una proprietà length che contiene il numero di elementi presenti nell’array.

/*
Stiamo usando EXTENDS solo che la classe che estendiamo non è una nostra classe (come `Animale`), 
ma è la classe "Array" nativa di JavaScript.
Ora possiamo aggiungere nuovi metodi o comportamenti personalizzati senza modificare l’array originale.

Ad esempio primo() restituisce il primo elemento,
e possiamo creare infiniti metodi come primo, sempre scritti all'interno della classe "MiaLista".



--- IN CONCLUSIONE:

La differenza tra l'utilizzo di extends nelle classi e nell'array (o con qualsiasi altro built-in di JS) 
è che invece di ereditare da una classe che abbiamo creato noi, ereditiamo da una "class built-in" di JS
con metodi e attributi di default forniti dal motore JavaScript.



--- QUALI SONO LE CLASS BUILD-IN DI JS?

Le più comuni si possono dividere in categorie:

1. Strutture di dati
Array --> array e metodi come push(), map(), filter(), ecc.
Set --> collezione di valori unici.
Map --> collezione chiave → valore.
WeakMap --> come Map ma con riferimenti deboli (garbage collection).
WeakSet --> come Set ma con riferimenti deboli.

2. Tipi primitivi “avvolti” (wrapper)
String --> per lavorare con stringhe come oggetti.
Number --> per numeri come oggetti (es. metodi .toFixed()).
Boolean --> wrapper per valori true/false.
BigInt --> per numeri interi molto grandi.
Symbol --> valori unici immutabili.

3. Date e orologio
Date --> per date e orari.
Intl --> internazionalizzazione (formati di data, numeri, valuta).

4. Errori
Error --> errore generico.
TypeError, ReferenceError, SyntaxError, … --> errori specifici.

5. Funzioni e strutture avanzate
Function --> oggetti funzione.
Promise --> gestione asincrona (async).
RegExp --> espressioni regolari.
ArrayBuffer, DataView, TypedArray (es. Uint8Array) --> per dati binari.

6. Altri oggetti globali
Math --> metodi matematici (non è propriamente una classe, ma simile).
JSON --> parsing/stringifying JSON.
Proxy --> intercettare operazioni su oggetti.
Reflect --> operazioni su oggetti. */