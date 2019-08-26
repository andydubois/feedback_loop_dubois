import React, { Component } from "react";
import { connect } from "react-redux";

//Material UI components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ArrowRightSharp} from "@material-ui/icons";
import { Undo } from "@material-ui/icons";

class Feedback extends Component {
  //local state
  state = {
    feelingScore: 0
  };

  //   handle change function to rule them all
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
      type: "ADD_FEELING",
      payload: this.state.feelingScore
    });
    //sends user to next page
    this.props.history.push("/understanding");
  };
  //end handleSubmit

  render() {
    //Material UI function
    //sets marks on slider component

    return (
      <div>
        <h2>How are you feeling today?</h2>
        <p>1 for worst, 10 for best</p>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className='scoreInputField'
            type='number'
            placeholder='Scale from 1-10'
            inputProps={{ min: "0", max: "10", step: "1" }}
            required
            onChange={event => this.handleChange("feelingScore", event)}
            margin='normal'
          />
          <br />
          <Button
            variant='contained'
            color='secondary'
            onClick={this.handleBackButton}>
            <Undo />
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

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Feedback);
