import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NewAccount from './components/NewAccount'
import ModalLogin from './components/ModalLogin'
import Error from './components/Error'
import Nagivation from './components/Nagivation'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      isOpenModalLogin: false
    }
  }

  componentDidMount () {
    let user = localStorage.getItem('user')
    if (user) {
      this.setState({
        user
      })
    }
  }

  login = (event) => {
    event.preventDefault()
    localStorage.setItem('user', 'tomek')
    this.setState(
      {
        user: 'tomek'
      },
      this.toggleModalLogin
    )
  }

  logout = () => {
    localStorage.removeItem('user')
    this.setState({
      user: null
    })
  }

  toggleModalLogin = () => {
    this.setState({
      isOpenModalLogin: !this.state.isOpenModalLogin
    })
  }

  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Nagivation
            user={this.state.user}
            toggleModal={this.toggleModalLogin}
            logout={this.logout}
          />
          <ModalLogin
            login={this.login}
            toggleModalLogin={this.toggleModalLogin}
            isOpen={this.state.isOpenModalLogin}
          />
          { this.state.user && <h1>Hello {this.state.user}</h1>}
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/new-account' component={NewAccount} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
