import React from 'react'
import '../styles/Location.scss'
import {AiOutlineDoubleRight} from 'react-icons/ai'
const Location = () => {
  return (
    <>
    <div className="w-[30%] mx-4 my-1 p-4 bg-[#f3f3f3] ">
        <h1 className='font-bold text-[1.2rem] p-2 uppercase'>Zudio - ahmedabar, satyamev elite</h1>
        <h1 className='uppercase font-bold text-[0.9rem] p-2'>Address</h1>
        <p>GF Shop No 101 to 106, Satyamev Elite, Bopal Bridge, Bopal Ambli Road, Opp BRTS , Ahmedabad - 380058 , Gujarat</p>
        <button className='border-2 bg-black text-white px-4 py-2 flex items-center'>
           <p className=''> more details </p>
            <AiOutlineDoubleRight className='text-[0.9rem]'/>
        </button>
    </div>
    </>
  )
}

export default Location