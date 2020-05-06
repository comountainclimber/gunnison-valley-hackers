import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Week6 from "./pages/Week6";
import Week5 from "./pages/Week5";
import Week4 from "./pages/Week4";
import Week3 from "./pages/Week3";
import Week2 from "./pages/Week2";
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
          <Route path="/week-6" component={() => <Week6 />} />
          <Route path="/week-5" component={() => <Week5 />} />
          <Route path="/week-4" component={() => <Week4 />} />
          <Route path="/week-3" component={() => <Week3 />} />
          <Route path="/week-2" component={() => <Week2 />} />
          <Route path="/week-1" component={() => <Week1 />} />
          <Route path="/week-1-solution" component={() => <Week1Solution />} />
          <Route path="/" component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
