/**
*   Style       : Corvana Style
*   --------------------------- 
*   Fichier     : javascripts/app.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
import Animations from './components/animations.js';
import Tabs from './components/tabs.js';
import GeneratorRadius from './components/generators/radius.js';

/* Initialisation des scripts */
const body = document.querySelector("body");
const buttonLigth = document.querySelector('.switch-theme button[data-theme="light"]');
const buttonDark = document.querySelector('.switch-theme button[data-theme="dark"]');

buttonLigth.addEventListener('click', () => 
{
    if (body.classList.contains("dark"))
    {
        body.classList.remove("dark");
    }
        
    body.classList.add('light');
});

buttonDark.addEventListener('click', () => 
{
    if (body.classList.contains("light"))
    {
        body.classList.remove("light");
    }

    body.classList.add('dark');
});

/* Elements HTML */
customElements.define("corvana-tabs", Tabs);