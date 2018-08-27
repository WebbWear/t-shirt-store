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
            <h1 className="App-title">LOGO</h1>
            <h3 className="">Created by Jeff</h3>
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
