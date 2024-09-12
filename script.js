
//Väntar med att executa ett event/funktion innan DOM:en är inladdad.
//Om nyckel "inloggad" finns i lokalminnet så används style.display för att hoppa över startsida till inloggad sida.
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('inloggad') === 'true') {
        document.getElementById("inloggheader").style.display = "none";
        lyckadinloggning.style.display = "block";
//Om nyckel inte finns visar man istället första sidan
    } else {
        document.getElementById("inloggheader").style.display = "block";
        lyckadinloggning.style.display = "none";
    }
});

//Kall på olika "sidor"
const inloggningsformular = document.getElementById("inloggningsformular");
const inloggfel = document.getElementById("inloggfel");
const lyckadinloggning = document.getElementById("lyckadinloggning");

// Sätter värde på logout knappen så jag kan styra när den ska visas
const loggautknapp = document.getElementById("loggautknapp");

// Inloggningsuppgifter (hårdkodade)
const anvandarnamn = "test";
const losenord = "1234";

//Sätter värde på input för att kunna jämföra i en funktion mot inloggningsuppgifter
const losenordinmatning = document.getElementById("losenord");
const anvandarnamninmatning = document.getElementById("anvandarnamn");

//Funktion som utför kontroller om felmeddelande för användarnamn eller lösenord ska visas. Samt logga in om de är rätt.
//!== jämför och säger till när värderna INTE är samma. Detta utför då respektive felmeddelande
//style.display manipulerar css kod till att ta bort/visa olika delar av sidan
inloggningsformular.addEventListener("submit", function(event){
    event.preventDefault();

    //Hämtar in textfälten
    const skrivetanvadarnamn = anvandarnamninmatning.value;
    const skrivetlosenord = losenordinmatning.value;

    if (anvandarnamninmatning.value !== anvandarnamn) {
        inloggfel.innerHTML = "Användaren finns inte. <br> Testa igen!";
        inloggfel.style.display = "block";
    } else if (losenordinmatning.value !== losenord) {
        inloggfel.innerHTML = "Lösenordet är fel. <br> Testa igen!";
        inloggfel.style.display = "block";
    } else {
        document.getElementById("inloggheader").style.display = "none";
        lyckadinloggning.style.display = "block";
        inloggfel.style.display = "none";
        localStorage.setItem('inloggad', 'true'); //LOCALSTORAGE INLOGGNING - SPARAD NYCKEL
    }
});

loggautknapp.addEventListener("click", function(){
    document.getElementById("inloggheader").style.display ="block";
    document.getElementById("lyckadinloggning").style.display ="none";

    //Säkerställer att fälten töms.
    anvandarnamninmatning.value = "";
    losenordinmatning.value = "";
    localStorage.removeItem('inloggad'); //RENSAR NYCKEL VID UTLOGGNING - TAR BORT NYCKEL
});