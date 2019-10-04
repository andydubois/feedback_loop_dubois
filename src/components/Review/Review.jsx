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
      feelings: this.props.reduxStore.feedback.feeling,
      understanding: this.props.reduxStore.feedback.understanding,
      support: this.props.reduxStore.feedback.support,
      comment: this.props.reduxStore.feedback.comment
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
        <h3>Feelings: {this.props.reduxStore.feedback.feeling}</h3>
        <h3>Understanding: {this.props.reduxStore.feedback.understanding}</h3>
        <h3>Support: {this.props.reduxStore.feedback.support}</h3>
        <h3>Comments: {this.props.reduxStore.feedback.comment}</h3>
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
