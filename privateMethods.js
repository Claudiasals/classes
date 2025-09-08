/* I "campi" sono gli attributi degli oggetti.

In JavaScript, esistono due tipi di campi per un oggetto: proprietà e metodi, e questi possono essere pubblici o privati:

1) Pubblici: accessibili ovunque. Questi ne definiscono l’interfaccia esterna. 
Accessibili dagli utenti. Utilizzabili dagli utenti.
2) Privati: accessibili solamente dall’interno della classe. Questi ne definiscono l’interfaccia interna.
Sono quei metodi che servono alla logica interna e che l’utente non deve poter chiamare direttamente. 
I metodi e gli attributi privati sono incapsulati all'interno della classe per non essere reperibili direttamente dall'utente.


Creare due livelli di metodi, uno privato e uno pubblico, ci permette di proteggere alcuni dati 
a cui non vogliamo dare l'accesso diretto.
I metodi e gli attributi che devono restare privati li contrassegneremo da un cancelletto (#).

ESEMPIO:
*/class Persona {
    // Definizione di una classe chiamata "Persona". 
    // Dichiarazione degli attributi: dichiararli già fuori dal constructor: serve per chiarezza e 
    // per avere valori di default per gli oggetti che andremo a creare.
    nome = "" // Proprietà pubblica "nome", inizialmente stringa vuota
    cognome = "" // Proprietà pubblica "cognome", inizialmente stringa vuota
    età = 0 // Proprietà pubblica "età", inizialmente 0
    #nomeCompleto // Proprietà privata "#nomeCompleto" (accessibile solo dentro la classe)

    constructor(nome, cognome, età) {
        // Metodo speciale "constructor" che viene chiamato quando si crea un nuovo oggetto della classe
        this.nome = nome
        // Assegna alla proprietà "nome" il valore passato come argomento
        this.cognome = cognome
        // Assegna alla proprietà "cognome" il valore passato come argomento
        this.età = età
        // Assegna alla proprietà "età" il valore passato come argomento
        this.#nomeCompleto = nome + " " + cognome
        // Crea il nome completo e lo salva nella proprietà privata "#nomeCompleto"
    }

    #aumentaEtà() {
        // Metodo privato "#aumentaEtà", non accessibile dall'esterno della classe
        this.età = this.età + 1;
        // Incrementa di 1 la proprietà "età"
    }

    festeggiaCompleanno() {
        // Metodo pubblico "festeggiaCompleanno"
        this.#aumentaEtà();
        // Richiama il metodo privato "#aumentaEtà" per aumentare l’età
    }

    nomeCompletoMetodo() {
        this.#nomeCompleto
    }
}

let claudia = new Persona("Claudia", "Salsini", 34);

claudia.festeggiaCompleanno(); 



/* Il metodo "festeggiaCompleanno" che si trova all'interno della classe 
può chiamare il metodo "#aumentaEtà()" e verrà eseguito aumentando di 1 il il valore dell’attributo "età".

claudia.#nomeCompleto
claudia.#aumentaEtà()
--> Questo codice non funzionerà perché non è possibile accedere ai metodi e agli attributi privati 
dall'esterno della classe.
Ma posso accedervi se all'esterno della classe chiamo un metodo pubblico 
che al suo interno chiama il metodo privato e che si trova all'interno della classe.

Il metodo privato non è accessibile da fuori, ma può essere usato dai metodi pubblici.
Questo si chiama INCASPSULAMENTO (concetto base della programmazione a oggetti).

Questo è l’incapsulamento:
- Nascondi i dettagli interni (metodi e proprietà privati)
- Mostri solo ciò che serve all’esterno (metodi pubblici)

*/

