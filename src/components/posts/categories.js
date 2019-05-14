import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
//import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
//import Post from "./post";

class Notifications extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <div>
        {notifications ? (
          <React.Fragment>
            <ul className="list-group">
              {notifications.map(notificatioin => (
                <li className="list-group-item">
                  {notificatioin.username} {notificatioin.action}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ) : (
          <p>No notifications</p>
        )}
      </div>
    );
  }
}
// Notifications.propTypes = {
//   firestore: PropTypes.object.isRequired,
//   notifications: PropTypes.array
// };
// export default compose(
//   firestoreConnect([{ collection: "notifications" }]),
//   connect((state, props) => ({
//     notifications: state.firestore.ordered.notifications
//   }))
// )(Notifications);
export default Notifications;
