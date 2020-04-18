import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getAllToDos } from '../store/actions';
import Nav from './Nav.js';
import AllToDos from './AllToDos';
import SignIn from './SignIn';
import AddToDo from './AddToDo';


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllToDos()
  }

  render () {
    return (
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
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllToDos: () => dispatch(getAllToDos())
  }
}

export default connect(null, mapDispatchToProps)(App);