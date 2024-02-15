import { container } from './app.js'
const menu = () => {
  // console.log("it's navbar");
  const navbar = document.createElement('div');
  container.append(navbar);
  // navbar.innerText = 'navbar';
  navbar.className = 'navbar';
  const list = document.createElement('ul');
  navbar.append(list);
  // list.innerText = 'list';
  list.className = 'list';
  const items = ['Home', 'About', 'Products', 'Contact'].map((item) => {
  const list_item = document.createElement('li');
  list_item.innerText = item;
  list_item.classList = 'items';
  return list_item;
}) 
list.append(...items)
}
export default menu;