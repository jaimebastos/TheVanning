import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = ({ storeUser, history }) => {

    return (
      <Container>
        <Row className="justify-content-center auth">
          <Col md={6}>
            <h1>Inicio de sesión</h1>

            <hr />

            <LoginForm history={history} storeUser={storeUser}/>

            <hr />

            <Link to="/auth/signup" className="btn btn-dark">
              Registrarse
            </Link>
          </Col>
        </Row>
      </Container>
    );
}

export default Login