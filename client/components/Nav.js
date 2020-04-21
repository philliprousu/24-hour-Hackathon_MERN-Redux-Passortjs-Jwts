import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import styles from '../css/nav.css';

const Nav = ({ auth }) => {
  console.log(auth)
  return (
    <div className={styles.nav}>
      {
        auth &&
        <Fragment>
          <NavLink exact to='/'
            activeClassName={styles.selected}
          >
            All ToDos
          </NavLink>
          <NavLink exact to='/addtodo'
            activeClassName={styles.selected}
          >
            Add ToDo
          </NavLink>
          <NavLink exact to='/signout'
            activeClassName={styles.selected}
          >
            Sign Out
          </NavLink>
          </Fragment>
      }
      {
        !auth &&
        <Fragment>
          <NavLink exact to='/signup'
            activeClassName={styles.selected}
          >
            SignUp
          </NavLink>
          <NavLink exact to='/login'
            activeClassName={styles.selected}
          >
            Login
          </NavLink>
        </Fragment>
      }
    </div>
  )
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    auth: state.auth.auth
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     updateToDo: (id, updates) => dispatch(updateToDo(id, updates)),
//     deleteToDo: id => dispatch(deleteToDo(id))
//   }
// }

export default connect(mapStateToProps)(Nav);