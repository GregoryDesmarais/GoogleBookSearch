import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          Google Books
        </span>
        <a className="nav-link" href='/'>Search</a>
        <a className="nav-link" href='/saved'>Saved</a>

    </nav>
  );
}

export default Nav;
