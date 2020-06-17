import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import './header.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <h1 className="nav-logo">
            day.
          </h1>
          <div className="nav-links">
            <ul>
              <li>
                <Link className="nav-links-individual" to="/">home</Link>
              </li>
              <li>
                <Link className="nav-links-individual" to="/projects">projects</Link>
              </li>
              <li>
                <Link className="nav-links-individual" to="/about">about</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}