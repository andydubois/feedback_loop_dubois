import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

//Material UI components
import AdminTablePieces from "../AdminTablePieces/AdminTablePieces";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CssBaseline } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
    let listOfFeedback = this.state.feedbackArray.map(feedback => {
      return (
        <AdminTablePieces key={feedback.id} feedback={feedback} />
      );
    });

    return (
      <div>
        <CssBaseline />
        <h1>Feedback Results (ADMIN VIEW)</h1>

        <Paper>
          <Table className='adminTable'>
            <TableHead>
              <TableRow>
                <TableCell>Feelings</TableCell>
                <TableCell>Understanding</TableCell>
                <TableCell>Support</TableCell>
                <TableCell align='center'>Comments</TableCell>
                <TableCell>Further Attention?</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{listOfFeedback}</TableBody>
          </Table>
        </Paper>
        <Button
          onClick={this.handleSubmit}
          fullWidth
          variant='contained'
          color='secondary'>
          Return to Feedback
        </Button>
      </div>
    );
  }
}

export default connect()(Admin);
