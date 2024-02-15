import {product_1} from './productsFundumental.js'
const countNumberItems = () => {
  let count = document.createElement('span');
  product_1.append(count);
  let size = 0;
  count.innerHTML = size;
  
  // size = parseInt(size);
  const add_btn = document.createElement('button');
  const content_btn = document.createTextNode('+');
  add_btn.appendChild(content_btn);
  add_btn.className = 'btns';
  product_1.append(add_btn);
  function add() {
    size +=1;
    count.innerHTML = `${size}#`;
  }
  add_btn.addEventListener("click", add)
  
  count.className = 'item-numbers';
  const reduce_btn = document.createElement('button');
  reduce_btn.innerText = '-';
  product_1.append(reduce_btn);
  reduce_btn.className = 'btns';
  reduce_btn.addEventListener("click", () => {
    size -= 1;
    console.log(size);
    size < 0 ? null : count.innerHTML = `${size}#`;
  })
  const clear_btn = document.createElement('button');
  product_1.append(clear_btn);
  clear_btn.innerText = 'clear';
  clear_btn.className = 'btns';
  clear_btn.addEventListener("click", function () {
    size = 0;
    count.innerHTML = size;
  })
  
  
  
}
export default countNumberItems;