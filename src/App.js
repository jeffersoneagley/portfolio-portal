import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Resume } from "./components/Resume";
import { SocMon } from "./components/SocMon";
import { GitHub } from "./components/github";

/** Renders the portfolio portal
 *
 * @returns {React.FunctionComponent}
 */
export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/resume" component={Resume} />
      <Route path="/socmon" component={SocMon} />
      <Route path="/github" component={GitHub} />
    </Switch>
  </Router>
);
