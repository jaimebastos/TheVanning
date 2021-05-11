import './App.css';
import { Component } from 'react'

import Footer from './components/layout/Footer/Footer'
import Navigation from './components/layout/Navigation/Navigation'

import Routes from './routes/Routes'

class App extends Component() {
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
