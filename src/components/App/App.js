import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

//Components
import Feedback from "../Feedback/Feedback";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Admin from "../Admin/Admin";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5e35b1"
    },
    secondary: {
      light: "#ffff72",
      main: "#ffeb3b"
    },
    background: {
      default: "#9575cd"
    }
  }
});


class App extends Component {
  render() {
    return (
      <div className='App'>
        <MuiThemeProvider theme={theme}>
          <Router>
            <header className='App-header'>
              <h1 className='App-title'>Feedback!</h1>
              <h4>
                <i>DO IT NOW!</i>
              </h4>
            </header>
            <br />
            <div className='content'>
              <Route exact path='/' component={Feedback} />
              <Route path='/understanding' component={Understanding} />
              <Route path='/support' component={Support} />
              <Route path='/comments' component={Comments} />
              <Route path='/review' component={Review} />
              <Route path='/success' component={Success} />
              <Route path='/admin' component={Admin} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
