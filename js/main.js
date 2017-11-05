var html = document.querySelector("html");
var modalWrap = document.querySelector(".modal-wrap");
var navMenu = document.querySelector("header nav");
var navMenuLinks = document.querySelectorAll("header nav a");
var menuBars = document.querySelector("header .bars-icon");
var menuX = document.querySelector("header .x-icon");


//navMenuLinks.onclick = closeNavMenu;
for (var i = 0; i < navMenuLinks.length; i++) {
    navMenuLinks[i].onclick = closeNavMenu;
};
menuBars.onclick = openNavMenu;
menuX.onclick = closeNavMenu;
modalWrap.onclick = closeNavMenu;

function openNavMenu() {
    html.classList.add("no-scroll");
    modalWrap.classList.add("modal");
    navMenu.classList.add("visible");
    menuBars.classList.add("hidden");
    menuX.classList.add("visible");
    
    navMenu.classList.remove("hidden");
    menuBars.classList.remove("visible");
    menuX.classList.remove("hidden");
}

function closeNavMenu() {
    navMenu.classList.add("hidden");
    menuX.classList.add("hidden");
    menuBars.classList.add("visible");
    
    html.classList.remove("no-scroll");
    modalWrap.classList.remove("modal");
    navMenu.classList.remove("visible");
    menuX.classList.remove("visible");
    menuBars.classList.remove("hidden");
}
