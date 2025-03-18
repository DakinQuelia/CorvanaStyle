/**
*   Style       : Corvana Style
*   --------------------------- 
*   Fichier     : javascripts/components/animations.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
class Animations
{
    /**
    *   Cette méthode est appelée lorsque le composant est monté. 
    * 
    *   @return {void}
    **/
    /*connectedCallback() 
    {

    }*/

    /**
    *   Cette méthode permet d'animer un titre avec un effet d'apparition au mot par mot.
    * 
    *   @param {string} selector                                                # Sélecteur
    * 
    *   @return {void}
    **/
    static animateTitle(selector)
    {
        const title = document.querySelector(selector);

        if (title === null)
        {
            console.error(`Impossible de trouver l'élément : ${selector} !`);

            return;
        }

        const spans = this.prototype.spanify(title);

        spans.forEach((span, index) =>
        {
            span.children[0].style.animationDelay = `${index * .1}s`;
        });
    }

    /**
    *   Cette méthode permet d'entourer un mot de deux balises <span>
    * 
    *   @param {string} word                                                    # Mot
    * 
    *   @return {HTMLElement}
    **/
    wrapWord(word)
    {
        const span = document.createElement('span');
        const span2 = document.createElement('span');

        span2.innerHTML = word;
        span.appendChild(span2);

        return span;
    }

    /**
    *   Cette méthode permet d'entourer un élément de balises span de façon récursive.  
    * 
    *   @param {Node} element                                                   # Elément
    * 
    *   @return {HTMLSpanElement[]}
    **/
    spanify(element)
    {
        const children = Array.from(element.childNodes);
        let spans = [];
        let elements = [];

        children.forEach((child) => 
        {
            if (child.nodeType === Node.TEXT_NODE)
            {
                const words = child.textContent.split(' ');
                let wordSpans = words.map((word) => this.wrapWord(word));

                spans = spans.concat(wordSpans);
                wordSpans = this.injectElementBetweenItems(wordSpans, document.createTextNode(' '));

                elements = elements.concat(wordSpans);
            }
            else if (child.tagName === 'BR')
            {
                elements.push(child);
            }
            else
            {
                spans = spans.concat(this.spanify(child));

                elements.push(child);
            }
        });

        element.innerHTML = '';

        elements.forEach((el) =>
        {
            element.appendChild(el);
        });

        return spans;
    }

    /**
    *   Cette méthode permet d'injecter l'élément entre plusieurs objets.
    * 
    *   @param {Node[]} arr                                                     # Tableau des éléments HTML
    *   @param {Node} element                                                   # Elément à injecter entre chaque élément du tableau
    * 
    *   @return {Node[]}
    **/
    injectElementBetweenItems(arr, element)
    {
        return arr.map((item, index) =>
        {
            if (index === arr.length - 1)
            {
                return [ item ];
            }

            return [ item, element.cloneNode() ];
        }).reduce((acc, pair) =>
        {
            acc = acc.concat(pair);

            return acc;
        }, []);
    }
}

export default new Animations();