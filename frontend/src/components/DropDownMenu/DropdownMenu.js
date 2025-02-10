import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './dropdownmenu.module.css';

export default function DropdownMenu({ user, logout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.menu_container} ref={menuRef}>
      {/* Toggle Dropdown on Click */}
      <button className={classes.userButton} onClick={() => setOpen(!open)}>
        {user.name} 
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className={classes.menu}>
          <Link to="/profile">Profile</Link>
          <a onClick={logout} href="#">Logout</a>
        </div>
      )}
    </div>
  );
}
