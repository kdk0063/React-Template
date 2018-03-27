import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className='welcome'>
        Hello Andrew! Let's Code! 
      </div>
    );
  }
}

export default App;
