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

class albinoDog extends Dog {
    constructor(razza, peso, età) {
        super(razza, peso); // Chiamo il costruttore della classe Dog con razza e peso
        this.età = età; // aggiungo una nuova proprietà specifica di albinoDog
    }

    speak() { //creiamo la funzione speak per non dover riscrivere il codice da stampare
        console.log("Descrizione paziente: " + this.razza + ", " + this.peso + " kg" + ", " + this.età + " anni.");
    }
}

let dogA = new albinoDog("BullMastiff", 54, 8);
console.log(dogA)

dogA.speak();

//senza la funzione speak possiamo stampare in questo modo
console.log("Descrizione paziente: " + dogA.razza + ", " + dogA.peso + " kg" + ", " + dogA.età + " anni.");


