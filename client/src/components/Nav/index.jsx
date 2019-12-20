import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
        <span className="navbar-brand">
          Google Book Search
        </span>
        <a className="nav-link btn btn-primary" href='/'>Search</a>
        <a className="nav-link btn btn-info" href='/saved'>Saved</a>

    </nav>
  );
}

export default Nav;
