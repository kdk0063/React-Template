import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Intro from './components/Intro';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import GotSole from './components/GotSole';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>  
            <Route exact path='/' component={Intro}/>
            <Route exact path='/home' component={Home}/>     
            <Route exact path='/projects' component={Projects} />    
            <Route exact path='/skills' component={Skills} />  
            <Route exact path='/contact' component={Contact} /> 
            {/* <Route exact path='/gotsole' component={GotSole} />        */}
        </Switch>
      </Router>
    );
  }
}
export default App;
