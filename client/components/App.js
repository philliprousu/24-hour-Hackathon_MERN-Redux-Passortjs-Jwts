import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getAllToDos } from '../store/actions';
import Nav from './Nav.js';
import AllToDos from './AllToDos';
import SignUp from './SignUp';
import AddToDo from './AddToDo';
import Login from './Login';
import SignOut from './SignOut';
import styles from '../css/app.css';


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.auth) {
      this.props.getAllToDos()
    }
  }

  componentDidUpdate() {
    if (this.props.auth) {
      this.props.getAllToDos()
    }
  }

  render () {
    return (
      <div className={styles.app}>
        {
          this.props.error && <p style={{color: 'red', fontSize: '1rem'}}>{this.props.error}</p>
        }
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route exact path='/' component={AllToDos} />
            <Route exact path='/addtodo' component={AddToDo} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signout' component={SignOut} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllToDos: () => dispatch(getAllToDos())
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    error: state.error.error,
    auth: state.auth.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);