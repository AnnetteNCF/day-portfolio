import React from 'react';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Header from './components/header/header.js';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Body />
//       </div>
//     </Router>
//   );
// }

// export default App;
