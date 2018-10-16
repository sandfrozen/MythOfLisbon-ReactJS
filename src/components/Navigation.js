import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  componentWillReceiveProps () {
    if (this.state.isOpen && this.props.user) {
      this.setState({
        isOpen: false
      })
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand tag={Link} to='/'>
            Myths and Legends of Lisbon
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {this.props.user
                ? <Fragment>
                  <NavItem>
                    <NavLink className="capitalize" tag={Link} to='/my-account'>
                        {this.props.user} (account)
                      </NavLink>
                  </NavItem>
                  <NavItem onClick={this.props.logout}>
                    <NavLink>
                        Logout
                      </NavLink>
                  </NavItem>
                </Fragment>
                : <Fragment>
                  <NavItem onClick={this.props.toggleModal}>
                    <NavLink>
                        Login
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to='/new-account'>
                        Register
                      </NavLink>
                  </NavItem>
                </Fragment>}

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation

// const Nagivation = () => {
//   return (
//     <div>
//       <NavLink to='/'>Home</NavLink>
//       <NavLink to='/about'>About</NavLink>
//       <NavLink to='/contact'>Contact</NavLink>
//       <Button color='danger'>Danger!</Button>
//     </div>
//   )
// }

// export default Nagivation
