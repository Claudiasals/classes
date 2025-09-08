// ---- CLASSES and PROTOTYPE

// SINTASSI BASE
/*
class MyClass {
    // metodi della classe
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }
  
  let obj = new MyClass();
  new MyClass() creerà un nuovo oggetto con tutti i metodi presenti nella classe.

  */



// ---- ESEMPIO

class User {

    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }
    sayHi() {
        alert("Buon pomeriggio " + this.name + " " + this.lastname + "!");
    }

}

// Quando viene chiamato new User(...) viene creato un nuovo oggetto con i parametri del constructor.
// "this" dentro il constructor punta all’oggetto appena creato.

let user1 = new User("Team", 2);
let user2 = new User("Anna", "Rossi");
let user3 = new User("Luca", "Bianchi");

// Stampiamo in console i nostri 3 nuovi oggetti
console.log(user1);
console.log(user2);
console.log(user3);

// chiamiamo il metodo "sayHi" della classe "User" sull'oggetto user1.
// Apparirà così il popup con i parametri dell'user1.
user1.sayHi();
  // con il nome "METODO" intendiamo una funzione che appartiene ad una classe o ai suoi oggetti.
  // tutte le funzioni non legate a classi sono chiamate solo “funzioni”.
  // l'oggetto eredita tutti i metodi della sua classe.
  // Ogni oggetto ha accesso a sayHi(), ma usa i suoi dati (this.name, this.lastname).



// ---- COSA APPARE IN CONSOLE? 

/* PRIMO OGGETTO:
User { name: 'Team', lastname: 2 }
lastname: 2
name: "Team"
[[Prototype]]: Object
constructor: class User
sayHi: ƒ sayHi()
[[Prototype]]: Object
*/ 


// ---- COS'È IL PROTORYPE ("[[Prototype]]: Object") ?

/* In JavaScript, il prototype è una proprietà speciale delle funzioni costruttrici (constructor) e delle classi, 
che serve per far ereditare agli oggetti creati con quella funzione (sotto quella specifica classe) le proprietà e i metodi. 
Il constructor salva tutti i metodi (come sayHi) all’interno del User.prototype. 
Quindi quando chiameremo da un oggetto un metodo, come abbiamo fatto con user1.sayHi, il metodo verrà preso dal prototype dove è salvato.
Il prototype è un altro oggetto da cui l’oggetto eredita proprietà e metodi.

Questo meccanismo si chiama "prototypal inheritance" (ereditarietà basata sui prototipi),
il metodo di scrivere IL codice con (funzione + prototype) è in disuso, si usava prima dell'esistenza delle classi (arrivate nel 2015 con ES6), 
ora quindi si utilizzano: class, extend, super; perché hanno una sintassi più chiara. Comunque il motore Javascript del browser traduce le 
classi in una funzione costruttrice (funzione + prototype), mettendo i metodi dentro al prototype e restituendo la "prototype chain"
che userà quando istanzerà gli oggetti (cioè quando creiamo oggetti nuovi con "new"). 

La "prototype chain" è la catena di oggetti che conduce il motore JS fino all' "Object.prototype" (il prototypo base di tutti gli oggetti).

Il termine [[Prototype]] è come lo mostra la console, ma in codice puoi accedervi con Object.getPrototypeOf(user1).
*/

// --- ESEMPIO PER COMPRENDERE IL CONCETTO DI PROTOTYPE

class Animale {
  parla() {
    console.log("Verso");
  }
}

class Cane extends Animale {
  abbaia() {
    console.log("Bau!");
  }
}

const fido = new Cane();
fido.abbaia(); // "Bau!"
fido.parla();  // "Verso"

/*
"fido.abbaia()" : JS trova il metodo direttamente nell’oggetto fido o nel suo prototype (Cane.prototype).
"fido.parla()" : non è in Cane.prototype, quindi JS sale al prototype di Cane, cioè Animale.prototype, e lo trova lì.
Se il metodo non esistesse in nessun prototype della catena ruisulterà come errore undefined.
 */

// LO STESSO ESEMPIO SCRITTO CON IL METODO PROTOTYPE INHERANCE (FUNZIONE + PROTOTYPE)
// Funzione costruttrice per Animale

function Animal() {}

// Aggiungo il metodo parla al prototype di Animale
Animal.prototype.parla = function() {
  console.log("Verso");
};

// Funzione costruttrice per Cane
function Dog() {}

// Collegamento del prototype (inheritance)
Dog.prototype = Object.create(Animal.prototype); // Cane eredita da Animale
Dog.prototype.constructor = Cane; // Corregge il costruttore

// Aggiungo il metodo abbaia al prototype di Cane
Cane.prototype.abbaia = function() {
  console.log("Bau!");
};

// Creo l’istanza
const briciola = new Cane();

fido.abbaia(); // "Bau!"
fido.parla();  // "Verso"