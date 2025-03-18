/**
*   Style       : Corvana Style
*   --------------------------- 
*   Fichier     : javascripts/components/modal.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
/**
*   Exemple :
*   ---------
*
*   ```
*   <corvana-modal header="true" title="Mon titre" footer="true">
*	    Mon contenu.
*    </corvana-modal>
*   ```
**/
class Modal extends HTMLElement
{
    /**
    *   Initialisation de la classe. 
    *   
    *   @return {void}
    **/
    constructor() 
    {
        super();

    }

    /**
    *   Cette méthode est appelée lorsque le composant est monté. 
    * 
    *   @return {void}
    **/
    connectedCallback() 
    {
        const shadow = this.attachShadow({ mode: "open" });
        const hasHeader = this.getAttribute("header");
        const hasFooter = this.getAttribute("footer");

        let headerTitle = (hasHeader === "true") ? this.getAttribute("title") : "";
        
        
    }

    /**
    *   Cette méthode est appelée lorsque le composant est démonté. 
    * 
    *   @return {void}
    **/
    disconnectedCallback() 
    {

    }
}

export default Modal;