import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

//Material UI components
import { Send } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";
import { Undo } from "@material-ui/icons";

class Review extends Component {
  state = {
    feedback: {
      feelings: this.props.reduxStore.feelingsReducer,
      understanding: this.props.reduxStore.understandingReducer,
      support: this.props.reduxStore.supportReducer,
      comment: this.props.reduxStore.commentReducer
    }
  };

  componentDidMount() {
    console.log(this.state.feedback);
  }

  handleSubmit = event => {
    axios
      .post("/feedback", this.state.feedback)
      .then(response => {
        console.log("successful post of object:", this.state.feedback);
      })
      .catch(error => {
        console.log("there was an error in the client side POST", error);
      });
    this.props.history.push("/success");
    this.props.dispatch({
      type: "SUBMIT_ALL",
    });
  };

  handleBackButton = event => [this.props.history.push("/comments")];

  render() {
    return (
      <div>
        <CssBaseline />
        <h1>REVIEW YOUR FEEDBACK</h1>
        <h3>Feelings: {this.props.reduxStore.feelingsReducer}</h3>
        <h3>Understanding: {this.props.reduxStore.understandingReducer}</h3>
        <h3>Support: {this.props.reduxStore.supportReducer}</h3>
        <h3>Comments: {this.props.reduxStore.commentReducer}</h3>
        <Button
          variant='contained'
          color='secondary'
          onClick={this.handleBackButton}>
          <Undo />
          BACK
        </Button>
        <Button onClick={this.handleSubmit} variant='outlined'>
          Submit <Send />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Review);
