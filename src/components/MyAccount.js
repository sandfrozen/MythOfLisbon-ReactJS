import React, { Component } from 'react';

class MyAccount extends Component {
  render() {
    return (
      <div>
        My account
        {this.props.location.pathname}
      </div>
    );
  }
}

export default MyAccount;