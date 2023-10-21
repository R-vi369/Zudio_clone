import React from 'react'
import zstoriesImg1 from '../assets/zstudioImg/zstoriesImg1.jpg'
import '../styles/Zstories.scss'
import imgZudio1 from '../assets/zstudioImg/imgZudio1.jpg'
import imgZudio2 from '../assets/zstudioImg/imgZudio2.jpg'
import imgZudio3 from '../assets/zstudioImg/imgZudio3.jpg'
import imgZudio4 from '../assets/zstudioImg/imgZudio4.jpg'
import Footer from '../components/Footer'
const Zstories = () => {
  return (
    <div className="zstories">

      <div className="carousel">
        <img src={zstoriesImg1} alt="" />
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