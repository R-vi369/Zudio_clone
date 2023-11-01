import React from 'react'
import zudioShateimgs1 from '../assets/BeautyImg/zudioShateimgs1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Beauty = () => {
  return (
    <>
       <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={zudioShateimgs1}/>
              
                </div>
                {/* <div>
                    <img src={caro2} />
                    
                </div>
                <div>
                <img src={caro3} />
                    
                </div>
                <div>
                <img src={caro4} />
                    
                </div> */}
               
      
              </Carousel>
    
    
    </>
  )
}

export default Beauty