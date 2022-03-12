import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./styles/SlideShow.css";
export class SlideShow extends Component {
  render() {
    var images = [
      {
        img: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
      },
      {
        img: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2014/02/delhi.jpg",
      },
      {
        img: "https://www.transindiatravels.com/wp-content/uploads/the-red-fort-delhi.jpg",
      },
      {
        img: "https://images.thrillophilia.com/image/upload/s--bBRF-lgz--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/085/830/original/1525415163_shutterstock_462136018_(1).jpg.jpg?1525415163",
      },
      {
        img: "https://www.indiatouristoffice.org/wp-content/uploads/2017/09/36097a355485fbea042c6890a440418e-680x380.jpg",
      },
      {
        img: "https://www.transindiatravels.com/wp-content/uploads/ruins-of-hampi-karnataka.jpg",
      },
    ];
    var imgSlides = () =>
      images.map((num) => (
        <div className="imgpad">
          <img className="imgdetails" src={num.img} width="100%" />
        </div>
      ));
    return (
      <div className="App">
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "px" }}></div>
        </div>
        <Slider
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          arrows={true}
          autoplaySpeed={2000}
        >
          {imgSlides()}
        </Slider>
      </div>
    );
  }
}
export default SlideShow;
