import React from 'react'
import '../styles/Hero.scss'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import heroimg1 from '../assets/heroImg/zudioShateimgs01.jpg'
import heroimg2 from '../assets/heroImg/zudioShateimgs02.jpg'
import heroimg3 from '../assets/heroImg/zudioShateimgs03.jpg'
import heroimg4 from '../assets/heroImg/zudioShateimgs04.jpg'
import heroimg5 from '../assets/heroImg/zudioShateimgs05.jpg'
import heroimg6 from '../assets/heroImg/zudioShateimgs06.jpg'
import heroimg7 from '../assets/heroImg/zudioShateimgs07.jpg'
import heroimg8 from '../assets/heroImg/zudioShateimgs08.jpg'
import heroimg9 from '../assets/heroImg/zudioShateimgs09.jpg'
import heroimg10 from '../assets/heroImg/zudioShateimgs10.jpg'
import heroimg11 from '../assets/heroImg/zudioShateimgs11.jpg'
import heroimg12 from '../assets/heroImg/zudioShateimgs12.jpg'
import heroimg13 from '../assets/heroImg/zudioShateimgs13.jpg'
const Hero = () => {
  return (
    <>
      <div className=" hero">
        <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} transitionTime={1}>
          <div>
            <img src={heroimg1} />

          </div>
          <div>
            <img src={heroimg2} />

          </div>
          <div>
            <img src={heroimg3} />

          </div>
          <div>
            <img src={heroimg4} />

          </div>
          <div>
            <img src={heroimg5} />

          </div>
          <div>
            <img src={heroimg6} />

          </div>
          <div>
            <img src={heroimg7} />

          </div>
          <div>
            <img src={heroimg8} />

          </div>
          <div>
            <img src={heroimg9} />

          </div>
          <div>
            <img src={heroimg10} />

          </div>
          <div>
            <img src={heroimg11} />

          </div>
          <div>
            <img src={heroimg12} />

          </div>
          <div>
            <img src={heroimg13} />

          </div>

        </Carousel>

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