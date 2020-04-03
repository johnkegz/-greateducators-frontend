import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/aboutus' component={Aboutus}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
