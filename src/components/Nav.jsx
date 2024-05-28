import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';

const Nav = ({setshowCart}) => {
  const { cart } = useSelector((state) => state.cartReducer);
  const {isAuthenticated} = useSelector((state)=> state.userReducer)
  return (
    <div className='h-[10vh] text-white bg-[#3F51B5] flex items-center justify-between px-8'>
        <div className='flex items-center gap-3'>
          <ImSpoonKnife/>
          <h2>Food's Resturant</h2>
        </div>
         { isAuthenticated && <div className='flex'>
              <GiShoppingCart onClick={()=>setshowCart(true)} />
              <h1>{cart.length && cart.length}</h1>
        </div>}
    </div>
  )
}

export default Nav