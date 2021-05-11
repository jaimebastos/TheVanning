import { Container } from "react-bootstrap";

import ExtrasList from "./Extras-list";

import "./Extras.css";

const Extras = () => {
  return (
    <Container className="Extras-page">
      <hr />
      <ExtrasList />
    </Container>
  );
};

export default Extras;
