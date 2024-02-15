import {container} from './app.js'
const shoppingCart = () => {
  const shopping_cart = document.createElement('a');
  container.append(shopping_cart);
  shopping_cart.innerText = 'shopping cart';
  shopping_cart.href = "#";
  // document.location.href = '../src/page/shop.html';
  // console.log(document.location);

}
export default shoppingCart;