import menu from './menu.js';
import fetchData from './fetchData.js';
import shoppingCart from './shoppingCart.js';
import countNumberItems from './countNumberItems.js';
import productsFundumental from './productsFundumental.js';
// document.location.href = '../../public/index.html'
const root = document.querySelector('.root');
export const container = document.createElement('div');
root.append(container);
container.className = 'container';
menu()
shoppingCart();
const headerPicture = document.createElement('div');
root.append(headerPicture);
headerPicture.className = 'header-picture';
const shop_products_title = document.createElement('h1');
root.append(shop_products_title);
shop_products_title.innerText = 'Products';
// shop_products_title.style.textAlign = 'center';


const main = document.createElement('div');
root.appendChild(main);
main.className = 'main';
export const products = document.createElement('div');
main.append(products);
products.className = 'products';
productsFundumental();
productsFundumental();
productsFundumental();
productsFundumental();
countNumberItems();


fetchData();


