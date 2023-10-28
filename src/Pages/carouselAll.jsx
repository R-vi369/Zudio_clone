import { Carousel } from 'react-bootstrap';
import zstoriesZ1 from '../assets/zstudioImg/zstoriesZ1.jpg'
import zstoriesZ2 from '../assets/zstudioImg/zstoriesZ2.jpg'
import zstoriesZ3 from '../assets/zstudioImg/zstoriesZ3.jpg'



const carouselAll = () => {
  return (
    <>
    
    <Carousel id="carouselExampleCaptions" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <Carousel.Item className="active">
          <img
            src={zstoriesZ1}
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={zstoriesZ2}
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
         src={zstoriesZ3}
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </Carousel>
    </>
  )
}

export default carouselAll