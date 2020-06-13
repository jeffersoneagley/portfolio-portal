import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, Resume, SocMon, GitHub } from "./components";

/** Renders the portfolio portal
 *
 * @returns {React.FunctionComponent}
 */
export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/socmon" component={SocMon} />
      <Route path="/github" component={GitHub} />
    </Switch>
  </Router>
);
