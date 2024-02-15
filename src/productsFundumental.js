import { products } from './app.js';
export const product_1 = document.createElement('div');
export let img_1 = document.createElement('img');
export const product_name_1 = document.createElement('h1');
export const product_description_1 = document.createElement('p');
export const product_cost_1 = document.createElement('h3');


export const product_2 = document.createElement('div');
export const img_2 = document.createElement('img');
export const product_name_2 = document.createElement('h2');
export const product_description_2 = document.createElement('p');
export const product_cost_2 = document.createElement('h3');


export const product_3 = document.createElement('div'); 
export const img_3 = document.createElement('img');
export const product_name_3 = document.createElement('h2');
export const product_description_3 = document.createElement('p');
export const product_cost_3 = document.createElement('h3');

export const product_4 = document.createElement('div');
export const img_4 = document.createElement('img');
export const product_name_4 = document.createElement('h2');
export const product_description_4 = document.createElement('p');
export const product_cost_4 = document.createElement('h3');
const productsFundumental = () => {
  products.appendChild(product_1);
  product_1.append(img_1);
  product_1.append(product_name_1);
  product_1.append(product_description_1);
  product_1.append(product_cost_1);


  products.append(product_2);
  product_2.append(img_2);
  img_2.alt = 'clothes';
  product_2.append(product_name_2);
  product_2.append(product_description_2);
  product_2.append(product_cost_2);
  img_2.alt = 'clothes';



  products.append(product_3);
  product_3.append(img_3);
  product_3.append(product_name_3);
  product_3.append(product_description_3);
  product_3.append(product_cost_3);
  img_3.alt = 'clothes';



  products.append(product_4);
  product_4.append(img_4);
  product_4.append(product_name_4);
  product_4.append(product_description_4);
  product_4.append(product_cost_4)
  img_4.alt = 'clothes';

 }
export default productsFundumental;
