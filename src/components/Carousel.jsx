import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Grid from '@material-ui/core/Grid';


function CarouselProducts() {
  return (
    <Carousel>
      <div>
        <img src="https://i.blogs.es/187a45/iphone-11-pro-02/450_1000.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="../assets/1.jpg" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );
}

export default CarouselProducts;
