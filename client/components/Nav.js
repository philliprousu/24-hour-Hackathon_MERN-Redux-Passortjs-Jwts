import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../css/nav.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
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
      <NavLink exact to='/signin'
        activeClassName={styles.selected}
      >
        SignIn
      </NavLink>
    </div>
  )
};

export default Nav;