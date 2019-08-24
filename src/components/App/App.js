import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

//Components
import Feedback from "../Feedback/Feedback";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support"
import Comments from "../Comments/Comments"
import Review from "../Review/Review"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <Route exact path='/' component={Feedback} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments}/>
          <Route path='/review' component={Review}/>
        </Router>
      </div>
    );
  }
}

export default App;
