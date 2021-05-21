import React from 'react';
import { Component } from 'react'
import AuthServices from './../service/auth.service'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'
import Routes from './routes/Routes'
import Alert from './pages/Shared/alert';



class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedUser: undefined,
      showAlert: false,
      alertText: "",
    };
    this.authService = new AuthServices();
  }

  storeUser = (loggedUser) => this.setState({ loggedUser });

  fetchUser = () => {
    this.authService
      .isloggedin()
      .then((response) => this.setState({ loggedUser: response.data }))
      .catch(() => this.setState({ loggedUser: undefined }));
  };

  handleAlert(showAlert, alertText) {
    this.setState({ showAlert, alertText });
  }


  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <>
        <Navigation loggedUser={this.state.loggedUser} storeUser={user => this.storeUser(user)} handleAlert={(alertText) => this.handleAlert(alertText)} />

        <main>
          <Routes
            storeUser={(user) => this.storeUser(user)}
            loggedUser={this.state.loggedUser}
            handleAlert={(showAlert, alertText) => this.handleAlert(showAlert, alertText)}
          />
        </main>
        <Footer />
        <Alert
          handleAlert={(alertText, showAlert) => this.handleAlert(alertText, showAlert)}
          show={this.state.showAlert}
          text={this.state.alertText}
        />
      </>
    );
  }
}

export default App;
