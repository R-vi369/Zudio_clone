import React from 'react'
import '../styles/Hero.scss'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <div className=" hero">


        <Link className='heroLinks' to='/beauty'>
          Beauty
        </Link>
          
        <Link className='heroLinks' to='/women'>
        Women
        </Link>
        
        <Link className='heroLinks' to='/men'>
         Men
        </Link>
        
        <Link className='heroLinks' to='/ethinic'>
          Ethinic
        </Link>
        
        <Link className='heroLinks' to='/kids'>
          Kids
        </Link>
        
        <Link className='heroLinks' to='/loungewear'>
        Loungewear
        </Link>
        
        <Link className='heroLinks' to='/footwear'>
          Footerwear
        </Link>

      </div>
      <Footer />
    </>
  )
}

export default Hero