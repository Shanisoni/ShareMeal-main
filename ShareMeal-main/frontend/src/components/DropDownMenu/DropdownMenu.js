import React from 'react';
import { Link } from 'react-router-dom';
import classes from './dropdownmenu.module.css';

export default function DropdownMenu({ user, logout }) {
  return (
    <div className={classes.menu_container}>
      <Link to="/dashboard">{user.name}</Link>
      <div className={classes.menu}>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/orders">Orders</Link> */}
        <a onClick={logout} href="/logout">Logout</a>
      </div>
    </div>
  );
}
