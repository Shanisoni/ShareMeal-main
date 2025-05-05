import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
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
        <Link to="/" className={classes.logo}>
          <img src="/images/logo.png" alt="Logo" />
          ShareMeal
        </Link>



        <nav className={classes.nav}>
          <ul>
            <li><Link to="/" className="headertext">Home</Link></li>
            <li><Link to="/about" className="headertext">About</Link></li>
            <li><Link to="/contact" className="headertext">Contact</Link></li>
            {user && <li><Link to="/dashboard" className="headertext">Dashboard</Link></li>}
          </ul>
        </nav>

        {user && (
          <span className={classes.username}>{user.name}</span> // Username appears only on large screens
        )}



        {!user && (
          <li className={classes.loginButton}>
            <Link to="/login">Login</Link>
          </li>
        )}



        <div className={classes.hamburger} onClick={toggleMenu}>
          {menuOpen ? <span className={classes.close}>&#x2715;</span> : <span className={classes.burger}>&#9776;</span>}
        </div>
      </div>



      {/* Mobile Menu */}
      <div className={`${classes.mobileMenu} ${menuOpen ? classes.open : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          {user && <li><Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link></li>}
          {!user && (
            <li className={classes.mobileLoginButton}>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </li>
          )}


          {/* Logout button in mobile menu */}
          {user && (
            <li className={classes.mobileLogout} onClick={logout}>
              <Link to="#">Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </header> 
  );
}
