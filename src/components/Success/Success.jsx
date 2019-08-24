import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

class Success extends Component {




  handleSubmit = (event) => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>THANK YOU!!</h1>

        <button onClick={this.handleSubmit}>Leave New Feedback</button>
      </div>
    );
  }
}


export default connect()(Success);