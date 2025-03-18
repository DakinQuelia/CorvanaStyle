/**
*   Style       : Corvana Style
*   --------------------------- 
*   Fichier     : javascripts/components/tabs.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
class Tabs extends HTMLElement
{
    /**
    *   Cette méthode est appelée lorsque le composant est monté. 
    * 
    *   @return {void}
    **/
    connectedCallback() 
    {
        this.setAttribute('role', 'tablist');

        const tabs = Array.from(this.children);
        const hash = window.location.hash.replace('#', '');
        let currentTab = tabs[0];

        tabs.forEach((tab, i) =>
        {
            const tabID = tab.getAttribute('href').replace('#', '');
            const tabpanel = document.querySelector(`#${tabID}`);

            if (tab.getAttribute('aria-selected') === "true" && hash === "")
            {
                currentTab = tab;
            }

            if (tabID === hash)
            {
                currentTab = tab;
            }

            tab.setAttribute('role', 'tab');
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
            tab.setAttribute('aria-controls', tabID);
            tab.setAttribute('id', `tab-${tabID}`)

            tabpanel.setAttribute('role', 'tabpanel');
            tabpanel.setAttribute('aria-labelledby', `tab-${tabID}`);
            tabpanel.setAttribute('hidden', 'hidden');
            tabpanel.setAttribute('tabindex', '0');

            tab.addEventListener('keyup', (e) =>
            {
                let index = null;

                if (e.key === "ArrowRight")
                {
                    index = (i === tabs.length - 1) ? 0 : i + 1;
                }
                else if (e.key === "ArrowLeft")
                {
                    index = (i === 0) ? tabs.length - 1 : i - 1;
                }
                else if (e.key === "Home")
                {
                    index = 0;
                }
                else if (e.key === "End")
                {
                    index = tabs.length - 1;
                }

                if (index !== null)
                {
                    this.activate(tabs[index]);
                    tabs[index].focus();
                }
            });
            tab.addEventListener('click', (e) => 
            {
                e.preventDefault();
                
                this.activate(tab);
            });
        });

        this.activate(currentTab, false);

        if (currentTab.getAttribute('aria-controls') === hash)
        {
            window.requestAnimationFrame(() =>
            {
                currentTab.scrollIntoView();
            });
        }
    }

    /**
    *   Cette méthode permet d'activer un onglet.
    * 
    *   @param {HTMLElement} tab                                                # Onglet à activer
    *   @param {Boolean} changehash                                             # Changer le hash
    * 
    *   @return {void}
    **/
    activate(tab, changehash = true)
    {
        const currentTab = this.querySelector('[aria-selected="true"]');

        if (currentTab !== null)
        {
            const selected = currentTab.getAttribute('aria-controls');
            const tabpanel = document.querySelector(`#${selected}`);
        
            if (currentTab.classList.contains('active'))
            {
                currentTab.classList.remove('active');
            }
    
            currentTab.setAttribute('aria-selected', 'false');
            currentTab.setAttribute('tabindex', '-1');

            tabpanel.setAttribute('hidden', 'hidden');
        }

        const tabID = tab.getAttribute('aria-controls');
        const tabpanel = document.querySelector(`#${tabID}`);

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');

        const parentTabs = tabpanel.parentElement.firstElementChild.parentNode;
        const firstTabID = tabpanel.parentElement.firstElementChild.id;

        if (tabpanel.id === firstTabID)
        {
            parentTabs.classList.add('first-tab');

            /*
            parentTabs.addEventListener('mouseover', () =>
            {
                parentTabs.classList.add('first-tab');
            });

            parentTabs.addEventListener('mouseout', () =>
            {
                parentTabs.classList.remove('first-tab');
            });
            */
        }
        else
        {
            parentTabs.classList.remove('first-tab');
        } 

        tabpanel.removeAttribute('hidden');
        
        if (changehash)
        {
            window.history.replaceState({}, '', `#${tabID}`);
        }
    }
}

export default Tabs;