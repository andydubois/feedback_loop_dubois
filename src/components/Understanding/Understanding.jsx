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

    this.props.dispatch({
      type: "ADD_UNDERSTANDING",
      payload: this.state.understandingScore
    });
    //sends user to next page
    this.props.history.push("/support");
  };

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <p>Understanding?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            placeholder='1-10'
            onChange={event => this.handleChange("understandingScore", event)}
          />
          <button type='submit'>NEXT</button>
        </form>
      </div>
    );
  }
}

export default connect()(Understanding);
