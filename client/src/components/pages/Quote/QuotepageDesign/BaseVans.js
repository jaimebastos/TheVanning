import React, { Component } from "react";
import VansService from "../../../../service/vans.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BaseVanCard from "./BaseVansCard";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      },
    },
  ],
};
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "#ffbf40"}} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "#ffbf40" }} onClick={onClick} />;
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
   responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
        ]
   
};

class BaseVans extends Component {
  constructor() {
    super();
    this.state = {
      vans: undefined,
    };
    this.VansService = new VansService();
  }

  componentDidMount() {
    this.loadVans();
  }

  loadVans() {
    this.VansService.getAllVans()
      .then((response) => {
        this.setState({ vans: response.data });
      })
      .catch((err) => console.log("ERROR, YA VEREMOS QUE HASCEMOS", err));
  }

  render() {
    const { vans } = this.state;

    return !vans ? (
      <h1>CARGANDO</h1>
    ) : (
      <>
        <Slider {...settings} >
          {vans.map((elm) => (
            <BaseVanCard key={elm._id} {...elm} />
          ))}
        </Slider>
      </>
    );
  }
}

export default BaseVans;
