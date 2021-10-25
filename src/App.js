import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Details } from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
