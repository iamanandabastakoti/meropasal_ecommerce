import { useState } from "react";
import "./App.css";
import Product from "./components/Product";

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <>

    <Product image = {'https://images.fancode.com/media/catalog/product/cache/c864083bf74ae97037fa23bc5340ae95/k/k/kkr-jersey.jpg'} product = {'KKR: Match Jersey 2023'} category = {'Sportswear'} size = {'XL'} color = {'Purple'} total = {20}/>

    <Product image = {'https://cdn.shopify.com/s/files/1/0746/1306/3992/files/Image_6_SRK_First_Photo_890_X_870_22548a70-d837-4f93-9856-673823c04ad6.jpg?v=1682754370&width=1728'} product = {"SIGNATURE X from D'YAVOL"} category = {'Luxury Streetwear'} size = {'XL'} color = {'Black'} total = {2500}/>

    <Product image = {'https://cf.shopee.com.my/file/149ead55ea80fdeca6684db87965ba7e'} product = {'Real Madrid Designer Kit'} category = {'Sportswear'} size = {'XL'} color = {'White'} total = {25}/>

    <Product image = {'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b38436e0-1698-4ccd-ad71-7f64bb805ea6/air-jordan-1-hi-flyease-mens-shoes-VjGcGX.png'} product = {'Air Jordan 1'} category = {'Luxury Footwear'} size = {'42'} color = {'Red'} total = {200}/>

    <Product image = {'https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/l/e/lenovo-legion-5-2021-price-nepal-gaming-laptop.jpg'} product = {'Lenovo Legion 5 2022'} category = {'Gaming Laptop'} size = {'16.67inch screen'} color = {'Phantom Blue'} total = {2000}/>
    </>
  )
}

export default App;