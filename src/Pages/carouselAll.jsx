import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import herooo from '../assets/hero.jpg'
import logoo from '../assets/logo.png'
const CarouselAll = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={1000}> {/* Adjust the interval as needed */}
        <img
          className="d-block w-100"
          src={herooo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logoo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={herooo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    
    
    </>
  )
}

export default CarouselAll