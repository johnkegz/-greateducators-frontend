import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus"
import Page from "./components/Layout/page";
import Activities from './components/Activities';
import Objectives from './components/Objectives';
import Obituaries from './components/Obituaries';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      
      <Router>
        <Switch>
        <Page>
          <Route exact path='/' component={Home}/>
          <Route path='/aboutus' component={Aboutus}/>
          <Route path='/activities' component={Activities}/>
          <Route path='/objectives' component={Objectives}/>
          <Route path='/obituaries' component={Obituaries}/>
          <Route path='/board' component={Board}/>
        </Page>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
