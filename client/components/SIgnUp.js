import React, { useState } from 'react';
import { signUp } from '../store/actions.js';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const SignUp = ({ signUp, error }) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signUp({ email: email, password: password })
      .then(result => history.push('/'))
      .catch(e => {})
  }

  return (
      <form onSubmit={e => handleSubmit(e)}>
        {
          error && <p style={{color: 'red', fontSize: '1.5rem'}}>{error}</p>
        }
        <div>
          <label htmlFor="signin-email"><p>Email address:</p></label>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            id="signin-email"
            placeholder='abc@mail.com . . . '
            required
          />
        </div>
        <div>
          <label htmlFor="password"><p>Password:</p></label>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            id="password"
            required
          />
        </div>
        <button>Sign Up</button>
      </form>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: userObj => dispatch(signUp(userObj))
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    error: state.auth.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);