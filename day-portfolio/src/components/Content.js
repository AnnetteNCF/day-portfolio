import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
 

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </Switch>
  )
}

export default Content
