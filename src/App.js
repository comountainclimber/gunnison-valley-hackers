import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Week1 from "./pages/Week1";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import logo from "./logo.svg";
import "./App.css";
import Week1Solution from "./pages/Week1Solution";

function App() {
  return (
    <div className="App">
      <Router basename="/gunnison-valley-hackers">
        <Navigation />
        <Switch>
          <Route path="/week-1" component={() => <Week1 />} />
          <Route path="/week-1-solution" component={() => <Week1Solution />} />
          <Route path="/" component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
