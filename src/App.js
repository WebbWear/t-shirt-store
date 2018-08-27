import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import ShirtList from './Component/ShirtList';
import PhotoList from './Component/PhotoList';
import ShirtDetail from './Component/ShirtDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <img className="logo" src="/images/header_LMS.jpg" alt="LOGO"/>            
          </header>
          <Switch>
            <Route path="/" exact component={ShirtList}/>
            <Route path="/:category" exact component={PhotoList}/>
            <Route path="/:category/:index" exact component={ShirtDetail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
