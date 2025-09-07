// ---- CLASSES 

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


// ---- COS'È IL "[[Prototype]]"" ?

/* In JavaScript, ogni oggetto ha un prototipo. Il constructor salva tutti i metodi (come sayHi) all’interno 
del User.prototype . Quindi quando chiameremo da un oggetto un metodo come con user1.sayHi, 
il metodo verrà preso dal prototype dove è salvato.
Il prototipo è praticamente un altro oggetto da cui l’oggetto eredita proprietà e metodi.
Questo meccanismo si chiama prototypal inheritance (ereditarietà basata sui prototipi). 
Il termine [[Prototype]] è come lo mostra la console, ma in codice puoi accedervi con Object.getPrototypeOf(user1).
*/

// una classe è una funzione
alert(typeof User); // function

// ...o, più precisamente, il costruttore
alert(User === User.prototype.constructor); // true

// restituisce le funzioni all'interno del prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi



