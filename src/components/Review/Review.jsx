import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

class Review extends Component {
  state = {
    feedback: {
      feelings: this.props.reduxStore.feelingsReducer,
      understanding: this.props.reduxStore.understandingReducer,
      support: this.props.reduxStore.supportReducer,
      comment: this.props.reduxStore.commentReducer
    }
  };

  componentDidMount() {
    console.log(this.state.feedback)
  }

  handleSubmit = (event) => {
      axios.post('/feedback', this.state.feedback)
      .then(response => {
          console.log('successful post of object:', this.state.feedback)
      })
      .catch(error => {
          console.log('there was an error in the client side POST', error)
      })
      this.props.history.push('/success')
  }

  render() {
    return (
      <div>
        <h1>REVIEW YOUR FEEDBACK</h1>
        <h3>Feelings: {this.props.reduxStore.feelingsReducer}</h3>
        <h3>Understanding: {this.props.reduxStore.understandingReducer}</h3>
        <h3>Support: {this.props.reduxStore.supportReducer}</h3>
        <h3>Comments: {this.props.reduxStore.commentReducer}</h3>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}


const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Review);