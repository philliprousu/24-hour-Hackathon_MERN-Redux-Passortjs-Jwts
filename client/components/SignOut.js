import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signOut();
  }

  render() {
    return <div>See Ya</div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Signout);