import React from 'react'
import Footer from '../components/Footer'
const Zworld = () => {
  return (
    <>

      <div className='bg-white text-black h-screen flex flex-col items-center '>
        <div className='flex flex-col items-center m-8'>
          <h1 className='text-6xl uppercase '>who we are</h1>
          <p className='text-3xl uppercase p-2 '>A FASHION BRAND FROM - THE HOUSE OF TATA TRENT LTD</p>
        </div>

        <div className='flex flex-col items-center m-8'>
          <h1 className='text-6xl uppercase '>WHAT WE DO?</h1>
          <p className='text-3xl uppercase p-2 '>OFFER IRRESISTIBLE FASHION AT IRRESISTIBLE PRICES
            CONSTANT NEWNESS IN STORE</p>
        </div>

        <div className='flex flex-col items-center m-8'>
          <h1 className='text-6xl uppercase '>WHERE WE ARE?</h1>
          <p className='text-3xl uppercase p-2 '>CURRENTLY IN 42 CITIES IN INDIA, COMING TO YOUR CITY VERY SOON</p>
        </div>





      </div>
      <Footer />
    </>
  )
}

export default Zworld