import React, { Component } from "react";
import { connect } from "react-redux";

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
        <p>Understanding?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            placeholder='1-10'
            min='1'
            max='10'
            required
            onChange={event => this.handleChange("understandingScore", event)}
          />
          <button type='submit'>NEXT</button>
        </form>
        <button onClick={this.handleBackButton}>BACK</button>
      </div>
    );
  }
}

export default connect()(Understanding);
