var navMenu = document.querySelector("header nav");
var navMenuLinks = document.querySelectorAll("header nav a")
var menuBars = document.querySelector("header .bars-icon");
var menuX = document.querySelector("header .x-icon");


//navMenuLinks.onclick = closeNavMenu;
for (var i = 0; i < navMenuLinks.length; i++) {
    navMenuLinks[i].onclick = closeNavMenu;
};
menuBars.onclick = openNavMenu;
menuX.onclick = closeNavMenu;

function openNavMenu() {
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
    
    navMenu.classList.remove("visible");
    menuX.classList.remove("visible");
    menuBars.classList.remove("hidden");
}
