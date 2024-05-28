import React, { useState } from "react";
import Card from "../components/Card";
import Cart from "../components/Cart";
const Menu = ({setshowCart,showCart}) => {
  const [data, setdata] = useState([
    {
      id:0,
      name: "Hamburger",
      price: "200",
      image: "https://plus.unsplash.com/premium_photo-1668618295237-f1d8666812c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFtYnVyZ2VyfGVufDB8fDB8fHww",
      quantity:1
    },
    {
       id:1,
      name: "Fries",
      price: "100",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quantity:1
    },
    {
      id:2,
      name: "Coke",
      price: "50",
      image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quantity:1
    },
    {
      id:3,
      name: "Pepsi",
      price: "50",
      image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwc2l8ZW58MHx8MHx8fDA%3D",
      quantity:1
    },
  ]);


  return (
    <div className="px-10 py-5 flex flex-wrap items-center justify-center gap-10">
        {showCart && <Cart setshowCart={setshowCart} />}
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Card data={item} setdata={setdata} setshowCart={setshowCart}  />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
