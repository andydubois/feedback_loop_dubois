import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Admin extends Component {
  handleSubmit = event => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Feedback Results (ADMIN VIEW)</h1>
        <table>
          <thead>
            <tr>
              <th>Feelings</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Further Attention Needed?</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>feelings test</td>
              <td>understanding test</td>
              <td>support test</td>
              <td>comments test</td>
              <td>Further attention test</td>
              <td>date test</td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.handleSubmit}>Return to Feedback</button>
      </div>
    );
  }
}

export default connect()(Admin);
