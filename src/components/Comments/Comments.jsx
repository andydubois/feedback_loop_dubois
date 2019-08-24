import React, { Component } from "react";
import { connect } from "react-redux";

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
        <p>Comments</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Leave any comments here!'
            onChange={event => this.handleChange("comment", event)}
          />
          <button type='submit'>NEXT</button>
        </form>
        <button onClick={this.handleBackButton}>BACK</button>
      </div>
    );
  }
}

export default connect()(Comments);
