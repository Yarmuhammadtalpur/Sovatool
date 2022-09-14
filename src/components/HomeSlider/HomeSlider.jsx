import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../images/Were-Hiring.jpg";
import image2 from "../../images/September-Sale.jpg";

function HomeSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeSlider;
