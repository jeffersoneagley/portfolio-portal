import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Resume } from "./components/Resume";
import { SocMon } from "./components/SocMon";

/** Renders the portfolio portal
 *
 * @returns {React.FunctionComponent}
 */
export const App = () => (
  <Router>
    <div id="App">
      <h1>
        <strong>Daryk Kohler</strong>
      </h1>
      <Navbar />
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/socmon" component={SocMon} />
      </Switch>
    </div>
  </Router>
);
