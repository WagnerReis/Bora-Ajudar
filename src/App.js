import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Sobre from './Sobre'
import Contato from './Contato'
import Campanhas from './Campanhas'
import Admin from './Admin'
import Login from './Login'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/campanhas' component={Campanhas} />
          <Route path='/contato' component={Contato} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
