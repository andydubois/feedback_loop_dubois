import React, { Component } from "react";
import { connect } from "react-redux";

//Material UI components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ArrowRightSharp } from "@material-ui/icons";
import { AssignmentReturn } from "@material-ui/icons";


class Support extends Component {
  //local state
  state = {
    supportScore: 0
  };

  //handle change function to rule them all
  handleChange = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
    console.log(this.state.feelingScore);
  };

  //function to run when Next button is clicked and "submits" form
  handleSubmit = event => {
    event.preventDefault();

    //takes current local state and sends to reducer
    this.props.dispatch({
      type: "ADD_SUPPORT",
      payload: this.state.supportScore
    });
    //sends user to next page
    this.props.history.push("/comments");
  };
  //end handleSubmit

  handleBackButton = event => [this.props.history.push("/understanding")];

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <p>1 for worst, 10 for best</p>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className='scoreInputField'
            type='number'
            placeholder='Scale from 1-10'
            inputProps={{ min: "0", max: "10", step: "1" }}
            required
            onChange={event => this.handleChange("supportScore", event)}
            margin='normal'
          />
          <br />
          <Button
            variant='outlined'
            color='secondary'
            onClick={this.handleBackButton}>
            <AssignmentReturn />
            BACK
          </Button>
          <Button
            className='nextButton'
            variant='contained'
            color='primary'
            type='submit'>
            NEXT <ArrowRightSharp />
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(Support);
