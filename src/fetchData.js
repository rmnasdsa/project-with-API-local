import {product_name_1, product_description_1, img_1, product_name_2,product_description_2,img_2,product_name_3,product_description_3,img_3,product_name_4,product_description_4,img_4,product_cost_1,product_cost_2,product_cost_3,product_cost_4} from './productsFundumental.js'
const fetchData = () => {
  const getData = async () => {
    const data = await fetch('../data.json').then((response) => response.json());
    product_name_1.innerHTML = data.products[0].name;
    product_description_1.innerHTML = data.products[0].des;
    product_cost_1.innerHTML = data.products[0].cost;
    img_1.src = '../public/img/clothes-header.jpg';
    img_1.alt = 'clothes';
    // console.log(img)
    // console.log(res)

    product_name_2.innerHTML = data.products[1].name;
    product_description_2.innerText = data.products[1].des;
    product_cost_2.innerText = data.products[1].cost;
    img_2.src = '../public/img/clothes-4.jpg';

    product_name_3.innerText = data.products[2].name;
    product_description_3.innerText = data.products[2].des;
    product_cost_3.innerText = data.products[2].cost;
    img_3.src = 'https://www.popsci.com/uploads/2022/03/02/aviv-rachmadian-7F7kEHj72MQ-unsplash-scaled.jpg?auto=webp';

    product_name_4.innerText = data.products[3].name;
    product_description_4.innerText = data.products[3].des;
    product_cost_4.innerText = data.products[3].cost;
    img_4.src = 'https://i.cbc.ca/1.4629616.1524263369!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/peggy-sue-rack.jpg';
  };
  getData();
  
  
}
export default fetchData;