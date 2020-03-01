import React, { Component } from 'react';
import Sidenav from './components/layouts/Sidenav';
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

         
<header>
<Sidenav></Sidenav>
            <Route exact
              path="/" component={Home} />
            
</header>
          <Route exact
            path="/contact" component={Contact} />
          <Route exact
            path="/projects" component={Projects} />
    
      </div>
      </Router>
    );
  }
}

export default App;