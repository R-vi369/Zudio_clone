
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




const carouselAll = ({caro1, caro2, caro3, caro4 , caro5, caro6}) => {
  return (
    <>
                <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={caro1}/>
              
                </div>
                <div>
                    <img src={caro2} />
                    
                </div>
                <div>
                <img src={caro3} />
                    
                </div>
                <div>
                <img src={caro4} />
                    
                </div>
                <div>
                <img src={caro5} />
                    
                </div>
                <div>
                <img src={caro6} />
                    
                </div>
               
              </Carousel>
            
   
    </>
  )
}

export default carouselAll