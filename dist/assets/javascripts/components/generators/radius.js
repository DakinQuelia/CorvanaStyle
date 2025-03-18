/**
*   Style       : Corvana Style
*   --------------------------- 
*   Fichier     : javascripts/components/generators/radius.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
class GeneratorRadius
{
    /**
    *   Cette méthode est appelée lorsque le composant est monté. 
    * 
    *   @return {void}
    **/
    constructor() 
    {
        /** @type {HTMLInputElement} **/
        this.outputCode = document.querySelector('#css-code') ?? null;
        /** @type {HTMLButtonElement} **/
        this.copyButton = document.querySelector('.generator-result #copy') ?? null;
        /** @type {HTMLInputElement[]} **/
        this.sliders = document.querySelectorAll('.generator-sliders input[type="range"]') ?? null;
        /** @type {HTMLInputElement[]} **/
        this.inputsNumber = document.querySelectorAll('.dimensions input[type="number"]') ?? null;

        if (this.outputCode === null || this.copyButton === null || this.sliders === null || this.inputsNumber === null)
        {
            return;
        }

        this.sliders.forEach((slider, index) => 
        {
            slider.addEventListener('input', () => 
            {
                this.createBlob();
            });
        });

        this.inputsNumber.forEach((input) =>
        {
            input.addEventListener('change', () =>
            {
                this.createBlob();
            });
        });

        this.copyButton?.addEventListener('click', () =>
        {
            this.outputCode.select();
    
            document.execCommand('copy');

            alert('Code copié !');
        });

        this.createBlob();
    }

    /**
    *   Cette méthode permet de créer le blob du code CSS.
    * 
    *   @return {void}
    **/
    createBlob()
    {
        let radiusOne = this.sliders[0].value;
        let radiusTwo = this.sliders[1].value;
        let radiusThree = this.sliders[2].value;
        let radiusFour = this.sliders[3].value;
        let blobHeight = this.inputsNumber[0].value;
        let blobWidth = this.inputsNumber[1].value;

        let blob = document.querySelector('#blob');
        let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

        blob.style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px;`;

        this.outputCode.value = `border-radius: ${borderRadius}`;
    }
}

export default new GeneratorRadius();