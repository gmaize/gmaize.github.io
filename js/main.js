var navMenuElem = document.querySelector("header nav");
var menuBarsElem = document.querySelector("header .bars-icon");
var menuXElem = document.querySelector("header .x-icon");
menuBarsElem.onclick = function () {
    navMenuElem.classList.add("visible");
    menuBarsElem.classList.add("hidden");
    menuXElem.classList.add("visible");
    
    navMenuElem.classList.remove("hidden");
    menuBarsElem.classList.remove("visible");
    menuXElem.classList.remove("hidden");
};

menuXElem.onclick = function () {
    navMenuElem.classList.add("hidden");
    menuXElem.classList.add("hidden");
    menuBarsElem.classList.add("visible");
    
    navMenuElem.classList.remove("visible");
    menuXElem.classList.remove("visible");
    menuBarsElem.classList.remove("hidden");
};
