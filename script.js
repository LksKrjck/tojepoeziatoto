document.addEventListener("DOMContentLoaded", () => {

const odkazy = document.querySelectorAll(".nav-link");
const basne = document.querySelectorAll(".basen");

// schovanie všetkých básničiek

odkazy.forEach(odkaz => {
    odkaz.addEventListener("click", (event) => {
        event.preventDefault();

        const cielId = odkaz.getAttribute("href").substring(1);
        const ciel = document.getElementById(cielId);
        
        basne.forEach(basen => basen.classList.add("schovate"));

        if (ciel) {
            ciel.classList.remove("schovate");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
});

// zobrazenie náhodnej básničky na novej stránke

let randomPoem = Math.floor(Math.random() * basne.length);
if (basne.length > 0) {
basne[randomPoem].classList.remove("schovate");
}


// zobrazenie menu 

const menuButton = document.querySelector("#menu");
const navBar = document.querySelector("nav");

if (menuButton) {
menuButton.addEventListener("click", () => {
    navBar.classList.toggle("active");
})}

// nočný režím

const nightModeButton = document.querySelector("#night");
const wholeSite = document.querySelector("html");

    nightModeButton.addEventListener("click", () => {
wholeSite.classList.toggle("night")

    })


// prehrávanie hudobných ukážok

let currentAudio = null;

const playButtons = document.querySelectorAll(".playback");

playButtons.forEach(button => {button.addEventListener("click", function() {

    let preview = this.dataset.audio;

        if (currentAudio) {
          if (currentAudio.src.includes(preview)) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
            return;
          } 
          currentAudio.pause();
          currentAudio.currentTime = 0;}

          currentAudio = new Audio (preview);
          currentAudio.play();
})})})