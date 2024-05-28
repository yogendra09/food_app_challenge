import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/Reducers/cartReducer";
const Card = ({ data ,setdata}) => {
  const { cart } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

   
  return (
    <div className="h-[55vh] w-[22vw] bg-gray-200 flex flex-col justify-between py-2 px-3 shadow-lg">
      <div className="h-[32vh] w-[full]">
        <img src={data.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <h1>{data.name}</h1>
        <h1>{data.price}</h1>
      </div>

      <div className="flex text-white gap-3 ">
        <div
          onClick={() => {
            dispatch(addItem({ ...data }));
          }}
          className="bg-[#3F51B5] p-1"
        >
          <IoMdAdd />
        </div> 

        <div onClick={()=>{
          dispatch(removeItem({...data}))
        }} className="bg-red-500 p-1">
          <FiMinus />
        </div>
      </div>
    </div>
  );
};

export default Card;
