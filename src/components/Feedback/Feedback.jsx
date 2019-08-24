import React, { Component } from "react";
import { connect } from "react-redux";

class Feedback extends Component {
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
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <p>Feeling?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            placeholder='Scale from 1-10'
            min='1'
            max='10'
            required
            onChange={event => this.handleChange("feelingScore", event)}
          />
          <button type='submit'>NEXT</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Feedback);
