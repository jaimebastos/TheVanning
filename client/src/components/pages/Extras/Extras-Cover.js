import { Col, Row } from "react-bootstrap";
import before from "./before.png";
import "./Extras-cover.css";
import center from "./center.png";
import after from "./after.png";

const ExtrasCover = () => {
  return (
    <div className="Extrascover">
      <Row>
        <Col xs={6} md={4}>
          <figure className="before-cover">
            <img src={before} alt="before"></img>
          </figure>
        </Col>
        <Col xs={6} md={4}>
          <figure className="center-cover">
            <img src={center} alt="center"></img>
          </figure>
        </Col>
        <Col xs={6} md={4}>
          <figure className="after-cover">
            <img src={after} alt="after"></img>
          </figure>
        </Col>
      </Row>
    </div>
  );
};

export default ExtrasCover;
