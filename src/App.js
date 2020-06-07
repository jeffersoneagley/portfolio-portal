import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";

/** Renders the portfolio portal
 *
 * @returns {React.FunctionComponent}
 */
export const App = () => (
  <div id="App">
    <h1>
      <strong>Daryk Kohler</strong>
    </h1>
    <Navbar />
  </div>
);
