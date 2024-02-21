
import { products } from './app.js';

const productsFundumental = () => {
  const product = document.createElement('div');
  products.append(product);
  product.className = 'product';
  const product_img = document.createElement('img');
  product.append(product_img);
  product_img.className = 'product-img';
  product_img.alt = 'clothes';
  const product_name = document.createElement('h1');
  product.append(product_name);
  product_name.className = 'product-name';
  const product_description = document.createElement('p');
  product.append(product_description);
  product_description.className = 'product-description';
  const product_cost = document.createElement('h3');
  product.append(product_cost);
  product_cost.className = 'product-cost';
  let count = document.createElement('span');
  count.className = 'item-numbers';
  count.innerHTML = 0;
  product.append(count);
  const add_btn = document.createElement('button');
  const content_btn = document.createTextNode('+');
  add_btn.appendChild(content_btn);
  add_btn.classList = 'add-btns btns';
  product.append(add_btn);
  const reduce_btn = document.createElement('button');
  reduce_btn.innerText = '-';
  product.append(reduce_btn);
  reduce_btn.classList = 'reduce-btns btns';
  const clear_btn = document.createElement('button');
  product.append(clear_btn);
  clear_btn.innerText = 'clear';
  clear_btn.classList = 'clear-btns btns';
 }
export default productsFundumental;
