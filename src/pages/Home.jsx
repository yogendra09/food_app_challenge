import React from 'react'
import Nav from '../components/Nav'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div className='h-[90vh] w-full flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-thin'>Welcome to Foods Kitchen</h1>
          <button onClick={()=>{
             navigate("/menu")
          }} className='bg-[#3F51B5] text-white p-2 mt-10'>Go to Menu</button>
        </div>
    </div>
  )
}

export default Home