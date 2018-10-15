import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalLogin extends Component {
  render () {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModalLogin}>
        <ModalHeader toggle={this.props.toggleModalLogin}>Login</ModalHeader>
        <ModalBody>
          Write Your email and password:
        </ModalBody>
        <ModalFooter>
          <Button color='success' onClick={this.props.login}>
            Login
          </Button>
          <Button outline color='secondary' onClick={this.props.toggleModalLogin}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalLogin
