
// stap 1: zoek de menu-button op en sla die op in een variabele. De selectie is hetzelfde als in CSS en Java. > is voor een direct kind.
const menuOpenButton= document.querySelector("header section > button"); 
const deNav= document.querySelector("header nav"); 

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuOpenButton.onclick =  burgerMenu; 

// stap 3: voeg in de functie een class toe aan de nav. "alleen open" is add.
function burgerMenu() {
  deNav.classList.add("toonMenu");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
const menuSluitButton= document.querySelector("nav button"); 

// stap 2 - laat die button luisteren naar kliks
menuSluitButton.onclick = sluitMenu; 

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu(){
   deNav.classList.remove("toonMenu");
}


// PROFIEL menu(laura code, hulp van Johnathan)
const searchMenu = document.querySelector("header > ul ");
const openSearchButton = document.querySelector("header button:nth-of-type(4)");
openSearchButton.onclick = toggleSearchMenu;

function toggleSearchMenu() {
  if (searchMenu.classList.contains("inBeeld")) {
    searchMenu.classList.remove("inBeeld");
  }
  else {
    searchMenu.classList.add("inBeeld");
  }
}

//SEARCH dingetje(laura code, hulp van Johnathan)
const zoekFunctie = document.querySelector("header > form");
const zoekFunctieOpen = document.querySelector("header button:nth-of-type(2)");
const zoekFunctieSluit = document.querySelector("header > form button");

zoekFunctieOpen.onclick = openMenu;
zoekFunctieSluit.onclick = closeMenu;

function openMenu(){
  zoekFunctie.classList.add("startSearch");
}

function closeMenu(){
  zoekFunctie.classList.remove("startSearch");

}

