import React from 'react'
import '../styles/Hero.scss'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import zstoriesZ1 from '../assets/zstudioImg/zstoriesZ1.jpg'
import zstoriesZ2 from '../assets/zstudioImg/zstoriesZ2.jpg'
import zstoriesZ3 from '../assets/zstudioImg/zstoriesZ3.jpg'
import zstoriesZ4 from '../assets/zstudioImg/zstoriesZ4.jpg'
import zstoriesZ5 from '../assets/zstudioImg/zstoriesZ5.jpg'
import zstoriesZ6 from '../assets/zstudioImg/zstoriesZ6.jpg'
import CarouselAll from '../Pages/carouselAll'
const Hero = () => {
  return (
    <>
      <div className=" hero">
        <CarouselAll caro1={zstoriesZ1} caro2={zstoriesZ2} caro3={zstoriesZ3} caro4={zstoriesZ4} caro5={zstoriesZ5} caro6={zstoriesZ6}/>
     
       <div className="heroLinks">

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

      </div>
      <Footer />
    </>
  )
}

export default Hero