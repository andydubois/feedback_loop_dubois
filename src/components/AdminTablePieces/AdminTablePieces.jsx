import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

//table components from Material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


class AdminTablePieces extends Component {
    render() {
        return (
          <TableRow>
            <TableCell align='center'>{this.props.feedback.feeling}</TableCell>
            <TableCell align='center'>{this.props.feedback.understanding}</TableCell>
            <TableCell align='center'>{this.props.feedback.support}</TableCell>
            <TableCell align='center'>{this.props.feedback.comments}</TableCell>
            <TableCell align='center'>{this.props.feedback.flagged}</TableCell>
            <TableCell align='center'>{this.props.feedback.date}</TableCell>
          </TableRow>
        );
    }
}

export default connect()(AdminTablePieces);