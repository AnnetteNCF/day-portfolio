import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react';
import Header from './components/header.js';
import Content from './components/Content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;





// class App extends Component {
//   render() {
//     return (
//        <BrowserRouter>
//           <div>
//            <Header />
//           </div>
//         </BrowserRouter>  
//     );
//   }
// }

// export default App;

// import React from 'react';
// import Home from './pages/Home.js';
// import About from './pages/About.js';
// import Projects from './pages/Projects.js';
// import { BrowserRouter as Router, Route } from "react-router-dom"
// import './App.css';

// import Header from './components/header/header.js';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Route path='/' exact component={Home} />
//         <Route path='/about' component={About} />
//         <Route path='/projects' component={Projects} />
//       </div>
//     </Router>
//   );
// }

// export default App;


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



// //React frontend file
// import React from 'react';
// import './App.css';
// import About from './pages/About.js';
// import Home from './pages/Home.js';
// // import Contact from './pages/Contact.js';
// import Contact from './components/Contact2.js';
// import {BrowserRouter, Route} from 'react-router-dom';

// function App() {
//   return (
//      <BrowserRouter>
//         <div>
//           <Route exact={true} path='/' render={() => (
//             <div className="App">
//               <Home />
//             </div>
//           )}/>
//           <Route exact={true} path='/about' render={() => (
//             <div className="App">
//               <About />
//             </div>
//           )}/>
//           <Route exact={true} path='/contact' render={() => (
//             <div className="App">
//               <Contact />
//             </div>
//           )}/>
//         </div>

//       </BrowserRouter>  );
// }

// export default App;
