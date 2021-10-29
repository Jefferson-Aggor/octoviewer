import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Home, Details } from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home Loader={Loader} />
        </Route>
        <Route exact path="/details/:name">
          <Details Loader={Loader} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
