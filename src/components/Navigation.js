import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div id="navigation">
    {" "}
    <Link id="home-link" to="/">
      <h1> ⛰️⛰️Gunnison Valley Hackers⛰️⛰️</h1>{" "}
    </Link>
    <Link to="/week-1">Week 1</Link>
    <br />
    <Link to="/week-2">Week 2</Link>
    <br />
    <Link to="/week-3">Week 3</Link>
    <br />
    <Link to="/week-4">Week 4</Link>
  </div>
);
