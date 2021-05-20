import React, { Component } from "react";
import VansService from "../../../../service/vans.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BaseVanCard from "./BaseVansCard";
import SpinnerGif from './../../common/Spinner'
import { Link } from "react-router-dom";

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
  return <div className={className} style={{ ...style, display: "block", background: "#ffbf40" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "#ffbf40" }} onClick={onClick} />;
}
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
      <h1><SpinnerGif /></h1>
    ) : (
      <>
        <Link to={`/quote/create`} className="btn btn-outline-dark boton">
          Detalles
          </Link>
        <Slider {...settings} >
          {vans.map((elm) => (<BaseVanCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} />))}
        </Slider>
      </>
    );
  }
}

export default BaseVans;
