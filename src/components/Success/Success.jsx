import React, { Component } from "react";
import { connect } from "react-redux";

//Material UI components
import Button from "@material-ui/core/Button";


class Success extends Component {




  handleSubmit = (event) => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>THANK YOU!!</h1>

        <Button onClick={this.handleSubmit}>Leave New Feedback</Button>
      </div>
    );
  }
}


export default connect()(Success);