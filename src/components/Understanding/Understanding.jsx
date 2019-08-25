import React, { Component } from "react";
import { connect } from "react-redux";

//Material UI components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ArrowRightSharp} from "@material-ui/icons";
import { AssignmentReturn } from "@material-ui/icons";

class Understanding extends Component {
  //local state
  state = {
    understandingScore: 0
  };

  //handle change function to rule them all
  handleChange = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
    console.log(this.state.understandingScore);
  };

  handleSubmit = event => {
    event.preventDefault();
    //takes current local state and sends to reducer
    this.props.dispatch({
      type: "ADD_UNDERSTANDING",
      payload: this.state.understandingScore
    });
    //sends user to next page
    this.props.history.push("/support");
  };

  handleBackButton = event => [this.props.history.push("/")];

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className='scoreInputField'
            type='number'
            placeholder='Scale from 1-10'
            inputProps={{ min: "0", max: "10", step: "1" }}
            required
            onChange={event => this.handleChange("understandingScore", event)}
            margin='normal'
          />
          <br />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className='nextButton'>
            NEXT <ArrowRightSharp />
          </Button>
        </form>
        <Button variant='outlined' color='secondary' onClick={this.handleBackButton}><AssignmentReturn />BACK</Button>
      </div>
    );
  }
}

export default connect()(Understanding);
