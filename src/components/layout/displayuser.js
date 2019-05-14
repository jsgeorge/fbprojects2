import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
//import { firestoreConnect, getVal } from "react-redux-firebase";
//import PropTypes from "prop-types";

class DisplayUser extends Component {
  render() {
    const { user } = this.props;
    if (user) {
      return (
        <React-Fragment>
          <img src={user.photoURL} alt={"img"} /> {user.displayName}
        </React-Fragment>
      );
    } else {
      return "no user";
    }
  }
}
// export default compose(
//   firestoreConnect(props => [
//     { collection: "users", storeAs: "user", doc: props.userid }
//   ]),
//   connect(({ firestore: { ordered } }, props) => ({
//     user: ordered.user && ordered.user[0] // lodash's get can also be used
//   }))
// )(DisplayUser);
export default DisplayUser;
