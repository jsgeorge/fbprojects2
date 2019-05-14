import React, { Component } from "react";
import { firebaseConnect } from "react-redux-firebase";
import { firestoreConnect } from "react-redux-firebase";

import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";

class User extends Component {
  render() {
    // const { user } = this.props;
    const { auth } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-body">
            <h3>Account</h3>
            <p>
              <strong>Email</strong> {auth.email}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
User.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  firestoreConnect(props => [
    { collection: "users", storeAs: "user", doc: this.props.auth.uid }
  ]),
  connect((state, props) => ({
    auth: state.firebase.auth
  })),
  connect(({ firestore: { ordered } }, props) => ({
    user: ordered.user && ordered.user[0] // lodash's get can also be used
  }))
)(User);
