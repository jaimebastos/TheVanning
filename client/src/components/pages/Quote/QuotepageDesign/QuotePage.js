import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BaseVans from "./BaseVans";
import "./QuotePage.css";

const QuotePage = ({ loggedUser }) => {
  return (
    <>
      <section className="quoteList">
        <Container>
          <h1>¿CÓMO FUNCIONA NUESTRO PRESUPUESTO INTELIGENTE?</h1>
          <div className="steps">
            <Row>
              <Col md={4}>
                <Row>
                  <Col md={2}>
                    <h2>1</h2>
                  </Col>
                  <Col md={10}>
                    <p>Elige el tipo de furgoneta base que más se ajuste a tus necesidades.</p>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={2}>
                    <h2>2</h2>
                  </Col>
                  <Col md={10}>
                    <p>Añade los extras que quieres que tenga tu FurgoCamper.</p>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Row>
                  <Col md={2}>
                    <h2>3</h2>
                  </Col>
                  <Col md={10}>
                    <p>Envianos el presupuesto y te daremos una respuesta inmediata. </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className='baseVans'>
            <BaseVans loggedUser={loggedUser} />
          </div>
        </Container>
      </section>
      <section className="margin-to-footer">
        <Container>
          <Link to="/quote/create" className="quoteButton">
            Presupuesto
          </Link>
        </Container>
      </section>
    </>
  );
};

export default QuotePage;
