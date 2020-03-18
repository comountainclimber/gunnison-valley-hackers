import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div id="navigation">
    {" "}
    <Link id="home-link" to="/">
      <h1> ⛰️⛰️Gunnison Valley Hackers⛰️⛰️</h1>{" "}
    </Link>
    <Link to="/week-1">
      Week 1 <small>(03/23/2020 - 03/29/2020)</small>
    </Link>
  </div>
);
