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
        <Link to="/" className={classes.logo} id="heroname">
          <img src="/images/logo.png" alt="Logo" />
          ShareMeal
        </Link>

        {/* Navigation Menu */}
        <nav className={`${classes.nav} ${menuOpen ? classes.open : ""}`}>
          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/" className="headertext" >Home</Link>
                </li>
                <li>
                  <Link to="/about" className="headertext">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="headertext">Contact Us</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="headertext">Dashboard</Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>

        {/* User Menu */}
        {user && <DropdownMenu user={user} logout={logout} className={classes.userMenu} />}

        {/* Login Button (Shifted to Right) */}
        {!user && (
          <li className={`${classes.loginButton}`}>
            <Link to="/login">Login</Link>
          </li>
        )}

        {/* Hamburger Menu */}
        <div className={classes.hamburger} onClick={toggleMenu}>
          {menuOpen ? <span className={classes.close}>&#x2715;</span> : <span className={classes.burger}>&#9776;</span>}
        </div>
      </div>
    </header>
  );
}
