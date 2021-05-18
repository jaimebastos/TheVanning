import { Col, Form, Row, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExtrasCheckbox.css";
import Lateral from "./lateral.png";
import Kitchen from "./Kitchen.png";

const ExtrasCheckbox = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
             Filtros      
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Row>
                  <Col sm={4}>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Gas" as={Link} to={`/extras/Gas`} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Entretenimiento" as={Link} to={`/extras/Entretenimiento`} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Revestimiento" as={Link} to={`/extras/Revestimiento`} />
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Electrodomesticos" as={Link} to={`/extras/Electrodomesticos`} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Electrónica" as={Link} to={`/extras/Electrónica`} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Electricidad" as={Link} to={`/extras/Electricidad`} />
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Agua" as={Link} to={`/extras/Agua`} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Almacenamiento" as={Link} to={`/extras/Almacenamiento`} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Confort" as={Link} to={`/extras/Confort`} />
                    </Form.Group>
                  </Col>
                </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default ExtrasCheckbox;
