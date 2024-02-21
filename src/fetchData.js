
const fetchData = () => {

  const product_name = document.querySelectorAll('.product-name');
  const product_description = document.querySelectorAll('.product-description');
  const product_cost = document.querySelectorAll('.product-cost');
  const product_img = document.querySelectorAll('.product-img');
  // console.log(product_img)
  const getData = async () => {
    const data = await fetch('../data.json').then((response) => response.json());
    
    data.products.map(({ name, img, id, cost, des }) => {
      for (let i = 0; i < 4; i++) {
        if (id == 1) {
          product_img[0].src = img;
          product_name[0].innerText = name;
          product_cost[0].innerText = cost;
        }
        if (id == 2) {
          product_img[1].src = img;
          product_name[1].innerText = name;
          product_cost[1].innerText = cost;
        }
        if (id == 3) {
          product_img[2].src = img;
          product_name[2].innerText = name;
          product_cost[2].innerText = cost;
        }
        if (id == 4) {
          product_img[3].src = img;
          product_name[3].innerText = name;
          product_cost[3].innerText = cost
        }
        product_description[i].innerText = des;
      }
    })
  };
  getData();
  
  
}
export default fetchData;