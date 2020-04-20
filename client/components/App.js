import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getAllToDos } from '../store/actions';
import Nav from './Nav.js';
import AllToDos from './AllToDos';
import SignIn from './SignIn';
import AddToDo from './AddToDo';
import styles from '../css/app.css';


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllToDos()
  }

  render () {
    return (
      <div className={styles.app}>
        {
          this.props.error && <p style={{color: 'red', fontSize: '3rem'}}>{this.props.error}</p>
        }
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route exact path='/'>
                <AllToDos />
            </Route>`
            <Route exact path='/addtodo'>
              <AddToDo />
            </Route>
            <Route exact path='/signin'>
              <SignIn />
            </Route>
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
    error: state.error.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);