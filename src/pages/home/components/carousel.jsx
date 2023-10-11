import React from "react"
import Carousel from 'react-bootstrap/Carousel';



export default function CustomCarousel(){
    return(
        <>
        <Carousel data-bs-theme="dark" wrap = "true">
      <Carousel.Item className="carouseltest">
        <img
          className="d-block w-100"
          src="https://www.pluggedin.com/wp-content/uploads/2023/02/hogwarts-legacy-1024x587.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gamingtrend.com/wp-content/uploads/2023/02/vlcsnap-2023-02-05-20h28m15s134.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prod.assets.earlygamecdn.com/images/Hogwarts_Legacy-Preload.jpg?transform=banner2x_webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1>nckjdn</h1>

        </>
    )
}
