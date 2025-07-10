function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menu = document.createElement('h1');
    menu.textContent = "Menu:";
    menu.classList.add('menu');

    //rice container description and price
    const riceContainer = document.createElement('div');
    riceContainer.classList.add('rice-container');

    const riceTitle = document.createElement('h2');
    riceTitle.textContent = "Rice:";
    riceTitle.classList.add('rice-title');
    
    const rice = document.createElement('p');
    rice.textContent = "Just a plate with Rice, beacuse of that it's so cheap.";
    rice.classList.add('rice');

    const ricePrice = document.createElement('p');
    ricePrice.textContent = "$0.20";
    ricePrice.classList.add('rice-price');

    //rice and beans container description and price
    const riceBeansContainer = document.createElement('div');
    riceBeansContainer.classList.add('rice-beans-container');

    const riceBeansTitle = document.createElement('h2');
    riceBeansTitle.textContent = "Rice and Beans:";
    riceBeansTitle.classList.add('rice-beans-title');

    const riceBeans = document.createElement('p');
    riceBeans.textContent = "A plate with Rice and Beans, only this. Sorry.";
    riceBeans.classList.add('rice-beans');

    const riceBeansPrice = document.createElement('p');
    riceBeansPrice.textContent = "$0.40";
    riceBeansPrice.classList.add('rice-beans-price');

    //pasta container description and price
    const pastaContainer = document.createElement('div');
    pastaContainer.classList.add('pasta-container');

    const pastaTitle = document.createElement('h2');
    pastaTitle.textContent = "Pasta:";
    pastaTitle.classList.add('pasta-title');

    const pasta = document.createElement('p');
    pasta.textContent = "Our best plate, but not of the taste, just because come with more quantity. Never someone bough it.";
    pasta.classList.add('pasta');

    const pastaPrice = document.createElement('p');
    pastaPrice.textContent = "$1.500,69";
    pastaPrice.classList.add('pasta-price');
    
    //put the itens inside each div
    riceContainer.appendChild(riceTitle);
    riceContainer.appendChild(rice);
    riceContainer.appendChild(ricePrice);

    riceBeansContainer.appendChild(riceBeansTitle);
    riceBeansContainer.appendChild(riceBeans);
    riceBeansContainer.appendChild(riceBeansPrice);

    pastaContainer.appendChild(pastaTitle);
    pastaContainer.appendChild(pasta);
    pastaContainer.appendChild(pastaPrice);

    //now add all the containers of the menu inside the menucontainer
    menuContainer.appendChild(riceContainer);
    menuContainer.appendChild(riceBeansContainer);
    menuContainer.appendChild(pastaContainer);

    return menuContainer;
}
export {createMenu};