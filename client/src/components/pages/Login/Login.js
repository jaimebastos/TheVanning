import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = ({ storeUser, history }) => {

  return (

    <Container>
      <Row>
        <LoginForm history={history} storeUser={storeUser} />

        <Col md={6}>

          <Link to="/auth/signup" className="btn btn-dark">
            Registrarse
            </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Login