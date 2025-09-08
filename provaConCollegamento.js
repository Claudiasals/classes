// ESERCIZIO CHE RACCHIUDE TUTTI GLI ARGOMENTI AFFRONTATI FINO AD ORA

class Users {
    name = ""
    lastname = ""
    email = ""
    #password = ""

    constructor(name, lastname, email, password) {
        this.name = name
        this.lastname = lastname
        this.email = email
        this.#password = this.#encryptPassword(password) // salviamo la password cifrata come valore di #password
        //se dobbiamo usare un metodo (come in questo caso) scriviamo this. seguito dal nome del metodo e tra parentesi il parametro.
    }

    // Metodo pubblico per visualizzare il nome completo dell'utente
    getFullName() {
        return `${this.name} ${this.lastname}`;
        //restituisce il nome completo dell'utente
    }

    // Metodo pubblico per visualizzare una sorta di scheda utente con tutte le info
    info() {
        return `Nome: ${this.name}, Lastname: ${this.lastname}, Email: ${this.email}`;
        // restituisce le info dell'utente (non abbiamo inserito l'attributo privato 
    }

    // Metodo pubblico per verificare la correttezza della password
    checkPasswordLogin(input) {
        if (this.#encryptPassword(input) === this.#password) {
            return true; // password corretta
        } else {
            console.error("Password sbagliata!"); // messaggio di errore in console
            return false; // password sbagliata
        }
    }        //STIAMO USANDO L'ATTRIBUTO PRIVATO #PASSWORD E IL METODO PRIVATO #ENCRYPTPASSWORD 
        //DENTRO AD UN METODO PUBBLICO CHE È DENTRO LA CLASSE
        // qst metodo verifica se la password (cifrata) inserita dall'utente è corretta
        // ha come parametro "input" ovvero l'inserimento della password da parte dell'utente
        // verifica che ciò che ha inserito è identico al valore di #password e restituisce un booleano
        // e un messaggio di errore se dovesse essere sbagliata
    

    // Metodo pubblico per cambiare la password
    changePassword(oldPassword, newPassword) {
        if (this.#encryptPassword(oldPassword) === this.#password) {
            this.#password = this.#encryptPassword(newPassword); //accetta newPassword come nuovo valore di #password
            return true; // password cambiata con successo
        }
        return false; // vecchia password sbagliata
    }
    // gli stiamo dicendo: se la vecchia password inserita dall'utente 
    // è uguale alla vecchia password, allora accetta la nuova password come #password.
    // Il simbolo = assegna un nuovo valore

    // Metodo pubblico per resettare la password se l'hai dimenticata
    resetPassword(newPassword, code) { // parametri: la nuova password e il codice di verifica ricevuto
        // Simuliamo la verifica tramite codice inviato per email
        if (code === "1234") {
            // verifichiamo la correttezza del codice ricevuto e se è true procede con le istruzioni
            this.#password = this.#encryptPassword(newPassword); //accetta newPassword come nuovo valore di #password
            return true;
        }
        return false;
    }
    /* 
    2️Cosa significa "1234" in questo esempio: "1234" è solo un esempio per far funzionare 
    il codice di test. In un’app reale:
    Il sito invia un codice temporaneo via email o SMS all’utente. L’utente lo inserisce nella pagina e
    il codice inserito viene confrontato con quello generato e inviato dal sito.
    */

    // METODO PRIVATO PER CIFRARE LA PASSWORD NEL DATABASE
    #encryptPassword(password) { //non è una cifratura reale e sicura, ma simbolica per l'es.. Per cifrare usare algoritmi appositi.
        return password.split("").reverse().join("");
        // es: "ciao123" --> "321oaic"
        /* 
        split("") → trasforma una stringa in array di caratteri.
        reverse() → inverte l’ordine dell’array.
        join("") → ricompone l’array in una stringa.
        */
    }

}

const user1 = new Users("Claudia", "Salsini", "salsiniclaudia@gmail.com", "nonlaindovineraimai");

// console.log(user1.#password); --> genera un errore perché è privata

console.log(user1.getFullName());

console.log("SCHEDA UTENTE: ", user1.info());

class Admin extends Users { //extends: creaimo una nuova classe con la base della superclasse
    constructor(name, lastname, email, password, role) {
        super(name, lastname, email, password) //super richiama il costruttore della superclasse
        this.role = role; // aggiungiamo l'attributo "role" che apparterrà a qst categoria
    }

}

/* METODO PRIVATO: altre idee per metodi privati in questo contesto: 
--- COSA NON DEVE POTER FARE L'UTENTE? 

1) Non può vedere o modificare la password di altri utenti
2) Non può modificare i dati interni senza passare da metodi autorizzati
3) Non può cambiare le regole di validazione dei dati (es. decidere da solo che una password da 1 carattere va bene)

--- Idee di metodi privati:

#encryptPassword(password) --> metodo privato che cifra la password prima di salvarla. 
Cosìcché anche se venissero rubati i dati la password originale non verrebbe visualizzata ma trovrebbero un codice cifrato, 
cioè viene trasformata in un codice segreto in modo che non sia leggibile.
L'utente sceglie la password ma nel database viene salvata una versione cifrata della password.

#isValidName(name) --> metodo privato che controlla se il nome è valido (senza numeri o simboli)

#logActivity(action) --> metodo privato che registra le azioni dell’utente, usato solo internamente

#generateId() --> metodo privato che crea un ID univoco per ogni utente, che l’utente non può decidere */