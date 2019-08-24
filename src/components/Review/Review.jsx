import React, { Component } from "react";
import { connect } from "react-redux";

class Review extends Component {
    render() {
        return (
            <div>
                <h1>REVIEW PAGE BITCHES</h1>
            </div>
        )
    }
}


const mapStateToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStateToProps)(Review);