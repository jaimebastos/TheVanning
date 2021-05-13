import React from 'react';
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'

import Routes from './routes/Routes'

class App extends Component {
  render() {

    return (
      <>
        <Navigation />

        <main>
          <Routes />
        </main>

        <Footer />
      </>
    )
  }
}

export default App;
