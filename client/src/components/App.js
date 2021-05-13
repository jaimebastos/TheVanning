import React from 'react';
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Routes from './routes/Routes'

class App extends Component {
  render() {

    return (
      <>

        <main>
          <Routes />
        </main>

      </>
    )
  }
}

export default App;
