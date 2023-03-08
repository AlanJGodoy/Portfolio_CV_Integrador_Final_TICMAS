/* MENU MOVIL */

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function() {
    menuButton.firstElementChild.classList.toggle("none") // intercala la clase "none" entre un elemento SVG y otro
    menuButton.lastElementChild.classList.toggle("none")
    menu.classList.toggle("is-active") // muestra u oculta la opacidad del ".menu"
});

document.addEventListener("click", function() {
    if (!event.target.matches(".menu a")) return false; // si el "click" no se origina en la lista de <a> dentro del ".menu"
    
    menuButton.firstElementChild.classList.remove("none") // muestra el primer elemento SVG
    menuButton.lastElementChild.classList.add("none") // oculta el segundo elemento SVG
    menu.classList.remove("is-active") // oculta el ".menu"
});