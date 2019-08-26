import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

//table components from Material UI

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


class AdminTablePieces extends Component {
    render() {
        return (
          <TableRow >
            <TableCell align='center'>{this.props.feedback.feeling}</TableCell>
            <TableCell align='center'>{this.props.feedback.understanding}</TableCell>
            <TableCell align='center'>{this.props.feedback.support}</TableCell>
            <TableCell align='center'>{this.props.feedback.comments}</TableCell>
            <TableCell align='center'>{this.props.feedback.flagged.toString()}</TableCell>
            <TableCell align='center'><Moment format="MM/DD/YYYY">{this.props.feedback.date}</Moment></TableCell>
          </TableRow>
        );
    }
}

export default connect()(AdminTablePieces);