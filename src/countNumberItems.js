
const countNumberItems = () => {
  const product = document.querySelectorAll('.product');
  const add_btn = document.querySelectorAll('.add-btns');
  const reduce_btn = document.querySelectorAll('.reduce-btns');
  const clear_btn = document.querySelectorAll('.clear-btns');
  let count = document.querySelectorAll('.item-numbers');
  let counter_1 = 0;
  let counter_2 = 0;
  let counter_3 = 0;
  let counter_4 = 0;
  
  // size = parseInt(size);

  add_btn[0].addEventListener("click", () => {
    if (counter_1 < 0) counter_1 = 0;
    counter_1 += 1;
    count[0].innerHTML = `${counter_1}#`;
  });
  add_btn[1].addEventListener("click", () => {
    if (counter_2 < 0) counter_2 = 0;
    counter_2 += 1;
    count[1].innerHTML = `${counter_2}#`;
  });
  add_btn[2].addEventListener("click", () => {
    if (counter_3 < 0) counter_3 = 0;
    counter_3 += 1;
    count[2].innerHTML = `${counter_3}#`;
  });
  add_btn[3].addEventListener("click", () => {
    if (counter_4 < 0) counter_4 = 0;
    counter_4 += 1;
    count[3].innerHTML = `${counter_4}#`;
  });
  
 
  reduce_btn[0].addEventListener("click", () => {
    counter_1 -= 1;
    counter_1 < 0 ? null : count[0].innerHTML = `${counter_1}#`;
    
  })

  reduce_btn[1].addEventListener("click", () => {
    counter_2 -= 1;
    counter_2 < 0 ? null : count[1].innerHTML = `${counter_2}#`;
   
  })
 
  reduce_btn[2].addEventListener("click", () => {
    counter_3 -= 1;
    counter_3 < 0 ? null : count[2].innerHTML = `${counter_3}#`;
    
  })

  reduce_btn[3].addEventListener("click", () => {
    counter_4 -= 1;
    counter_4 < 0 ? null : count[3].innerHTML = `${counter_4}#`;
   
  })
  
  clear_btn[0].addEventListener("click", function () {
    counter_1 = 0;
    count[0].innerHTML = counter_1;
  })
  clear_btn[1].addEventListener("click", function () {
    counter_2 = 0;
    count[1].innerHTML = counter_2;
  })
  clear_btn[2].addEventListener("click", function () {
    counter_3 = 0;
    count[2].innerHTML = counter_3;
  })
  clear_btn[3].addEventListener("click", function () {
    counter_4 = 0;
    count[3].innerHTML = counter_4;
  })

}
export default countNumberItems;