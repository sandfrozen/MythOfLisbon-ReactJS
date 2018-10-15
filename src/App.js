import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Nagivation from './components/Nagivation'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Nagivation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
