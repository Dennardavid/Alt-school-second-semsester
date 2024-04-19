import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  /* List rendering for the navbar linking to other pages */
  const pages = [
    <NavLink
      style={({ isActive }) =>
        isActive
          ? { color: "#f05323", textDecoration: "underline" }
          : { color: "#ffff" }
      }
      to="/"
      className="list"
    >
      Home
    </NavLink>,
    <NavLink
      style={({ isActive }) =>
        isActive
          ? { color: "#f05323", textDecoration: "underline" }
          : { color: "#ffff" }
      }
      to="/myrepos"
      className="list"
    >
      MyRepos
    </NavLink>,
  ];

  const navbarItems = pages.map((pages) => {
    return (
      <li key={pages} className="pageloader">
        {pages}
      </li>
    );
  });
  return (
    <header>
      <nav className="Nav">
        <h2>DOUBLED</h2>
        <ul className="list">{navbarItems}</ul>
      </nav>
    </header>
  );
}

export default Navbar;
