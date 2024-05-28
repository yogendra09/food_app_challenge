import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = ({ setshowCart }) => {
  const navigate = useNavigate();

  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart);
  return (
    <div className="absolute pt-2 flex flex-col justify-end z-10 min-h-[30vh] w-[50vw] bg-gray-300">
      <div className="h-[25vh] px-5">
        {cart.length > 0 &&
          cart.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
      </div>
      <div className="h-[5vh] w-full flex justify-between px-5">
        <h1>Total : </h1>
        <h1>{
             
              cart.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0).toFixed(2)
            
            }</h1>
      </div>
      <div className="h-[5vh] text-white flex justify-end gap-2 bg-gray-50">
        <button
          onClick={() => (navigate("/checkout"),setshowCart(false))}
          className="bg-[#3F51B5] p-1 "
        >
          {" "}
          SAVE AND CHECKOUT
        </button>
        <button onClick={() => setshowCart(false)} className="text-[#3F51B5]">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Cart;
