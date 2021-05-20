import { Row, Col, Container } from "react-bootstrap";
import BaseVans from "./BaseVans";
import "./QuotePage.css";

const QuotePage = () => {
  return (
    <>
      <section className="quoteList">
        <Container>
          <h1>¿CÓMO FUNCIONA NUESTRO PRESUPUESTO INTELIGENTE?</h1>
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
        </Container>
      </section>
      <section>
        <Container>
          <div className='baseVans'>
            <BaseVans />
          </div>
        </Container>
      </section>
    </>
  );
};

export default QuotePage;
