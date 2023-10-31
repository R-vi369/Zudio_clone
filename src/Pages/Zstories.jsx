import React from 'react'
// import zstoriesImg1 from '../assets/zstudioImg/zstoriesImg1.jpg'
import CarouselAll from './carouselAll'
import '../styles/Zstories.scss'
import imgZudio1 from '../assets/zstudioImg/imgZudio1.jpg'
import imgZudio2 from '../assets/zstudioImg/imgZudio2.jpg'
import imgZudio3 from '../assets/zstudioImg/imgZudio3.jpg'
import imgZudio4 from '../assets/zstudioImg/imgZudio4.jpg'
import Footer from '../components/Footer'


import zstoriesZ1 from '../assets/zstudioImg/zstoriesZ1.jpg'
import zstoriesZ2 from '../assets/zstudioImg/zstoriesZ2.jpg'
import zstoriesZ3 from '../assets/zstudioImg/zstoriesZ3.jpg'
import zstoriesZ4 from '../assets/zstudioImg/zstoriesZ4.jpg'
import zstoriesZ5 from '../assets/zstudioImg/zstoriesZ5.jpg'
import zstoriesZ6 from '../assets/zstudioImg/zstoriesZ6.jpg'
const Zstories = () => {
  return (
    <div className="zstories">

      <div className="carousel">
        <CarouselAll caro1={zstoriesZ1} caro2={zstoriesZ2} caro3={zstoriesZ3} caro4={zstoriesZ4} caro5={zstoriesZ5} caro6={zstoriesZ6}/>
      </div>

      <div className="zstoriesDownSection">
        <h1>CAMPAIGNS</h1>
        <div className="zstoriesImg4All">
          <img src={imgZudio1} alt="" />
          <img src={imgZudio2} alt="" />
          <img src={imgZudio3} alt="" />
          <img src={imgZudio4} alt="" />
        </div>
      </div>
      
<Footer/>

    </div>
  )
}

export default Zstories



