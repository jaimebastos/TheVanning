import { Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import cover from "./cover.png";
import build from "./build.png";
import shop from "./shop.png";
import upgrade from "./upgrade.png";



const LandingPage = () => {
  return (
    <div className="landing">
      <figure className="cover">
        <img src={cover} alt="cover"></img>
        <div className="innertext">
          <h1>THE VANNING</h1>
          <p>CAMPER VANS & ADVENTURE TRUCKS BUILT IN MADRID, SPAIN</p>
        </div>
      </figure>
      <section className="functionalities">
        <h1>Descubre todos nuestros sevicios</h1>
        <Row>
          <Col md={4}>
            <figure className="build-cover relative">
              {" "}
              <img src={build} alt="build"></img>
              <div className="innertext">
                {" "}
                <Link to="/vans" className="nav-link btn btn-outline-dark-landing buttonLink">
                  <h3>CUSTOMIZAR</h3>
                </Link>
                <Link to="/vans" className="nav-link">
                  <p>¿TIENES YA UNA FURGONETA? EMPIEZA AQUI</p>
                </Link>
              </div>
            </figure>
          </Col>
          <Col md={4}>
            <figure className="shop-cover relative">
              <img src={shop} alt="shop"></img>
              <div className="innertext">
                <Link to="/vans" className="nav-link btn btn-outline-dark-landing buttonLink">
                  <h3>COMPRAR</h3>
                </Link>
                <Link to="/vans" className="nav-link">
                  <p>ELIGE TU FURGONETA FAVORITA</p>
                </Link>
              </div>
            </figure>
          </Col>
          <Col md={4}>
            <figure className="upgrade-cover relative">
              <img src={upgrade} alt="upgrade"></img>
              <div className="innertext">
                <Link to="/vans" className="nav-link btn btn-outline-dark-landing buttonLink">
                  <h3>CREAR</h3>
                </Link>
                <Link to="/vans" className="nav-link">
                  <p>DISEÑA LA FURGONETA DE TUS SUEÑOS</p>
                </Link>
              </div>
            </figure>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default LandingPage;
