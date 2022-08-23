//Array with the Name of all Menus and Drinks
let menuName = ['Onion Rings (6 Stück)', 'Chicken Nuggets (6 Stück)', 'Mozzarella Sticks (6 Stück)',
    'Chicken Burger', 'American Burger', 'Schnitzel Burger', 'Burgerino Burger', 'Vegetarischer Burger', 'Vegan Burger',
    'Süßkartoffel Pommes', 'Pommes',
    'Waffeln', 'Nougatpalatschinken', 'Topfenpalatschinken',
    'Coca Cola 0,33 l', 'Coca Cola 0,5 l', 'Sprite 0,33 l', 'Sprite 0,5 l', 'Mineral still 0,33 l', 'Mineral still 0,5 l', 'Mineral prickelnd 0,33 l', 'Mineral prickelnd 0,5 l',
    'Heineken 0.33 l', 'Gösser 0,5 l', 'Puntigamer 0,5 l']


//Array with the Description to the Appetizers and the Burgers
let menuDescription = ['Sauce nach Wahl', 'Sauce nach Wahl', 'Sauce nach Wahl',
    'mit Hühnerbrust, Barbecuesauce, Speck, Cheddar, Rucola, Gurken, Tomaten und Röstzwiebeln',
    'mit Rindfleisch, Cocktailsauce, Jalapenos und Ei', 'mit Schnitzel und Sauce nach Wahl',
    'mit Rindfleisch, Burgerino Sauce, Salat, Cheddar, Zwiebeln, Speck Gurken, Rucola',
    'mit vegetarischem Patty, Sauce nach Wahl, Cheddar, Gurken und Tomaten',
    'mit Beyond Meat Patty, Sauce nach Wahl, veganem Käse, Gurken und Tomaten',]


//Array with the Price to all Menus and Drinks
let menuPrice = [4.00, 4.50, 5.00,
    8.50, 8.50, 8.50, 9.00, 9.00, 9.00,
    3.50, 3.50,
    5.00, 5.50, 5.50,
    2.50, 3.00, 2.50, 3.00, 2.00, 2.50, 2.00, 2.50,
    3.00, 3.50, 3.50]


let menuNameAddedToBasket = []
let menuPriceAddedToBasket = []
let amountMenu = []



//With this function all Appetizers Name, Description and Price from the Arrays are displayed on the page
function loadMenuAppetizers() {
    document.getElementById('appetizers').innerHTML = '';

    for (i = 0; i <= 2; i++) {
        const whichMenu = menuName[i];
        const whichDescription = menuDescription[i];
        const whichPrice = menuPrice[i];
        const whichAmount = amountMenu[i];

        document.getElementById('appetizers').innerHTML +=
            showMenuTemplate(whichMenu, whichDescription, whichPrice, whichAmount);
    }
}


//With this function all Burgers Name, Description and Price from the Arrays are displayed on the page
function loadMenuBurgers() {
    document.getElementById('burgers').innerHTML = '';

    for (i = 3; i <= 8; i++) {
        const whichMenu = menuName[i];
        const whichDescription = menuDescription[i];
        const whichPrice = menuPrice[i];
        const whichAmount = amountMenu[i];

        document.getElementById('burgers').innerHTML +=
            showMenuTemplate(whichMenu, whichDescription, whichPrice, whichAmount);
    }
}


//With this function all Side Dishes Name and Price from the Arrays are displayed on the page
function loadMenuSideDishes() {
    document.getElementById('side-dishes').innerHTML = '';

    for (i = 9; i <= 10; i++) {
        const whichMenu = menuName[i];
        const whichPrice = menuPrice[i];
        const whichAmount = amountMenu[i];

        document.getElementById('side-dishes').innerHTML +=
            showMenuTemplateWithoutDescription(whichMenu, whichPrice, whichAmount);
    }
}


//With this function all Desserts Name and Price from the Arrays are displayed on the page
function loadMenuDesserts() {
    document.getElementById('desserts').innerHTML = '';

    for (i = 11; i <= 13; i++) {
        const whichMenu = menuName[i];
        const whichPrice = menuPrice[i];
        const whichAmount = amountMenu[i];

        document.getElementById('desserts').innerHTML +=
            showMenuTemplateWithoutDescription(whichMenu, whichPrice, whichAmount);
    }
}


//With this function all non Alcoholic Drinks Name and Price from the Arrays are displayed on the page
function loadNonAlcoholicDrinks() {
    document.getElementById('non-alcoholic-drinks').innerHTML = '';

    for (i = 14; i <= 21; i++) {
        const whichMenu = menuName[i];
        const whichPrice = menuPrice[i];
        const whichAmount = amountMenu[i];

        document.getElementById('non-alcoholic-drinks').innerHTML +=
            showMenuTemplateWithoutDescription(whichMenu, whichPrice, whichAmount);
    }
}


//With this function all Alcoholic Drinks Name and Price from the Arrays are displayed on the page
function loadAlcoholicDrinks() {
    document.getElementById('alcoholic-drinks').innerHTML = '';

    for (i = 22; i <= 24; i++) {
        const whichMenu = menuName[i];
        const whichPrice = menuPrice[i];
        const whichAmount = amountMenu[i];

        document.getElementById('alcoholic-drinks').innerHTML +=
            showMenuTemplateWithoutDescription(whichMenu, whichPrice, whichAmount);
    }
}


//This Template function is called in the load functions who have a the whichDescription
//variable above. The function shows the Container in wich the Menus and Drinks will be
//displayed on the Page
function showMenuTemplate(whichMenu, whichDescription, whichPrice, whichAmount) {
    return /*html*/`
    <div class="food">
        <div class="food-description">
            <h3>${whichMenu}</h3>
            <span>${whichDescription}</span>
            <p>${whichPrice.toFixed(2).replace('.', ',')} €</p> 
        </div> 
        <div class="plus-container">
            <img onclick="moveToBasket('${whichMenu}', ${whichPrice}, ${whichAmount})" src="img/plus-solid.svg" alt="plus-sign">
        </div>
    </div>`;
}


//This Template function is called in the load functions who have NO whichDescription
//variable above. The function shows the Container in wich the Menus and Drinks will be
//displayed on the Page
function showMenuTemplateWithoutDescription(whichMenu, whichPrice, whichAmount) {
    return /*html*/`
    <div class="food">
        <div class="food-description">
            <h3>${whichMenu}</h3>
            <p>${whichPrice.toFixed(2).replace('.', ',')} €</p> 
        </div> 
        <div class="plus-container">
            <img onclick='moveToBasket("${whichMenu}", ${whichPrice}, ${whichAmount})' src="img/plus-solid.svg" alt="plus-sign">
        </div>
    </div>`;
}


//This function load all the load-functions above and will be called in the body tag as onload
function loadMenus() {
    loadMenuAppetizers();
    loadMenuBurgers();
    loadMenuSideDishes();
    loadMenuDesserts();
    loadNonAlcoholicDrinks();
    loadAlcoholicDrinks();
}


function moveToBasket(whichMenu, whichPrice, whichAmount) {
    if (getMenuIndex(whichMenu) == -1) {
        document.getElementById('order-overview').classList.remove('d-none');
        pushMenuInArrays(whichMenu, whichPrice);
        let indexPlace = getMenuIndex(whichMenu);
        let whichAmount = amountMenu[indexPlace];
        loadMenuToBasket(whichMenu, whichPrice, whichAmount);
    }

    else {
        let indexPlace = getMenuIndex(whichMenu);
        whichAmount = amountMenu[indexPlace]++;
        loadMenuToBasket(whichMenu, whichPrice, whichAmount);
    }
}


function pushMenuInArrays(whichMenu, whichPrice) {
    menuNameAddedToBasket.push(whichMenu);
    menuPriceAddedToBasket.push(Number(whichPrice));
    amountMenu.push(1);
}


function reduceAmount(whichMenu, whichPrice, whichAmount) {
    indexPlace = getMenuIndex(whichMenu);
    whichAmount = amountMenu[indexPlace]--;
    loadMenuToBasket(whichMenu, whichPrice, whichAmount);

    if (amountMenu[indexPlace] == 0) {
        removeMenuFromArray();

        calcSubtotal();

        setEmptyArrays();
    }
}


function loadMenuToBasket(whichMenu, whichPrice, whichAmount) {
    document.getElementById('shopping-bag').classList.add('d-none');
    document.getElementById('sum-and-pay-container').classList.remove('d-none');
    document.getElementById('order-overview').innerHTML = '';

    calcSubtotal(whichMenu, whichPrice, whichAmount);
}


//This function identifys where in the array menuNameAddedToBasket the actual Menu is,
// and returns the place (index) where the menu is
function getMenuIndex(whichMenu) {
    let index = menuNameAddedToBasket.indexOf(whichMenu);
    return index;
}


//This function calculates amount * price and returns the sum
function calcPrice(amount, price) {
    let result = amount * price;
    return result;
}


function removeMenuFromArray() {
    whichMenu = menuNameAddedToBasket.splice(indexPlace, 1);
    whichPrice = menuPriceAddedToBasket.splice(indexPlace, 1);
    whichAmount = amountMenu.splice(indexPlace, 1);

    document.getElementById('order-overview').innerHTML = '';
    document.getElementById('shopping-cart-button').classList.add('d-none');
}


function calcSubtotal(whichMenu, whichPrice, whichAmount) {
    let subtotalPrice = 0;
    for (i = 0; i < menuNameAddedToBasket.length; i++) {
        whichMenu = menuNameAddedToBasket[i];
        whichPrice = menuPriceAddedToBasket[i];
        whichAmount = amountMenu[i];

        const pricePerAmount = calcPrice(whichAmount, whichPrice);
        subtotalPrice += menuPriceAddedToBasket[i] * amountMenu[i];
        subtotalEndPrice = parseFloat(subtotalPrice);

        document.getElementById('order-overview').innerHTML +=
            showMenuInShoppingBagTemplate(whichMenu, pricePerAmount, whichAmount);
        document.getElementById('subtotal').innerHTML = /*html*/ `
            <span id="subtotal">${subtotalEndPrice.toFixed(2).replace('.', ',')} €</span>`;
        changeButton(subtotalEndPrice);
    }
}




//If the menuNameAddedToBasket Array is empty, all other arrays will be reset to a empty Array
function setEmptyArrays() {
    if (menuNameAddedToBasket.length === 0) {
        menuNameAddedToBasket = [];
        menuPriceAddedToBasket = [];
        amountMenu = [];
        document.getElementById('shopping-bag').classList.remove('d-none');
        document.getElementById('sum-and-pay-container').classList.add('d-none');
        document.getElementById('order-overview').innerHTML = '';
        document.getElementById('shopping-cart-button').classList.add('d-none');
        document.getElementById('shopping-cart').classList.add('responsive-d-none');
    }
}



function changeButton(pricePerAmount) {
    printTotalSum(pricePerAmount);
    let checkBasketOpen = document.getElementById('shopping-cart');
    if (checkBasketOpen.classList.contains('responsive-d-none')) {
        document.getElementById('shopping-cart-button').classList.remove('d-none');
        document.getElementById('shopping-cart-button').innerHTML = /*html*/ `
            Warenkorb (${totalSum.toFixed(2).replace('.', ',')}) €`;
    }

    if (pricePerAmount < 13) {
        greyShoppingCartButton(pricePerAmount, totalSum);
    }

    else {
        blueShoppingCartButton(totalSum);
    }
}


function printTotalSum(pricePerAmount) {
    totalSum = pricePerAmount + 2.50;
    showTotalSum(totalSum);
    document.getElementById('total-sum').innerHTML = /*html*/ `
        <span id="total-sum" class="font-bold">${totalSum.toFixed(2).replace('.', ',')}</span> `;
}


function greyShoppingCartButton(pricePerAmount, totalSum) {
    priceMinus13 = 13 - pricePerAmount;
    document.getElementById('yellow-container-order-value').classList.remove('d-none');
    document.getElementById('grey-container-order-value').classList.remove('d-none');
    document.getElementById('minimum-order-value').innerHTML = /*html*/ `
    <span id="minimum-order-value">${priceMinus13.toFixed(2).replace('.', ',')} €</span>`;
    document.getElementById('button-to-pay').innerHTML = /*html*/ `
    <button id="button-to-pay" class="pay-button">Bezahlen (${totalSum.toFixed(2).replace('.', ',')} €)</button>`;
}


function blueShoppingCartButton(totalSum) {
    document.getElementById('yellow-container-order-value').classList.add('d-none');
    document.getElementById('grey-container-order-value').classList.add('d-none');
    document.getElementById('button-to-pay').innerHTML = /*html*/ `
        <button onclick="showPayPage()" id="button-to-pay" class="pay-button-blue">Bezahlen (${totalSum.toFixed(2).replace('.', ',')} €)</button>`;
}


function showPayPage() {
    document.getElementById('white-page').classList.remove('d-none');
}


function removeOverlay() {
    document.getElementById('white-page').classList.add('d-none');
}


function showResponsiveBag() {
    document.getElementById('shopping-cart').classList.remove('responsive-d-none');
    document.getElementById('shopping-cart').classList.remove('responsive-d-none');
    document.getElementById('shopping-cart-button').classList.add('d-none');
}


function showTotalSum(totalSum) {
    return totalSum;
}


function closeShoppingCart() {
    document.getElementById('shopping-cart').classList.add('responsive-d-none');
    document.getElementById('shopping-cart-button').classList.remove('d-none');
    document.getElementById('shopping-cart-button').innerHTML = /*html*/ `
    Warenkorb (${showTotalSum(totalSum).toFixed(2).replace('.', ',')}) €`;
}


//This functions returns HTML Code where the Menu in the shopping cart section will be
// showed. The variables wichMenu, whichPrice andwhichAmount are the variables where
// the actual menu, the price and the amount get saved. The variables will be displayed
// in the HTML Code.
function showMenuInShoppingBagTemplate(whichMenu, whichPrice, whichAmount) {
    currentMenuName = whichMenu;
    currentMenuAmount = whichAmount;

    return /*html*/ `
    <div id="order-overview" class="to-basket-added-menu">
        <div class="name-and-price-basket-menu">
            <div>
                <span id="amount">${whichAmount}</span>
                <span id="menu-basket-name" class="font-bold">${whichMenu}</span>
            </div>
            <div>
                <span id="menuPrice">${whichPrice.toFixed(2).replace('.', ',')} €</span>
            </div>
        </div>

        <div class="plus-and-minus-symbol">
            <img onclick="reduceAmount('${whichMenu}', ${whichPrice}, ${whichAmount})" src="img/minus-solid.svg" alt="minus-symbol">
            <img onclick="moveToBasket('${whichMenu}', ${whichPrice}, ${whichAmount})" src="img/plus-solid.svg" alt="plus-symbol">
        </div>
    </div>`;
}