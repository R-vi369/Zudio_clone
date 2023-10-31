
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import zstoriesZ1 from '../assets/zstudioImg/zstoriesZ1.jpg'
import zstoriesZ2 from '../assets/zstudioImg/zstoriesZ2.jpg'
import zstoriesZ3 from '../assets/zstudioImg/zstoriesZ3.jpg'
import zstoriesZ4 from '../assets/zstudioImg/zstoriesZ4.jpg'
import zstoriesZ5 from '../assets/zstudioImg/zstoriesZ5.jpg'
import zstoriesZ6 from '../assets/zstudioImg/zstoriesZ6.jpg'



const carouselAll = () => {
  return (
    <>
                <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={zstoriesZ1}/>
              
                </div>
                <div>
                    <img src={zstoriesZ2} />
                    
                </div>
                <div>
                    <img src={zstoriesZ3} />
                    
                </div>
                <div>
                    <img src={zstoriesZ4} />
                    
                </div>
                <div>
                    <img src={zstoriesZ5} />
                    
                </div>
                <div>
                    <img src={zstoriesZ6} />
                    
                </div>
               
              </Carousel>
            
   
    </>
  )
}

export default carouselAll