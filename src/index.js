import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';


class Home extends Component{
  render(){
    return(
      <Router>
        <div>
        <ul>
          <li><a href='/index'>Home</a></li>
          <li><a href='/Happy'>Happy</a></li>
          <li><a href='/Sleepy'>Sleepy</a></li>
          <li><a href='/Guilty'>Guilty</a></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/Happy" component={Happy} />
        <Route path="/Sleepy" component={Sleepy} />
        <Route path="/Guilty" component={Guilty} />
        </div>
      </Router>
      )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
