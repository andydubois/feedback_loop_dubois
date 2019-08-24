import React, { Component } from "react";
import {connect} from "react-redux";

class Feedback extends Component {
  //function to change page on button click

  //local state
  state = {
    feelingScore: 0
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
  handleSubmit = (event) => {
    event.preventDefault();

    //triggers action to send info to server side
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feelingScore
    });
    //sends user to next page
    this.props.history.push("/understanding");
  };


  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <p>Feeling?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            placeholder='Scale from 1-10'
            onChange={event => this.handleChange("feelingScore", event)}
          />
          <button type='submit'>
            NEXT
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default  connect (mapStateToProps)(Feedback);
