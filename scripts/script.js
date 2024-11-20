// //MUIS ICOONTJE-Guilietta
document.addEventListener('click', (event) => {
  //Create a new image element for the trail
    const trail = document.createElement('img');
      trail.src = 'images/heart-shine.svg';
      trail.classList.add('cursor-trail');

  //Set the trail's position to the cursor's position
      trail.style.left = `${event.pageX - 15}px`;
      trail.style.top = `${event.pageY - 15}px`;
      
  //Append the trail to the body
      document.body.appendChild(trail);

      trail.addEventListener("animationend", function(){
        trail.remove();
      })

})


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

// //profiel audio. ChatGPT - Notificatie rondje met JS. (z.d.). ChatGPT. https://chatgpt.com/share/673dc74b-3c54-8006-9f73-ee5c8e0c0042
const audio = document.querySelector("audio");
const audioButton = document.querySelector("main section:nth-of-type(1) ul li:nth-of-type(10) button")
audioButton.onclick = audioClick;

function audioClick(){
  const svgIcon = audioButton.querySelector("svg");


const spinner = document.createElement("div");
  spinner.classList.add("loading-spinner");

svgIcon.style.display = "none";
  audioButton.appendChild(spinner);

setTimeout(() => {
  spinner.remove();
    svgIcon.style.display = "inline-block";

    audio.play();
  }, 1000);
}

//profiel radiobutton




