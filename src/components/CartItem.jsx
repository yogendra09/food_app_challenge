import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/Reducers/cartReducer";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <img src={item.image} alt="" className="w-10 h-10" />
        <div className="flex flex-col gap-1">
          <p className="text-sm">{item.name}</p>
          <div>
            <p className="text-xs">{item.price}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div
            onClick={() => {
              dispatch(addItem({ ...item }));
            }}
            className="bg-[#3F51B5] p-1"
          >
            <IoMdAdd />
          </div>

          <div
            onClick={() => {
              dispatch(removeItem({ ...item }));
            }}
            className="bg-red-500 p-1"
          >
            <FiMinus />
          </div>
          <p className="text-xs">{item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
