import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm'

const Signup = ({ history }) => {

    return (
      <Container>
        <Row className="justify-content-center auth">
          <Col md={6}>
            <h1>Registro de usuario</h1>
            <hr />
            <p>¿Ya tienes un perfil personal?<Link to='/auth/login'>Iniciar Sesión</Link></p>

            <hr />

            <SignupForm history={history} />

            <hr />

          </Col>
        </Row>
      </Container>
    );
}

export default Signup