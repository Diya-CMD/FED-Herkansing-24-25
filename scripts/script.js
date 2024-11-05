
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


// PROFIEL menu
const openSearchButton = document.querySelector("header button:nth-of-type(4)");
const searchMenu = document.querySelector("header > ul ");
// const sluitSearchButton = document.querySelector("header button:nth-of-type(4)");
openSearchButton.onclick = toonSearchMenu;
sluitSearchButton.onclick = sluitSearchMenu;

//AAAAAAAAAAAAAAAAH JACVA SHCIR als open en klikt dan sluit if else je


function toonSearchMenu() {
  searchMenu.classList.add("inBeeld");
  // document.documentElement.classList.add("inBeeld");
}

function sluitSearchMenu() {
  searchMenu.classList.remove("inBeeld");
  // document.documentElement.classList.remove("inBeeld");
}




