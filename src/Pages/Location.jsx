import React from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
const Location = ({name, addressDetail}) => {
  return (
    <>
    <div className="w-[33%] m-[1px] p-4 bg-[#f3f3f3] ">
        <h1 className='font-bold text-[1.2rem] p-2 uppercase'>Zudio -{name}</h1>
        <h1 className='uppercase font-bold text-[0.9rem] p-2 '>Address</h1>
        <p className='text-[0.8rem] px-2 py-[2px]'>{addressDetail}</p>
        <button className=' mt-2 border-2 bg-black text-white p-2 flex items-center'>
           <p className='font-bold uppercase text-[0.8rem]'> more details </p>
            <AiOutlineDoubleRight className='text-[0.9rem]'/>
        </button>
    </div>
    </>
  )
}

export default Location