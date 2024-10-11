const navHeaderUl = document.querySelector("#header-nav>ul"); // le chevron me permet d'aller chercher un enfant / je peux aussi mettre un espace a la place du chevron
const menuPrincipale = ["Item1", "Item2", "Item3", "Item4", "Item5"];
const sousMenu1 = ["Sous item 1", "Sous item 2", "Sous item 3"];

let i = 0;
while (i < menuPrincipale.length) {
    /* navHeaderUl.innerHTML += "<li id='item"+i+"'>" + menuPrincipale[i] + "</li>"; */ // c'est ilisible donc on va faire comme en dessous
    navHeaderUl.innerHTML += `<li id="item${i}">${menuPrincipale[i]}</li>`; //le dollard declare une variable dans une string !! cette ligne crée des item que je peux voir dans mon html sur l'inspecteur de mon site web
    i++;
}

const action = document.querySelector("#item0");

action.addEventListener("click", function (ev) {
    console.log("BONJOUR!!!");
})
