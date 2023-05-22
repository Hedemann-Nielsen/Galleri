
/*delay på data hentning i ms  skal kun bruges hvis du laver Dataobject opgaven */
const myLoadTime = 2000;

/* kicks off app when the DOM is loaded */
//window.addEventListener("load", initApp);



// globale variabler
// let myData = null; //til data objekt opgaven
let myData = []; // til array opgaven, byg dit array af billed urlér her.

//Tanja:
const myImg = ['assets/img/Brachypelma_smithi.jpg', 'assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/standard_tiger.jpg'];
const myApp = document.getElementById("app");

document.addEventListener('DOMContentLoaded', generateGrid);


// her starter din app
function generateGrid() {
    clearApp();

    myImg.map((imageUrl) => {
        buildCard(imageUrl);
    });
}

function buildCard(myUrl) {
    //lav nye tags
    let newArticle = document.createElement('article');
    newArticle.classList.add("galleryCard");

    let newImg = document.createElement('img');
    newImg.classList.add("detailView")
    newImg.src = myUrl;


    //lyt efter click på billede
    newImg.addEventListener('click', clickSmall);

    //placer article inden i app tag og img i article tag
    newArticle.appendChild(newImg);
    myApp.appendChild(newArticle);
}


// Hent url der klikkes på 
// Hent Dom element med id=”app”.
function clickSmall(myEvent) {
    let myUrl = myEvent.target.src;
    buildBig(myUrl);
}

function buildBig(myUrl) {
    clearApp();
    //lav nye tags
    let newArticle = document.createElement('article');
    let newImg = document.createElement('img');
    newImg.src = myUrl;

    //lyt efter click på billede
    newImg.addEventListener('click', generateGrid);

    //placer article inden i app tag og img i article tag
    newArticle.appendChild(newImg);
    myApp.appendChild(newArticle);
}
function clearApp() {
    myApp.innerHTML = "";
}