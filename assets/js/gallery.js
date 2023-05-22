
/*delay på data hentning i ms  skal kun bruges hvis du laver Dataobject opgaven */
const myLoadTime = 2000;

/* kicks off app when the DOM is loaded */
//window.addEventListener("load", initApp);



// globale variabler
// let myData = null; //til data objekt opgaven
let myData = []; // til array opgaven, byg dit array af billed urlér her.

//Tanja:
const myImg = ['./assets/img/Brachypelma_smithi.jpg', './assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/standard_tiger.jpg'];
const myApp = document.getElementById("app");

document.addEventListener('DOMContentLoaded', generateGrid);

let newArticle = document.createElement("article");
let newImg = document.createElement("img");




// her starter din app
function generateGrid() {

}

function buildCard(myUrl) {

}


// Hent url der klikkes på 
// Hent Dom element med id=”app”.

function clickSmall(myEvent) {

}

function buildBig(myUrl) {

}
function clearApp() {

}