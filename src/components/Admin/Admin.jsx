import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

//table components from Material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { statement } from "@babel/template";



class Admin extends Component {
  state = {
    feedbackArray: []
  };

  componentDidMount() {
    this.getFeedback();
  }

  handleSubmit = event => {
    this.props.history.push("/");
  };

  getFeedback = () => {
    axios
      .get("/feedback")
      .then(response => {
        console.log(response.data);
        this.setState({ feedbackArray: response.data });
      })
      .catch(error => {
        console.log("error client side GET", error);
      });
  };

  render() {
    return (
      <div>
        <h1>Feedback Results (ADMIN VIEW)</h1>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Feelings</TableCell>
                <TableCell>Understanding</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Further Attention?</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </Paper>

        {/* <table>
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
        </table> */}

        <button onClick={this.handleSubmit}>Return to Feedback</button>
      </div>
    );
  }
}

export default connect()(Admin);
