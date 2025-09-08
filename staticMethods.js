// --- INSTANCE AND STATIC METHODS
/* 
STATIC METHOD: I metodi e gli attributi(o proprietà, o campi) STATICI si riferiscono alll'intera classe, saranno uguali in tutti gli oggetto della classe. 
INSTANCE METHOD: I metodi o attributi di ISTANZA (instance, o oggetto) si riferiscono unicamente all'oggetto in questione.
*/ 

class Cane {
    constructor(nome) {
        this.nome = nome;
    }

    // Instance method: si chiama sull'oggetto creato con "new"
    abbaia() {
        console.log(`${this.nome} dice: Bau!`);
    }

    // Static method
    static confronta(cane1, cane2) {
        return cane1.nome === cane2.nome;
    }
}

const fido = new Cane("Fido");
const pluto = new Cane("Pluto");

fido.abbaia(); // OK → "Fido dice: Bau!"

// Static method: si chiama sulla classe
console.log(Cane.confronta(fido, pluto)); // false
// fa il confronto secondo la condizione 
// del return del metodo statico e restituisce quindi il booleano


// --- ESEMPIO PRATICO IN CONTESTO REALE:

// Immaginiamo un’app/sito e-commerce: hai una classe Prodotto che rappresenta i singoli articoli,
// ma vuoi anche una funzione che calcoli l’IVA indipendentemente dal prodotto creato;
// quindi non devi applicarla su un oggetto in particolare, ma su tutti gli oggetti.

class Prodotto {
    constructor(nome, prezzo) {
        this.nome = nome;
        this.prezzo = prezzo;
    }

    // Instance method
    prezzoFinale() {
        return this.prezzo + Prodotto.calcolaIVA(this.prezzo);
    }

    // Static method → funzione “di utilità”
    static calcolaIVA(importo) {
        return importo * 0.22; // 22% di IVA
    }
}

const scarpe = new Prodotto("Scarpe", 50);

console.log("Prezzo delle scarpe incluso di Iva: ", scarpe.prezzoFinale()); // 61
// abbiamo utilizzato l'instance method per calcolare il "prezzoFinale" di "scarpe"
console.log("Iva sui prodotti a 100 euro: ", prodotto.calcolaIVA(100)); // 22 (puoi usarlo anche senza oggetto)

// Qui calcolaIVA è "STATICO" perché non dipende da un prodotto in particolare, 
// ma è una regola generale applicabile a tutti. 
// Applichiamo la funzione "calcolaIVA" alla classe "prodotto" inserendo noi il valore di partenza (100)


// immaginiamo di avere un catalogo e calcolare i prodotti di tutti i prezzi
const catalogo = [
    new Prodotto("calze", 5),
    new Prodotto("maglie", 30),
    new Prodotto("jeans", 40),
];

// calcoliamo l'iva di tutti i prodotti 
const ivaPerProdotto = catalogo.map(item => prodotto.calcolaIVA(item.prezzo));
// con map che andrà ad iterare su tutti gli oggetti di "catalogo" 
// prendiamo ogni prezzo con item.prezzo e ne calcoliamo l'iva con la funzione "calcolaIVA"

console.log("Calcolo dell'iva di tutti i prodotti presenti nel catalogo: ", ivaPerProdotto);

// calcoliamo i prezzi finali di tutti i prodotti
const prezzoFinalePerProdotto = catalogo.map(item => item.prezzoFinale());
console.log("Prezzo finale di ogni prodotto del catagolo inclusi di Iva:", prezzoFinalePerProdotto);

/* Risultato finale:
ivaPerProdotto diventa un array con l’IVA di ciascun prodotto:
[1.1, 6.6, 8.8];
prezzoFinalePerProdotto diventa un array con il prezzo finale incluso di iva di ogni prodotto:
[6.1, 36.6, 48.8]
*/