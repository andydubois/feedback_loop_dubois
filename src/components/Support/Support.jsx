import React, { Component } from "react";
import { connect } from "react-redux";

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
        <p>Support?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            placeholder='1-10'
            min='1'
            max='10'
            required
            onChange={event => this.handleChange("supportScore", event)}
          />
          <button type='submit'>NEXT</button>
        </form>
        <button onClick={this.handleBackButton}>BACK</button>
      </div>
    );
  }
}

export default connect()(Support);
