import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={linkStyle} activeStyle={{ background: "darkblue" }}>
        Home
      </NavLink>
      <NavLink to="/movies" style={linkStyle} activeStyle={{ background: "darkblue" }}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={linkStyle} activeStyle={{ background: "darkblue" }}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={linkStyle} activeStyle={{ background: "darkblue" }}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
