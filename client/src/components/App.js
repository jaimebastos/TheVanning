import React from 'react';
import { Component } from 'react'
import AuthServices from './../service/auth.service'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'
import Routes from './routes/Routes'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      showAlert: true,
      alertText: ''
    }
    this.authService = new AuthServices()
  }

  storeUser = loggedUser => this.setState({ loggedUser })


  fetchUser = () => {
    this.authService
      .isloggedin()
      .then(response => this.setState({ loggedUser: response.data }))
      .catch(() => this.setState({ loggedUser: undefined }))
  }



  componentDidMount() {
    this.fetchUser()
  }


  render() {

    return (
      <>
        <Navigation loggedUser={this.state.loggedUser} storeUser={user => this.storeUser(user)} />

        <main>
          <Routes storeUser={user => this.storeUser(user)} loggedUser={this.state.loggedUser} />
        </main>
        <Footer />
      </>
    )
  }
}

export default App;
