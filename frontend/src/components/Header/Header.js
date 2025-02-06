import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import DropdownMenu from "../DropDownMenu/DropdownMenu";
import classes from "./header.module.css";

export default function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        {/* ShareMeal Logo (Left in mobile) */}
        <Link to="/" className={classes.logo}>
          ShareMeal
        </Link>

        {/* Hamburger Menu (Right in mobile) */}
        <div className={classes.hamburger} onClick={toggleMenu}>
          {menuOpen ? (
            <span className={classes.close}>&#x2715;</span> // Close icon
          ) : (
            <span className={classes.burger}>&#9776;</span> // Hamburger icon
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`${classes.nav} ${menuOpen ? classes.open : ""}`}>
  <ul>
    {user ? (
      <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <DropdownMenu user={user} logout={logout} isOpen={menuOpen} />
      </>
    ) : (
      <li><Link to="/login">Login</Link></li>
    )}
  </ul>
</nav>

    </header>
  );
}
