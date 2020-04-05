import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus"
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from "./components/Layout/page";
import Activities from './components/Activities';

class App extends Component {
  render() {
    return (
      
      <Router>
        <Switch>
        <Page>
          <Route exact path='/' component={Home}/>
          <Route path='/aboutus' component={Aboutus}/>
          <Route path='/activities' component={Activities}/>
        </Page>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
