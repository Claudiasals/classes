/* ---- INHERITANCE 

È un concetto della programmazione orientata agli oggetti (OOP) 
che permette a una classe (detta figlia o subclass) di riutilizzare proprietà 
e metodi di un’altra classe (detta genitore o superclass).
In pratica: invece di riscrivere codice uguale in più classi, 
erediti da una classe base e aggiungi solo ciò che serve.
*/

class Dog {

    constructor(razza, peso) {
        this.razza = razza
        this.peso = peso
    }
    speak() {
        console.log("Descrizione paziente: " + this.razza + ", " + this.peso + "kg.");

    }
}

let dog1 = new Dog("Carlino", 8);

let dog2 = new Dog("Corso", 60)
console.log(dog2)

dog1.speak(); // NON SERVE UN CONSOLE.LOG PER STAMPARE PERCHé LA FUNZIONE SPEAK LO CONTIENE GIà
dog2.speak();


// --- EXTENDS

class AlbinoDog extends Dog {
    constructor(razza, peso, età) {
        super(razza, peso);  // super: richiama il costruttore della superclasse Dog per inizializzare razza e peso
        this.età = età; // aggiungo una nuova proprietà specifica di albinoDog
    }

    speak() { //creiamo la funzione speak per non dover riscrivere il codice da stampare. 
    // override: riscrive il metodo speak() della superclasse (se presente) con un comportamento specifico
        console.log("Descrizione paziente: " + this.razza + ", " + this.peso + " kg" + ", " + this.età + " anni.");
    }
}

let dogA = new AlbinoDog("BullMastiff", 54, 8);
console.log(dogA)

dogA.speak();

//senza la funzione speak possiamo stampare in questo modo
console.log("Descrizione paziente: " + dogA.razza + ", " + dogA.peso + " kg" + ", " + dogA.età + " anni.");


