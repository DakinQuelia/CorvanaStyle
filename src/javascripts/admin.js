/**
*   Style       : Corvana Style
*   --------------------------- 
*   Fichier     : javascripts/app.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
let body = document.querySelector("body");
let navigation = document.querySelector(".admin-page .navigation");
let list = navigation.querySelectorAll(".admin-page .navigation li");
let toggle = document.querySelector(".toggle");
let main = document.querySelector(".page-content");
let container = document.querySelector(".container");
let footer = document.querySelector(".admin-page footer");
let switcher_light = document.querySelector("[data-theme=\"light\"]");
let switcher_dark = document.querySelector("[data-theme=\"dark\"]");

toggle.addEventListener("click", () =>
{
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    container.classList.toggle("active");
    footer.classList.toggle("active");
});

switcher_light.addEventListener("click", () => 
{
    if (body.classList.contains("dark"))
    {
        body.classList.remove("dark");
        body.classList.add("light");
    }
    else
    {
        body.classList.add("light");
    }
});

switcher_dark.addEventListener("click", () => 
{
    if (body.classList.contains("light"))
    {
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else
    {
        body.classList.add("dark");
    }
});

list.forEach(item => item.addEventListener("mouseover", activeLink));

/**
*   Cette fonction permet de récupérer le lien actif de navigation.   
*
*   @return {void}
**/
function activeLink()
{
    list.forEach(item => 
    {
        item.classList.remove("hovered");
    });

    this.classList.add("hovered");
}