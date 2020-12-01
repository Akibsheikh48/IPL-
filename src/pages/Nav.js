import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav__option">
      <Link to="/">
        <div className="Nav__option">
          <span className="nav__optionLine">Home</span>
        </div>
      </Link>

      <Link to="/matches">
        <div className="Nav__option">
          <span className="nav__optionLine">Matches</span>
        </div>
      </Link>

      <Link to="/teams">
        <div className="Nav__option">
          <span className="nav__optionLine">Teams</span>
        </div>
      </Link>

      <Link to="/mostRuns">
        <div className="Nav__option">
          <span className="nav__optionLine">Top Players</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
