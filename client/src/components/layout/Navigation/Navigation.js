import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.jpeg'
import './Navigation.css'

// import AuthService from './../../../service/auth.service'

const Navigation = ({ loggedUser, storeUser }) => {

    //   const logout = () => {

    //     const authService = new AuthService()

    //     authService
    //         .logout()
    //         .then(() => storeUser(undefined))
    //         .catch(err => console.log(err))
    // }

    return (

        <Navbar bg="dark" variant="dark" className="justify-content-between">

            <Navbar.Brand>
                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '}Vans_app!
            </Navbar.Brand>

            <Nav className="mr-auto">
                <Link to="/vans" className="nav-link">Furgonetas</Link>
                {
                    !loggedUser ?
                        <>
                            <Link to="/signup" className="nav-link">Registro</Link>
                            <Link to="/login" className="nav-link">Iniciar sesión</Link>
                        </>
                        :
                        <>
                            <Link to="/profile" className="nav-link">Perfil</Link>   
                            <span onClick={() => logout()} className="nav-link">Cerrar sesión</span>
                        </>
                }
                <span className="nav-link">| Hola, {loggedUser ? loggedUser.username : 'invitad@'}</span>
            </Nav>
        </Navbar>
    )
    }

export default Navigation