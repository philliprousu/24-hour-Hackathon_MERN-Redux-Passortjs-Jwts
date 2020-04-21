import React, { Component } from 'react';
import { connect } from 'react-redux';

const Auth = ChildComponent => {

  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/signup');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth.auth
    };
  }
  return connect(mapStateToProps)(ComposedComponent);
};

export default Auth;