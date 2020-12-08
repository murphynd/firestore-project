import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";

class Control extends React.Component {
  render() {
    const auth = this.props.firebase.auth();
    console.log(auth);
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
      currentlyVisibleState = <h1>You are signed in! lolol</h1>;
      return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
    }
  }
}

export default withFirestore(Control);
