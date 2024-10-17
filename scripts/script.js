
// stap 1: zoek de menu-button op en sla die op in een variabele. De selectie is hetzelfde als in CSS en Java. > is voor een direct kind.
const menuOpenButton= document.querySelector("header > button"); 
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


//Section 1 carousel
let slideIndex = 0;
const slides = document.querySelector('section:nth-of-type(1) li');
const totalSlides = slides.length;

function moveSlide(direction) {
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    const carousel = document.querySelector('section:nth-of-type(1) ul');
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

// Function to auto-slide
function autoSlide() {
    moveSlide(1); // Move to the next slide
}

// Set interval for auto-sliding every 3 seconds
setInterval(autoSlide, 3000);
