import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

class ModalLogin extends Component {
  render () {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModalLogin}>
        <ModalHeader toggle={this.props.toggleModalLogin}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='e-mail'
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='password'
                name='password'
                id='examplePassword'
                placeholder='password'
              />
            </FormGroup>
            <Button color='success' onClick={this.props.login}>Login</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color='secondary'
            onClick={this.props.toggleModalLogin}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ModalLogin
