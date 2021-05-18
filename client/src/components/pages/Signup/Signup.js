import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm'
import './signup.css'

const Signup = ({ history }) => {

    return (

        <Container>

            <Row className="justify-content-center auth">

                <Col md={6}>

                    <h1>Registro de usuario</h1>

                    <hr />

                    <SignupForm history={history} />

                    <hr />

                    <Link to="/auth/login" className="btn btn-dark">Iniciar sesión</Link>

                </Col>

            </Row>

        </Container>

    )
}

export default Signup