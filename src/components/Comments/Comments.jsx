import React, { Component } from "react";
import { connect } from "react-redux";

//Material UI components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ArrowRightSharp } from "@material-ui/icons";
import { Assignment } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AssignmentReturn } from "@material-ui/icons";

class Comments extends Component {
  //local state
  state = {
    comment: ""
  };

  //handle change function to rule them all
  handleChange = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
    console.log(this.state.comment);
  };

  //function to run when Next button is clicked and "submits" form
  handleSubmit = event => {
    event.preventDefault();
    //takes current local state and sends to reducer
    this.props.dispatch({
      type: "ADD_COMMENT",
      payload: this.state.comment
    });
    //sends user to next page
    this.props.history.push("/review");
  };

  handleBackButton = event => [this.props.history.push("/support")];

  render() {
    return (
      <div>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className='commentSection'
            label='Leave comments here'
            onChange={event => this.handleChange("comment", event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Assignment />
                </InputAdornment>
              )
            }}
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

export default connect()(Comments);
